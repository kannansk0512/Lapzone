import React from "react";
import LapImage from "../assets/laptop7.png"

const About = () => {
  return (
    <div className="bg-gradient-to-r from-black to-indigo-600 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          About LapZone
        </h2>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section (Text) */}
          <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700">
              Welcome to LapZone, your ultimate destination for purchasing laptops
              online. We bring you a wide variety of laptops from top brands, ensuring
              you have the best options available for every need. Whether you're a student,
              a professional, or a gamer, we have the perfect laptop for you.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to provide you with an easy and secure online shopping
              experience. With fast delivery, secure payments, and a user-friendly website,
              we aim to make your laptop shopping hassle-free and enjoyable.
            </p>
          </div>

          {/* Right Section (Image) */}
          <div className="flex justify-center items-center">
            <img
              src={LapImage}
              alt="Laptop"
              className="w-full max-w-lg rounded-lg"
            />
          </div>
        </div>

        {/* Bottom Section (Additional Information) */}
        <div className="text-center mt-12">
          <p className="text-lg text-white-100">
            Thank you for choosing LapZone. We’re here to help you make the right choice
            when purchasing your next laptop!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
