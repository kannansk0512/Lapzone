import React, { useEffect,useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";


const Navbar = () => {
  const redirect=useNavigate()
  const token = localStorage.getItem("token");
  const Logout = () => {
    localStorage.removeItem("token");
    redirect("/login");
  };

  // let [cartCount,setCount]=useState({});
  // const fetchCount=async()=>{
  //   const response=await axios.get('http://127.0.0.1:8000/cart_count')
  //   setCount(response.data)
  // }
  // useEffect(
  //   ()=>{
  //     fetchCount();
  //   },[]);

   

  return (
    <nav className="bg-gradient-to-r from-black to-indigo-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text shadow-lg cursor-pointer">
          LapZone
        </div>

        {/* Navigation Links */}
        {token ? (
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/shop" className="hover:text-gray-200">
              Shop
            </Link>
            <Link to="/add_product" className="hover:text-gray-200">
              Add Product
            </Link>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/shop" className="hover:text-gray-200">
              Shop
            </Link>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </div>
        )}

        
        {!token && (
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Signup
            </Link>
          </div>
        )}

        {/* Cart and User Profile Icons for Logged-In User */}
        {token && (
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/cart"
              className="relative hover:text-gray-200 flex items-center"
              aria-label="Cart">
              <FaShoppingCart className="text-2xl" />
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                {/* {cartCount} */}
              </span>
            </Link>
            <Link
              to="/profile"
              className="hover:text-gray-200 flex items-center"
              aria-label="Profile">
              <FaUserCircle className="text-2xl" />
            </Link>
            <button
            onClick={Logout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-semibold"
          >
            Logout
          </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
