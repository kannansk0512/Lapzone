import React from "react";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (234) 567-8901",
    address: "1234 Elm Street, Springfield, IL",
    profilePicture: "https://www.w3schools.com/w3images/avatar2.png",
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Profile Header */}
      <div className="flex items-center space-x-6">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">{user.name}</h1>
          <p className="text-lg text-indigo-500">{user.email}</p>
        </div>
      </div>

      {/* User Details */}
      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Phone</span>
          <span className="text-gray-800">{user.phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Address</span>
          <span className="text-gray-800">{user.address}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-between">
        <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">
          Edit Profile
        </button>
        <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Profile;
