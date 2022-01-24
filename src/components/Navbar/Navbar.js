import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <>
      <header className="navbar-container">
        <div className="navbar-container__logo">
          <img src={logo} alt="Be Mobile" />
        </div>
      </header>
    </>
  );
}
