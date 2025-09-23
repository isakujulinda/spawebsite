
import { About } from "../../Components"
import Contact from "../../Components/Contact/Contact"
import Footer from "../../Components/Footer/Footer"
import Gallery from "../../Components/Gallery/Gallery"
import Hero from "../../Components/Hero/Hero"
import Navbar from "../../Components/Navbar/Navbar"
import Services from "../../Components/Services/Services"
import Testimonials from "../../Components/Testimonials/Testimonials"
import Title from "../../Components/Title/Title"
import HartaHome from "../../Components/HartaHome/HartaHome"



const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Shërbimet tona'  title='Çfarë ne ofrojmë' />
        <Services />
        <About />
        <Title  title='Galeria' />
      </div>
      <Gallery />
      <Title  title='Vlerësime nga klientet' />
      <Testimonials />
      <HartaHome />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default Home
