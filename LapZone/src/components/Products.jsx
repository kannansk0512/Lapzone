import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'

const Products = () => {
  let [laptops,setLaptop]=useState([]);
  

  const fetchData = async () => {
    const response = await axios.get('http://127.0.0.1:8000/show_products/');
    let laptop_data=response.data;
    console.log("dsjlfjsld")
    console.log(laptop_data)
    setLaptop(laptop_data)
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-black to-indigo-600 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {laptops.map((x) => (
            <div
              key={x.product_id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
<img
  src={
    x.images.length > 0
      ? `http://127.0.0.1:8000/${x.images[0].image}`
      : 'https://via.placeholder.com/400x300?text=No+Image+Available' 
  }
  alt={x.product_name} 
  className="w-full h-48 object-cover"
/>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-700">{x.product_name}</h3>
                <p className="text-gray-500">{x.product_price}</p>
                <Link to={`/productdetails/${x.product_id}`}>
  <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-black to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-purple-800 transition duration-300">
    View Details
  </button>
</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
