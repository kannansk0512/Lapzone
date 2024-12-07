import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const { state } = useLocation(); // Access the passed state
  const navigate = useNavigate();

  const { cartItems, totalAmount } = state || {}; // Destructure cart data

  const confirmOrder = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Prepare order data
      const orderData = {
        items: cartItems.map((item) => ({
          products: item.product.product_id,
          quantity: item.quantity,
          total_price: item.product.product_price * item.quantity,
        })),
        total: totalAmount,
      };

      // Save order to the database
      const response = await axios.post("http://127.0.0.1:8000/confirm_order/", orderData, config);
      console.log(orderData);


      if (response.status === 201) {
        alert("Order confirmed!");
        navigate("/order_confirm/"); // Redirect to a thank-you page
      }
    } catch (error) {
      console.error("Error confirming order:", error.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-black to-indigo-600 py-16">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-8">Checkout</h2>

        {/* Single Card with Multiple Items */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          {cartItems.map((item) => (
            <div key={item.cart_id} className="mb-6">
              {/* Product Details */}
              <div className="flex items-center space-x-4">
                <img
                  src={`http://127.0.0.1:8000/${item.product.images[0].image}`}
                  alt={item.product.product_name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.product.product_name}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>

              {/* Price Details */}
              <div className="text-right">
                <p className="text-xl font-semibold text-gray-900">
                  Price: ${item.product.product_price * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Total and Confirm Button */}
        <div className="mt-8 flex justify-between items-center">
          <p className="text-2xl font-semibold text-white">Total: ${totalAmount}</p>
          <button
            className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
            onClick={confirmOrder}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
