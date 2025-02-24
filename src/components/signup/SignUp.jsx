import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../apis/const'
import { NavLink } from 'react-router-dom'

function SignUp() {
  const [username,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!username || !email || !password){
      alert('Fill All Fields')
      return;
    }
    const userData={username,email,password, provider: "email"}
    try {
      await signUp(userData);
      alert("Signup Successfully");
      setUserName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (error) {
      alert("Signup Failed");
    }
  }
  return (
    <>
   <div className='w-full bg-pink-100 h-[100vh] flex items-center justify-center'>
    <div className='w-[400px] h-auto bg-white flex items-center justify-center py-8 rounded-md'>
      <form onSubmit={handleSubmit}>
      <h1 className='text-2xl text-green-800'>Sign Up</h1><br/>
      <input type="text" placeholder='Your Name' className='px-8 py-2 border-2 border-black' value={username} onChange={(e)=>setUserName(e.target.value)} /><br/><br/>
      <input type="email" placeholder='Email Address'  className='px-8 py-2 border-2 border-black' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
      <input type="password" placeholder='Password'  className='px-8 py-2 border-2 border-black' value={password} onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
      <button className='bg-green-800 w-full py-2 rounded-full text-white'>Continue</button>
      <NavLink  to="/login"  className="block text-center mt-4 text-blue-800 font-semibold hover:underline hover:text-blue-600 transition duration-200"
      > Already have an account? Login
     </NavLink>
      </form>


    </div>
   </div>
    
    
    
    </>
  )
}

export default SignUp