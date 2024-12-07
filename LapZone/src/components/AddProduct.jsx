import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [laptop, setLaptop] = useState({
    product_name: "",
    product_price: "",
    product_quantity: "",
    images: [], // Store multiple images here
  });

  const [imageInputs, setImageInputs] = useState([{ id: Date.now(), file: null }]);
  
  // Assuming you have a function to get the token from localStorage or some other state
  const token = localStorage.getItem('token');  // Change this to how you store the token

  // Handle form data
  const laptop_data = (e) => {
    let newLaptop = { ...laptop, [e.target.name]: e.target.value };

    // Handle file input change for images
    if (e.target.files) {
      newLaptop = { ...newLaptop, [e.target.name]: e.target.files };
    }
    setLaptop(newLaptop);
  };

  // Add more image input fields
  const addImageInput = () => {
    setImageInputs([...imageInputs, { id: Date.now(), file: null }]);
  };

  // Handle image input change
  const handleImageChange = (e, index) => {
    const updatedInputs = [...imageInputs];
    updatedInputs[index].file = e.target.files[0];
    setImageInputs(updatedInputs);
  };

  // Handle product submission
  const Addproduct = async () => {
    const formData = new FormData();
    formData.append("product_name", laptop.product_name);
    formData.append("product_price", laptop.product_price);
    formData.append("product_quantity", laptop.product_quantity);

    // Append selected images to FormData
    imageInputs.forEach((input) => {
      if (input.file) {
        formData.append("images", input.file);
      }
    });

    try {
      const response = await axios.post("http://127.0.0.1:8000/add_product/", formData, {
        headers: {
          "Authorization": `Bearer ${token}`, // Send the token with the 'Bearer' prefix
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
      navigate("/"); // Redirect to the home page
    } catch (error) {
      console.error("Error adding product:", error.response || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-indigo-600 flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6 text-gradient bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text">
              Add Product
            </h2>
            {/* Product Name */}
            <div className="mb-4">
              <label htmlFor="product_name" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                id="product_name"
                name="product_name"
                onChange={laptop_data}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Price */}
            <div className="mb-4">
              <label htmlFor="product_price" className="block text-sm font-medium text-gray-700 mb-1">
                Price ($)
              </label>
              <input
                type="number"
                id="product_price"
                name="product_price"
                onChange={laptop_data}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <label htmlFor="product_quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                id="product_quantity"
                name="product_quantity"
                onChange={laptop_data}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Image Uploads */}
            {imageInputs.map((input, index) => (
              <div key={input.id} className="mb-4">
                <label htmlFor={`image_${input.id}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Product Image {index + 1}
                </label>
                <input
                  type="file"
                  id={`image_${input.id}`}
                  name="image"
                  onChange={(e) => handleImageChange(e, index)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  accept="image/*"
                />
              </div>
            ))}

            {/* Add More Image Button */}
            <div className="mb-4 flex justify-center">
              <button
                type="button"
                onClick={addImageInput}
                className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Add More Image
              </button>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button
                type="button"
                onClick={Addproduct}
                className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;
