import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      setLoading(true); // Set loading to true before fetching
      setError(null); // Reset error state

      const token = localStorage.getItem('token');
      if (!token) {
        setError('Token not found. Please log in.');
        setLoading(false);
        return;
      }

      const response = await axios.get('http://127.0.0.1:8000/my_orders/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      setOrders(response.data); // Save the fetched orders to state
      console.log(response.data); // Log the data for debugging

    } catch (error) {
      setError(`Error fetching orders: ${error.response ? error.response.data.detail : error.message}`);
      console.error('Error fetching orders:', error); // Log full error for debugging
    } finally {
      setLoading(false); // Stop loading after the request is done
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching orders
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Show error message
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-indigo-600">My Orders</h2> {/* Updated color here */}
          <p className="text-gray-600 mt-2">Here are the details of your recent orders.</p>
        </div>

        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="py-3 px-6 text-left">Order ID</th>
                <th className="py-3 px-6 text-left">Product</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Total Price</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-100">
                  <td className="py-4 px-6">{order.id}</td>
                  <td className="py-4 px-6">{order.product.product_name}</td>
                  <td className="py-4 px-6">{new Date(order.order_date).toLocaleDateString()}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${order.status === 'Pending' ? 'bg-yellow-500' : 'bg-green-500'}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">${order.total_price}</td>
                  <td className="py-4 px-6 text-indigo-600 hover:text-indigo-800 cursor-pointer"> {/* Updated hover color here */}
                    <button
                      className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md"
                      onClick={() => alert(`Viewing details of Order ID: ${order.id}`)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {orders.length === 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-600">You have no orders yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
