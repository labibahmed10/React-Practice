import React from "react";
import { addToDataBase, deleteFromDataBase } from "./dataBase";
import "./Store.css";

const Store = (props) => {
  // console.log(props.item);

  const { image, title, description, price, id } = props.item;

  return (
    <div className="card">
      <img src={image} alt="" />
      <div>
        <h4>{title.slice(0, 10)}</h4>
        <p>{description.slice(0, 30)}</p>
        <h4>{price}</h4>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={() => addToDataBase(id)} className="btn">
            Add to Cart
          </button>
          <button onClick={() => deleteFromDataBase(id)} className="btn">
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Store;
