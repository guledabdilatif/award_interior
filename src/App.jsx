import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'


function App() {

  return (
    <>
      <Navbar />
      <section id="hero" className="">
        <Hero />
      </section>
      <section id="about" className="d-flex align-items-center justify-content-center">
        <About />
      </section>
      <section id="services" className="d-flex align-items-center justify-content-center ">
        <Services />
      </section>
      <section id="contact" className="d-flex align-items-center justify-content-center">
        <Contact />
      </section>
      <section id="gallery" className="d-flex align-items-center justify-content-center">
        <Gallery />
      </section>
      <Footer />
    </>
  )
}

export default App
