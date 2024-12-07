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
          product_id: item.product.product_id,
          quantity: item.quantity,
          price: item.product.product_price * item.quantity,
        })),
        total: totalAmount,
      };
  
      // Send the order data to the backend (confirm_order endpoint)
      const response = await axios.post("http://127.0.0.1:8000/confirm_order", orderData, config);
  
      if (response.status === 201) {
        alert("Order confirmed!");
        navigate("order_confirm/"); // Redirect to a thank-you page
      }
    } catch (error) {
      console.error("Error confirming order:", error.message);
      alert("Something went wrong. Please try again.");
    }
  };
  