import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getEmailFromLocal, getTokenFromLocal,reomoveTokenFromLocal } from '../../utils';
import { ToastContainer,toast } from 'react-toastify';
import { Avatar } from '@mui/material';

function Header() {
  const navigate=useNavigate()
  const [token,setToken] = useState(null)
  const[email,setEmail]= useState('')
  const[showLogout,setShowLogout] = useState(false)
  const value=useSelector((state)=>state.cart.value)  
  const handleClick=()=>{
   navigate('/signup')
  }
  const handleDetail=()=>{
    // navigate('/cartdetail')
    navigate('/cartdetail')
  }
  const handleLogout=()=>{
    reomoveTokenFromLocal()
    toast.success('Logout Successfully')
    setToken(null)
    navigate('/')
  }
  useEffect(()=>{
   const getToken=getTokenFromLocal();
   setToken(getToken)

  const storedEmail=getEmailFromLocal();
  setEmail(storedEmail)
  },[])
  return (
    <>
    <div className='flex items-center justify-between m-4'>
     <div className='w-28 cursor-pointer'>
      <NavLink to='/'>
      <img src="https://www.logodesign.net/logo/letter-z-forming-shopping-cart-shape-5293ld.png?nwm=1&nws=1&industry=ecommerce&sf=&txt_keyword=All" alt="Ecommerce Logo" width={100} />
      </NavLink>
     </div>
     <div >
      <ul className='flex items-center gap-6'>
        <li><NavLink to='/'   className={({ isActive }) => isActive ? "text-red-500 font-semibold" : "text-black"}>All</NavLink></li>
        <li><NavLink to='/menfront'   className={({ isActive }) =>isActive ? "text-red-500 font-semibold" : "text-black"
  }>Men</NavLink></li>
        <li><NavLink to='/womenfront'  className={({ isActive }) => isActive ? "text-red-500 font-semibold" : "text-black"}>Women</NavLink></li>
        <li><NavLink to='/jewleryfront'  className={({ isActive }) => isActive ? "text-red-500 font-semibold" : "text-black"}>Jewelery</NavLink></li>
        <li><NavLink to='/electronicsfront'  className={({ isActive }) => isActive ? "text-red-500 font-semibold" : "text-black"}>Electronics</NavLink></li>
      </ul>
     </div>
     <div className='flex gap-4 items-center'>
      <div className='relative' onMouseEnter={()=>setShowLogout(true)} onMouseLeave={() => setTimeout(() => setShowLogout(false), 500)}>
      {token && <Avatar sx={{ bgcolor: '#172554', cursor:'pointer' }} >
        {email ? email.charAt(0).toUpperCase():""}
        </Avatar>}
        {showLogout && (<button className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-blue-950 text-white text-sm rounded-full px-4 py-1 shadow-md" onClick={handleLogout}>LOGOUT</button>)}
      </div>
      
      {!token &&( <button className='text-sm bg-blue-950 text-white rounded-full px-4 py-1' onClick={handleClick}>SIGNUP</button>) }
      <ToastContainer position='top-left' autoClose={4000} />
      <div className="relative">
      <FaShoppingCart className="text-black text-4xl cursor-pointer"onClick={handleDetail}/>
      <p className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
      {value}
  </p>
</div>
     </div>
    </div>
    
    
    
    </>
  )
}

export default Header