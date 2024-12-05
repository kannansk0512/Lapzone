import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"; // Import icons from react-icons

const NavHome = () => {
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

        {/* Cart and User Profile Icons */}
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
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="hidden md:hidden" id="mobile-menu">
        <Link
          to="/"
          className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Shop
        </Link>
        <Link
          to="/about"
          className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Contact
        </Link>
        <Link
          to="/cart"
          className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Cart
        </Link>
        <Link
          to="/profile"
          className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default NavHome;
