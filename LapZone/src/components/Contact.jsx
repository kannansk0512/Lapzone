import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending an email or storing the contact message)
    console.log({ name, email, message });
  };

  return (
    <div className="bg-gradient-to-r from-black to-indigo-600 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              If you have any questions or need assistance, feel free to get in touch with us.
              We're here to help!
            </p>
            <p className="text-lg text-gray-700">
              You can reach us via the contact form below, and our customer service team will get
              back to you as soon as possible.
            </p>
          </div>

          {/* Right Section - Contact Form */}
          <div>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Write your message"
                  rows="4"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
