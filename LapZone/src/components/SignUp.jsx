import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Signup = () => {

const redirect=useNavigate()

const [user,setUser]=useState({
  username:"",
  email:"",
  password:"",
})

const UserData=(x)=>{
  let newuser={...user,[x.target.name]:x.target.value}
  setUser(newuser)
}

const AddUser=async()=>{
  const response=await axios.post('http://127.0.0.1:8000/signup/',user)
  redirect('/')
  
}

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   Handle signup logic here
  //   if (password === confirmPassword) {
  //     console.log({ username, email, password });
  //     Redirect or show success
  //   } else {
  //     console.error("Passwords do not match!");
  //   }
  // };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black to-indigo-600">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Create Your Account
        </h2>
        <form>
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={UserData}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your username"
              required/>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
             name="email"
              onChange={UserData}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required/>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={UserData}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password */}
          {/* <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Confirm your password"
              required
            />
          </div> */}

          {/* Submit Button */}
          <button
            type="button"
            onClick={AddUser}
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
