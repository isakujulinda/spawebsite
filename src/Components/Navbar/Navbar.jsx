import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/aura (2).png";
import { Link } from "react-router-dom";

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

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>


      <ul className="desktop-nav">
        <li><Link to="/">Krye</Link></li>
        <li><Link to="/rreth">Rreth Nesh</Link></li>
        <li><Link to="/sherbime">Shërbimet</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li className="nav-btn"><Link to="/kontakto">Kontakto Tani</Link></li>
      </ul>

      <ul className={menuOpen ? "mobile-overlay active" : "mobile-overlay"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Krye</Link></li>
        <li><Link to="/rreth" onClick={() => setMenuOpen(false)}>Rreth Nesh</Link></li>
        <li><Link to="/sherbime" onClick={() => setMenuOpen(false)}>Shërbimet</Link></li>
        <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
        <li className="nav-btn"><Link to="/kontakto" onClick={() => setMenuOpen(false)}>Kontakto Tani</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
