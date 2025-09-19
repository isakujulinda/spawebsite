import React from 'react'
import './Footer.css'
import fbIcon from '../../assets/images/facebook.png'
import igIcon from '../../assets/images/instagram.png'
import liIcon from '../../assets/images/linkedin.png'

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
          <h4>Shpejt</h4>
          <ul>
            <li><a href="#">Rreth Nesh</a></li>
            <li><a href="#">Shërbimet</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </div>

        {}
        <div className="footer-col">
          <h4>Na gjeni</h4>
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
