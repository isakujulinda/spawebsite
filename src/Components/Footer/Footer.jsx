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

        {/* Lokacioni & Harta */}
        <div className="footer-col">
          <h4>Adresa :</h4>
          <div className="map-footer">
            <iframe
      src="https://www.google.com/maps?q=0,0&z=2&output=embed"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Harta Footer"
    ></iframe>
          </div>
        </div>

        {/* Menu */}
        <div className="footer-col">
          <h4>Orari i punës</h4>
          <ul className="hours">
            <li>E Hënë - E Premte: ....</li>
            <li>E Shtunë: ....</li>
            <li>E Diel: ...</li>
          </ul>
        </div>

        {/* Kontaktet & Orari */}
        <div className="footer-col">
          <h4>Kontakte</h4>
          <ul>
            <li>Email: contact@gmail.al</li>
            <li>Tel: +355 12 34 567</li>
            <li>Adresa: Tiranë, Shqiperi</li>
          </ul>

          
        </div>

        {/* Socials */}
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
        <p>© 2025 Interweb. Të gjitha të drejtat e rezervuara.</p>
      </div>
    </footer>
  )
}

export default Footer
