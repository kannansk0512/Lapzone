import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"; // Import icons from react-icons

const NavHome = () => {
  const handleLogout = () => {
    // Clear user session data (e.g., token)
    localStorage.removeItem("token");
    // Redirect to login or home page
    window.location.href = "/login";
  };

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

        {/* Cart, User Profile Icons, and Logout Button */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/cart"
            className="relative hover:text-gray-200 flex items-center"
            aria-label="Cart"
          >
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
          {/* Logout Button */}
          
        </div>
      </div>
    </nav>
  );
};

export default NavHome;
