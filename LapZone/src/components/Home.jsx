import React from "react";
import {Link} from 'react-router-dom'
import LapImage from "../assets/laptop4.png"
import Products from "./Products";

const Home = () => {
  return (
    // <section className="bg-gradient-to-r from-black to-purple-600 text-white">

    <section className="bg-gradient-to-r from-black to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to <span className="text-yellow-300">LapZone</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Discover the latest laptops at unbeatable prices. Upgrade your tech
            game with LapZone – the trusted destination for premium laptops.
          </p>
          <div className="mt-8">
            <Link to="shop/" className="bg-yellow-300 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300">
              Shop Now
            </Link>
            <Link to="shop/" className="ml-4 border border-white px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300">
              Learn More
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <img src={LapImage} alt="Laptops" className="rounded-lg  w-21.1 h-auto "/>
        </div>
      </div>
    </section>
   
  );
};


export default Home;
