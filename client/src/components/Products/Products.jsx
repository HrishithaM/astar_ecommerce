import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../Products/Products.css'; // Importing the CSS file for products
import Footer from '../../components/Footer';

const Products = () => {
  
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching products...');
    Axios.get('http://localhost:5000/api/products')
      .then(response => {
        console.log('Products fetched:', response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);
  
  const handleProductClick = (products) => {
    window.history.pushState(null, '', `/products/${products._id}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  

  return (
    <div className="productsInfo">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        products.map(product => (
          <div className="productCard" key={product._id} onClick={() => handleProductClick(product)}>
            <h2>{product.name}</h2>
            <img src={product.image_url} alt={product.name} />
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button className="addToCartBtn">Add to Cart</button>
          </div>
        ))
      )}
      
    </div>
    
)}

export default Products;

