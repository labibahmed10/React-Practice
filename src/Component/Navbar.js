import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <div>
          <h2>Company </h2>
        </div>
        <ul className="linklist">
          <li>
            <a href="#/">Home</a>
          </li>
          <li>
            <a href="#/">About us</a>
          </li>
          <li>
            <a href="#/">Contact</a>
          </li>
          <li>
            <a href="#/">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
