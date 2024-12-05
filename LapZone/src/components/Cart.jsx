import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const redirect = useNavigate()

  const fetchCardData= async ()=>{
    try{
      const token = localStorage.getItem('token');

      if (!token) {
        redirect('/login')
      }

      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      };
      const response = await axios.get('http://127.0.0.1:8000/view_cart',config)
      console.log(response.data);
      if(response.status==200){
        setCartItems(response.data)
      }
      
    }catch(err){
      console.log(err.message)
    }
  }

  useEffect(
    ()=>{
      fetchCardData()
    },[]
  )


  const UpdateCartData = async (product_id,quantity) => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        redirect('/')
      }

      
      const config = {
        headers: {  
          Authorization: `Bearer ${token}`, 
        },
      };
      const response = await axios.post(`http://127.0.0.1:8000/add_to_cart/${product_id}`, {"quantity":quantity}, config);

    
    } catch (error) {
      console.error('Error adding to cart:', error.message);
    }
  };


  
  const updateQuantity = (id, increment,product_id,current_quantity) => {
    if(current_quantity+increment>0){

      UpdateCartData(product_id,increment)

    }
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cart_id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + increment),
            }
          : item
      )
    );
  };

  const removeCartItem = async (cart_id)=>{


    try {
      const token = localStorage.getItem('token');

      if (!token) {
        redirect('/login')
      }

      // Configure the headers with the token
      const config = {
        headers: {  
          Authorization: `Bearer ${token}`, 
        },
      };
      const response = await axios.delete(`http://127.0.0.1:8000/delete_cart/${cart_id}`,config);

    
    } catch (error) {
      console.error('Error delete cart item :', error.message);
    }

  }

  // Remove item from cart
  const removeItem = (id) => {
    removeCartItem(id)
    setCartItems((prevItems) => prevItems.filter((item) => item.cart_id!== id));
  };

  // Calculate total price of all items
// Calculate total price of all items
const totalAmount = cartItems.reduce(
  (acc, item) => acc + item.product.product_price * item.quantity,
  0
);

console.log(totalAmount)


  return (
    <div className="bg-gradient-to-r from-black to-indigo-600 py-16">
      <div className="container mx-auto px-6">
        {/* Cart Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Your Cart
        </h2>

        {/* Cart Items */}
        <div className="space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-400">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.cart_id}
                className="flex items-center justify-between bg-white p-6 rounded-xl shadow-lg"
              >
                {/* Product Image */}
                <div className="w-28 h-28">
                  <img
                    src={`http://127.0.0.1:8000/${item.product.images[0].image}`}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">{item.product.product_name}</h3>
                  <p className="text-sm text-gray-600">{item.product.product_name}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300"
                      onClick={() => updateQuantity(item.cart_id, -1,item.product.product_id,item.quantity)}
                    >
                      -
                    </button>
                    <span className="mx-4 text-lg font-semibold text-gray-900">{item.quantity}</span>
                    <button
                      className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300"
                      onClick={() => updateQuantity(item.cart_id, 1,item.product.product_id,item.quantity)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price and Remove Button */}
                <div className="text-right flex flex-col justify-between items-end">
                  <p className="text-xl font-semibold text-gray-900">${item.product.product_price * item.quantity}</p>
                  <button
                    className="text-red-600 mt-2 hover:text-red-500 transition duration-300"
                    onClick={() => removeItem(item.cart_id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Total and Checkout Button */}
        <div className="mt-8 flex justify-between items-center">
          <p className="text-2xl font-semibold text-white">
            Total: ${totalAmount}
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
