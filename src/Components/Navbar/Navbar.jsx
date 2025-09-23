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
        ☰
      </div>

      <ul className={menuOpen ? "active" : ""}>
        <li>
          <Link to="/">Krye</Link>
        </li>
        <li>
          <Link to="/rreth">Rreth Nesh</Link>
        </li>
        <li>
          <Link to="/sherbime">Shërbimet</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li className="nav-btn">
          <Link to="/kontakto">Kontakto Tani</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
