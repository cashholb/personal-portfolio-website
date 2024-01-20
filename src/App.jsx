import './App.scss'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

function App() {

  return (
    <div className="app-container">
      <section id='Cashton' className="homepage">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>

      <section id="About">
        <About></About>
      </section>
      
      <section id="Portfolio">
        <Portfolio></Portfolio>
      </section>
      <section id="Contact">
        <Contact></Contact>
      </section>
      

    </div>
  )
}

export default App
