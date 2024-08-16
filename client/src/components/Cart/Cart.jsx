import React from 'react'
import Footer from '../../components/Footer'
import "../Cart/Cart.css"
import shirt1 from "../../Assets/shirt1.png"
import shirt2 from "../../Assets/shirt2.png"
import shirt3 from "../../Assets/shirt3.png"

export const Cart = () => {
  return (
    // <div>
    //   Cart
    //   <Footer />
    //   </div>
    <div className="cart-container">
    <h1>SHOPPING CART</h1>
    <div className="cart-item">
        <img src={shirt1} alt="shirt1"  />
        <div className="item-details">
            <h2>A-Star 2024 Student Tee</h2>
            <p>$ 18.00</p>
            <div className="quantity-controls">
                <button className="decrement">-</button>
                <span className="quantity">1</span>
                <button className="increment">+</button>
            </div>
            <a href="#" className="remove-link">Remove</a>
        </div>
    </div>
    <hr />
    <div className="cart-item">
        <img src={shirt3} alt="shirt2" />
        <div className="item-details">
            <h2>A-Star 2024 Light Mode Tee</h2>
            <p>$ 15.99</p>
            <div className="quantity-controls">
                <button className="decrement">-</button>
                <span className="quantity">1</span>
                <button className="increment">+</button>
            </div>
            <a href="#" className="remove-link">Remove</a>
        </div>
    </div>
    <hr />
    <div className="subtotal">
        <p>SUBTOTAL</p>
        <h3>$ 33.99</h3>
    </div>
    <p className="tax-shipping">Taxes and shipping calculated at checkout</p>
    <button className="checkout-btn">CHECK OUT</button>
</div>

  ); 
};