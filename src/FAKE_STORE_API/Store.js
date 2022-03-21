import React from "react";
import { addToDataBase } from "./dataBase";
import "./Store.css";

const Store = (props) => {
  console.log(props.item);

  const { image, title, description, price, id } = props.item;

  const addToStorage = () => {
    addToDataBase(id);
  };

  return (
    <div className="card">
      <img src={image} alt="" />
      <div>
        <h4>{title.slice(0, 10)}</h4>
        <p>{description.slice(0, 30)}</p>
        <h4>{price}</h4>
        <div>
          <button onClick={addToStorage} className="btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Store;
