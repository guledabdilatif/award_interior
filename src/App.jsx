import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

function App() { 

  return (
     <>
      <Navbar />
      <section id="hero" className="vh-100 d-flex align-items-center justify-content-center bg-light">
        <Hero />
      </section>
      <section id="about" className="vh-100 d-flex align-items-center justify-content-center text-white">
        {/* <About/> */}
      </section>
      <section id="services" className="vh-100 d-flex align-items-center justify-content-center bg-light">
        <h1>Services Section</h1>
      </section>
      <section id="contact" className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
        <h1>Contact Section</h1>
      </section>
    </>
  )
}

export default App
