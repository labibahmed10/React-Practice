import React from "react";

import "./Cards.css";

const date = new Date();
const curentDate = date.getDate();
const Month = date.getMonth();
const year = date.getFullYear();

const Cards = () => {
  return (
    <div>
      <section style={{ display: "flex" }}>
        <div className="card">
          <h1>React Card for beginners</h1>
          <h4>Wanna learn something new!</h4>
          <p>Package for 30$ per Month</p>
          <h5>Grab it now</h5>
          <p>
            Last date:{curentDate}/{Month}/{year}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cards;
