import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import React Icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-indigo-600 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About LapZone</h3>
            <p className="text-sm text-gray-200">
              LapZone offers the latest laptops with cutting-edge technology at competitive prices. We're here to help you find the perfect device for your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-200 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gray-200 transition duration-300">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-200 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200 transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-200">Email: support@lapzone.com</p>
            <p className="text-sm text-gray-200">Phone: +91 9876543211</p>
            <p className="text-sm text-gray-200">Address: 123 LapZone St., kerala City</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-100">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-100">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-100">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-purple-500 pt-4 text-center">
          <p className="text-sm text-gray-200">
            © {new Date().getFullYear()} LapZone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
