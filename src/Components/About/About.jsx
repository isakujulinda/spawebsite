import React, { useState } from 'react'
import './About.css'
import about_img from '../../assets/images/about.jpg'
import play_icon from '../../assets/images/play-icon.png'
import sample_video from '../../assets/images/x4bz09.mp4' 

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="About Aura Spa" className='about-img' />
        <img 
          src={play_icon} 
          alt="Play Video"  
          className='play-icon'
          onClick={() => setIsOpen(true)} 
        />
      </div>

      <div className='about-right'>
        <h3>RRETH NESH</h3>
        <h2>AURA SPA</h2>
        <p>
          Në Aura Spa, ne besojmë se relaksi nuk është luks, por nevojë. Kemi krijuar një ambient 
          ku qetësia, kujdesi dhe harmonia bashkohen për të të ofruar momente të paharrueshme. 
          Çdo shërbim është menduar për të rigjeneruar trupin dhe për të sjellë qetësi mendore, 
          që ti të ndihesh më i freskët, më energjik dhe më në paqe me veten.
        </p>
      </div>

      {}
      {isOpen && (
        <div className="video-modal" onClick={() => setIsOpen(false)}>
          <div className="video-wrapper" onClick={(e) => e.stopPropagation()}>
            <video controls autoPlay>
              <source src={sample_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
