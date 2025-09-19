import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/aura (2).png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />

      {}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {}
      <ul className={menuOpen ? "active" : ""}>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Reviews</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
