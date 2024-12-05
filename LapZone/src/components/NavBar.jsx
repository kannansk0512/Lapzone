import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Example: Check if a token exists
    setIsLoggedIn(!!token); // Update the state based on token presence
  }, []);

  return (
    <nav className="bg-gradient-to-r from-black to-indigo-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text shadow-lg cursor-pointer">
          LapZone
        </div>

        {/* Navigation Links */}
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

        
              <div className="hidden md:flex space-x-6 items-center">
      {/* {isLoggedIn ? ( */}
        <>
          {/* Show Cart and User Profile Icons when logged in */}
          <Link
            to="/cart"
            className="relative hover:text-gray-200 flex items-center"
            aria-label="Cart">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </Link>
          <Link
            to="/profile"
            className="hover:text-gray-200 flex items-center"
            aria-label="Profile"
          >
            <FaUserCircle className="text-2xl" />
          </Link>
        </>
      {/* ) : ( */}
        {/* // Show Login and Signup Buttons when not logged in */}
        {/* <>
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
            </> */}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
