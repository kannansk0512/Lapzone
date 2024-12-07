import React from "react";

const OrderConfirm = () => {
  return (
    <div className="bg-gradient-to-r from-black to-indigo-600 min-h-screen py-12 flex items-center justify-center">
      <div className="bg-white bg-opacity-20 backdrop-blur-md max-w-md w-full rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center">
          {/* Animated Green Circle with Tick */}
          <div className="w-24 h-24 flex items-center justify-center bg-green-500 rounded-full relative">
            <svg
              className="w-16 h-16 absolute tick-animation"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          {/* Confirmation Text */}
          <h1 className="text-2xl font-semibold mt-6 text-white">
            Order Confirmed!
          </h1>
          <p className="text-gray-200 mt-2 text-center">
            Thank you for shopping with us. Your order has been placed
            successfully. We’ll notify you when it’s ready for delivery.
          </p>
          {/* Button to Homepage */}
          <button
            onClick={() => window.location.href = "/"}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Back to Shopping
          </button>
        </div>
      </div>
      <style jsx>{`
        .tick-animation {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          animation: tick-draw 1.5s ease-out forwards, circle-scale 0.8s ease-out;
        }

        @keyframes tick-draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes circle-scale {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default OrderConfirm;
