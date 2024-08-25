import React from "react";
import Checkout from "./Checkout";
import '../styles/Basket.css'

const Basket = ({ items , handleRemove}) => {
  return (
    <div className="checkout-main-div">
      {items.map((ele) => (
        <Checkout item={ele} handleRemove={handleRemove}/>
      ))}
    </div>
  );
};

export default Basket;
