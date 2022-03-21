import React from "react";
import "./AddCard.css";

const AddCart = (props) => {
  // console.log(props.ida);

  const { item, cost } = props;

  return (
    <div className="cart-site">
      <div className="cart">
        <h1>CARD DETAILS HERE</h1>
        <p>Total Item: {item}</p>
        <p>Total Cost: {cost}</p>
        <p>Vat: {cost * 0.15}</p>
        <p>Service Charge: {cost * 0.05}</p>
      </div>
    </div>
  );
};

export default AddCart;
