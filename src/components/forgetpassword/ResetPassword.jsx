import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
   e.preventDefault();
    if(!password || !confirmPassword){
         toast.error('Please Fill Both Fields Properly')
         return;
       }
       if(password!==confirmPassword){
        toast.error('Both Passwords Should be Same')
        return;
       }
      toast.success('Password Reset')
      setTimeout(() => {
      navigate('/')
        
       }, 2500);
  }
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="w-[350px] bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2  rounded-md border-2 border-black text-xl"
          /><br/><br/>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2  rounded-md border-2 border-black text-xl"
          />
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
    <ToastContainer position="top-right" autoClose={2500}/>
    </>
  );
}

export default ResetPassword;
