import React from 'react'
import './About.css'
import about_img from '../../assets/images/about.jpg'

const About = () => {


  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="About Aura Spa" className='about-img' />
      </div>

      <div className='about-right'>
        {/* <h3>RRETH NESH</h3> */}
        <h2>AURA SPA</h2>
        <p>
          Në Aura Spa, ne besojmë se relaksi nuk është luks, por nevojë. Kemi krijuar një ambient 
          ku qetësia, kujdesi dhe harmonia bashkohen për të të ofruar momente të paharrueshme. 
          Çdo shërbim është menduar për të rigjeneruar trupin dhe për të sjellë qetësi mendore, 
          që ti të ndihesh më i freskët, më energjik dhe më në paqe me veten.
        </p>
      </div>

      {}
      
    </div>
  )
}

export default About
