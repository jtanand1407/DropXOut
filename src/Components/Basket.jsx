import React, { useState } from "react";
import Checkout from "./Checkout";
import "../styles/Basket.css";

const Basket = ({ items, cost, handleRemove }) => {
  return (
    <div className="checkout-main-div">
      <div className="checkout-div">
        {items.map((ele) => (
          <Checkout item={ele} handleRemove={handleRemove} />
        ))}
      </div>
      {cost != 0.0 && <div className="total-bill">Total: ₹ {cost}</div>}
    </div>
  );
};

export default Basket;
