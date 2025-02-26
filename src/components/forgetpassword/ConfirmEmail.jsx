import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

function ConfirmEmail() {
  const [email, setEmail] = useState("");
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!email){
      toast.error('Please Confirm Email')
      return;
    }
    toast.success('Email Confirm')
    setTimeout(() => {
    navigate('/reset-password')
      
    }, 2000);
   }

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="w-[350px] bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-600 text-center mb-4">Confirm Email</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2  rounded-md border-2 border-black text-xl"
          />
          <button
            type="submit"
            className="w-full mt-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Confirm Email
          </button>
        </form>
      </div>
    </div>
   <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default ConfirmEmail;
