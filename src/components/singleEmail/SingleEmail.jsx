import React, { useState } from "react";
import { singleEmailApi } from "../../apis/singleEmailApi";
import { useNavigate } from "react-router-dom";
function SingleEmail() {
  const [email, setEmail] = useState("");
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!email){
      alert('Please Fill Fields')
      return;
    }
    const data={email,provider:"signup"}
    try {
      const response=await singleEmailApi(data);
      console.log('Single Email',response);
      alert('Email Confirmed');
      navigate('/signup')
    } catch (error) {
      console.log('Failed to Post Data');
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Enter Your Email
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SingleEmail;
