import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Title from '../Title/Title'
import About from '../About/About'
import Gallery from '../Gallery/Gallery'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Sherbimet tona'  title='Cfare ne ofrojme' />
        <Services />
        <About />
        <Title subTitle='Galeria'  title='Ambientet Tona' />
      </div>
      <Gallery />
      <Title subTitle='REVIEW' title='Cfare mendojne klinetet tane?' />
      <Testimonials />
      <Title title='Kontakto me ne' />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
