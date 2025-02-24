import React, { useState } from 'react'
import { login } from '../../apis/const'
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { setEmailInLocal } from '../../utils'
import { jwtDecode } from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google'
function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!email || !password){
      toast.error('please fill all fields')
      return;
    }
     const userData={email,password, provider: "email"}
        try {
          await login(userData);
          setEmailInLocal(email)
          toast.success('Login Successfully')
          setEmail("");
          setPassword("");
          setTimeout(() => navigate('/'), 1500);
        } catch (error) {
          toast.error('Login Failed')
        }
  }
const handleSuccess=(response)=>{
console.log('response',response);
const token=response.credential;
console.log('token',token);
const jwt=jwtDecode(token);
console.log('jwt',jwt);
toast.success('Login Successfully')
navigate('/')  
  }

  return (
    <>
     <div className='w-full bg-pink-100 h-[100vh] flex items-center justify-center'>
    <div className='w-[400px] h-auto bg-white flex items-center justify-center py-8 rounded-md'>
      <form onSubmit={handleSubmit}>
      <h1 className='text-2xl text-blue-800'>Login</h1><br/>
      <input type="email" placeholder='Email Address'  className='px-8 py-2 border-2 border-black' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
      <input type="password" placeholder='Password'  className='px-8 py-2 border-2 border-black' value={password} onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      /><br/>
      <button className='bg-blue-800 w-full py-2 rounded-full text-white'>Continue</button>
      </form>
     <ToastContainer position='top-right' autoClose={2000}/>

    </div>
   </div>
    
    
    
    </>
  )
}

export default Login