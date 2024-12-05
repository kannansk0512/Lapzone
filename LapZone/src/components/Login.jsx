// import React, { useState } from "react";
// import { Link,useNavigate  } from "react-router-dom";
// import axios from 'axios'


// const Login = () => {
//   const redirect=useNavigate()
//   const [user, setUser] = useState(
//     {
//       username:"",
//       password:""
//     }
//   ); 

//   const userData=(x)=>{
//     let newuser={...user,[x.target.name]:x.target.value}
//     setUser(newuser)
//   }
//   const adduser = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/login/', user);
  
//       if (response.status !== 200) {
//         throw new Error(response.data.error || 'Login failed');
//       }
  
//       localStorage.setItem('token', response.data.access);
//       redirect('/');
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
  
//   // // const handleSubmit = (e) => {
//   // //   e.preventDefault();
//   // //   // Handle login logic here
//   // //   console.log({ username, password });
//   // //   // Redirect or show success
//   // };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black to-indigo-600">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
//           Welcome Back!
//         </h2>
//         <form>
//           {/* Username */}
//           <div className="mb-4">
//             <label htmlFor="username"  className="block text-sm font-medium text-gray-600">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username" 
//               name="username"
//               onChange={userData}
//               className="w-full p-3 border border-gray-300 rounded-md"
//               placeholder="Enter your username"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-600">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               onChange={userData}
//               className="w-full p-3 border border-gray-300 rounded-md"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="button"
//             onClick={adduser}
//             className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
//           >
//             Login
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <Link to="/signup" className="text-blue-600 hover:underline">
//               Sign up here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const redirect = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const userData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const adduser = async () => {
    setError(""); // Clear any previous error messages
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', user);
      
      if (response.status === 200) {
        localStorage.setItem('token', response.data.access);
        redirect('/'); 
      } else {
        throw new Error('Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'An error occurred.');
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black to-indigo-600">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Welcome Back!
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
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
              onChange={userData}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={userData}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={adduser}
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
