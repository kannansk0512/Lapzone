import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState({});
  const [mainImage, setMainImage] = useState(""); // State for main image
  const redirect = useNavigate();

  // Fetch product data
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/one_product/${id}`);
      setLaptop(response.data);
      if (response.data.images?.length > 0) {
        setMainImage(`http://127.0.0.1:8000/${response.data.images[0].image}`);
      }
    } catch (error) {
      console.error("Error fetching product data:", error.message);
    }
  };

  // Add to cart handler
  const addCartData = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        redirect("/");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        `http://127.0.0.1:8000/add_to_cart/${id}`,
        null,
        config
      );

      if (response.status === 200) {
        redirect("/cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-black to-indigo-600 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          {laptop.product_name}
        </h2>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div>
            {/* Main Image */}
            <div className="mb-4">
              <img
                src={mainImage || "https://via.placeholder.com/400x300?text=No+Image+Available"}
                alt={laptop.product_name || "No Image"}
                className="w-3/4 h-auto rounded-lg shadow-lg mx-auto"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4 justify-center">
              {laptop.images?.map((image, index) => (
                <img
                  key={index}
                  src={`http://127.0.0.1:8000/${image.image}`}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                    mainImage === `http://127.0.0.1:8000/${image.image}`
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(`http://127.0.0.1:8000/${image.image}`)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h3 className="text-3xl font-semibold text-white">
              {laptop.product_name}
            </h3>
            <p className="text-2xl text-blue-600 font-bold mb-4">
              ₹{laptop.product_price}
            </p>
            <p className="text-white mb-6">{laptop.description}</p>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={addCartData}
                className="px-6 py-2 bg-gradient-to-r from-black to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-purple-800 transition duration-300"
              >
                Add to Cart
              </button>
              <Link to="/shop">
                <button className="px-6 py-2 border border-gray-300 text-white rounded-md hover:bg-gray-100 transition duration-300">
                  Back to Shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
