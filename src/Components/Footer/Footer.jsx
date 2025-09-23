import React from 'react'
import './Footer.css'
import fbIcon from '../../assets/images/facebook.png'
import igIcon from '../../assets/images/instagram.png'
import liIcon from '../../assets/images/linkedin.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {}
        <div className="footer-col">
          <h3>Aura Spa</h3>
          <p>
            Një oaz relaksi dhe qetësie në zemër të Tiranës. 
            Tek ne gjeni shërbime për trupin dhe shpirtin, 
            për t’u ndjerë më energjik dhe në harmoni me veten.
          </p>
        </div>

        {}
        <div className="footer-col">
          <h4>Menu</h4>
          <ul>
            <li><Link to="/rreth">Rreth Nesh</Link></li>
            <li><Link to="/sherbime">Shërbimet</Link></li>
            <li><Link to="/kontakto">Kontakt</Link></li>
          </ul>
        </div>

        {}
        <div className="footer-col">
          <h4>Kontakte</h4>
          <ul>
            <li>Email: contact@auraspa.al</li>
            <li>Tel: +355 68 123 4567</li>
            <li>Adresa: Rruga e Hoxha Tasim, Tiranë</li>
          </ul>
        </div>

        {}
        <div className="footer-col">
          <h4>Na ndiqni</h4>
          <div className="socials">
            <a href="#"><img src={fbIcon} alt="Facebook" /></a>
            <a href="#"><img src={igIcon} alt="Instagram" /></a>
            <a href="#"><img src={liIcon} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Aura Spa. Të gjitha të drejtat e rezervuara.</p>
      </div>
    </footer>
  )
}

export default Footer
