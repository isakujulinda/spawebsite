import React from 'react'
import { Footer, HeroAb, Navbar } from '../../Components'
import Section1 from '../../Components/Rrethtxt/Section1'
import Section2 from '../../Components/Rrethtxt/Section2'
import Section3 from '../../Components/Rrethtxt/Section3'
import Harta from '../../Components/Rrethtxt/Harta'





const Rreth = () => {
  return (
    <div>
      <Navbar />
      <HeroAb />
      <div className="container">
        <Section1 />
        <Section2 />
        {/* <Section3 /> */}
      </div>
      {/* <Harta /> */}
      <Footer />
      </div>
  )
}

export default Rreth