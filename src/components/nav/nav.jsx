import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";


const nav = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">DesignW</label>
      <ul>
        <li><Link className="active" to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>

    </div>
  )
}

export default nav

