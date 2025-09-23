import React from 'react'
import { Footer, Navbar, Testimonials } from '../../Components'
import HeroSh from '../../Components/HeroSherbim/HeroSh'
import Sherbimettxt from '../../Components/Sherbimetxt/Sherbimettxt'
import Title from "../../Components/Title/Title"

const Sherbime = () => {
  return (
    <div>
          <Navbar />
          <HeroSh />
      <Sherbimettxt />
      <Title  title='Vleresime nga klientet' />
      <Testimonials />
      <Footer />
      </div>
  )
}

export default Sherbime
