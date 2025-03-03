import React, { useState } from 'react'
import OTPInput from 'react-otp-input'

function OtpCode() {
  const [otp,setOtp]=useState('')
  return (
   <>
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
   <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg flex items-center flex-col gap-10">
   <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">ENTER  OTP </h1>
  <div className="flex justify-center gap-10">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-40 h-18 text-6xl font-semibold text-center  border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 mx-2"
                />
              )}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
           Submit
          </button>
          </div>
          </div>
   
   </>
  )
}

export default OtpCode