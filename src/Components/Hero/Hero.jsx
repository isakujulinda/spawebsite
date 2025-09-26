import React from 'react'
import './Hero.css'
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className='hero container'> 
          <div className="hero-text">
              <h1>Lorem ipsum dolor </h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt excepturi sint doloremque esse, porro molestias voluptatum totam impedit maiores.</p>
             <Link to="/kontakto" className="btn">Lorem ipsum </Link>
      </div>
    </div>
  )
}

export default Hero
