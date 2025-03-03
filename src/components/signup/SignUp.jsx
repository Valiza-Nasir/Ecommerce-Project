import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../apis/const";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Fill All Fields");
      return;
    }
    const userData = { username, email, password, provider: "email" };
    try {
      await signUp(userData);
      alert("Signup Successfully");
      setUserName("");
      setEmail("");
      setPassword("");
      navigate("/otp");
    } catch (error) {
      alert("Signup Failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-green-700 mb-6">
          Sign Up
        </h1>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="User Name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Continue
          </button>

          {/* Already Have an Account? */}
          <NavLink
            to="/login"
            className="block text-center text-blue-800 font-semibold hover:underline hover:text-blue-600 transition duration-200"
          >
            Already have an account? Login
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
