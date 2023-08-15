// eslint-disable-next-line no-unused-vars
import React from "react";
import "./navbar.css";
export default function Navbar() {
  const menus = ["Home","About", "Services", "Feature", "FAQs"];
  return (
    <div className="navbar">
      <div className="nav-logo">
        <h3>
          H<span><sup>2</sup></span>
        </h3>
      </div>
      <ul className="nav-list">
        {menus.map((menu) => (
          <li key={menu}>{menu}</li>
        ))}
      </ul>
      <div className="nav-btn">
        <button className="btn-contact">Contact Us</button>
      </div>
    </div>
  );
}
