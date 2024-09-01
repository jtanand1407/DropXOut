import React from "react";
import "../styles/Checkout.css";

const Checkout = ({ item, handleRemove }) => {
  return (
      <div className="checkout-item-div">
        <img className="img" src={item.image} alt="image" />
        <div className="checkout-content">
          <strong>{item.title}</strong>
          <p className="price">₹ {item.price}</p>
          <button className="button" onClick={() => handleRemove(item)}>
            Remove
          </button>
        </div>
      </div>
  );
};

export default Checkout;
