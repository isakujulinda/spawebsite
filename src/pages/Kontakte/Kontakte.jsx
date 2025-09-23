import React from 'react'
import { Contact, Footer, Navbar } from '../../Components'
import HeroK from '../../Components/HeroKontakt/HeroK'
import HartaKontakt from '../../Components/HartaKontakt/HartaKontakt'

const Kontakte = () => {
  return (
    <div>
      <Navbar />
      <HeroK />
      <div className="container">
        <Contact />
      </div>
      <HartaKontakt />
      <Footer />
    </div>
  )
}

export default Kontakte
