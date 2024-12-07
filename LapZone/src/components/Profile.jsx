import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:8000/profile/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
    }
  };

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:8000/orders/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error.message);
    }
  };

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:8000/products/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchOrders();
    fetchProducts();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-black to-indigo-600 p-6 flex items-center justify-center">
          <img
            className="w-28 h-28 rounded-full border-4 border-white"
            src="https://via.placeholder.com/150"
            alt="User Profile"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">{profile.username}</h2>
          <p className="text-center text-gray-500 mb-4">{profile.email}</p>

          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4.42 0-8 3.58-8 8h16c0-4.42-3.58-8-8-8z" />
              </svg>
              <span className="text-gray-700">Email: {profile.email}</span>
            </div>

            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.17-.21c.75.3 1.56.46 2.42.46a1 1 0 011 1v3.5a1 1 0 01-1 1A19 19 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 .86.16 1.67.46 2.42a1 1 0 01-.21 1.17l-2.13 2.13z" />
              </svg>
              <span className="text-gray-700">Phone: {profile.phone}</span>
            </div>

            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <span className="text-gray-700">Location: {profile.location}</span>
            </div>
          </div>

          {/* My Orders Button with Link */}
          <div className="mt-8">
            <Link to="/myorders">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-black to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-purple-800 transition duration-300">
                View My Orders
              </button>
            </Link>
          </div>

          {/* My Added Products Button with Link */}
          <div className="mt-4">
            <Link to="/my-products">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-black to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-purple-800 transition duration-300">
                View My Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
