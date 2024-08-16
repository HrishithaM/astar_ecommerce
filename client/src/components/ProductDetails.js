import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './ProductDetails.css'; // Import CSS for styling

const ProductDetails = ({ match }) => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const productId = window.location.pathname.split('/').pop();
    Axios.get(`http://localhost:5000/api/products/${productId}`)
      .then(response => {
        setProduct(response.data);
        setTotalCost(response.data.price);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setError(`${error}`);
        setLoading(false);
      });
  }, []);

  const handleQuantityChange = (event) => {
    const qty = parseInt(event.target.value, 10);
    setQuantity(qty);
    setTotalCost(qty * product.price);
  };

  if (loading) return <p>Loading...</p>;


return (
  <div className="productDetails">
    <div className="productImage">
      <img src={product.image_url} alt={product.name} />
    </div>
    <div className="productInfo">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
      </label>
      <p className="totalCost">Total Cost: ${totalCost}</p>
      <button className="addToCartBtn">Add to Cart</button>
    </div>
  </div>
);
};

export default ProductDetails;
