import { useState } from 'react'
import './App.css'

{/*Importamos los componentes*/}
import Hero from './hero.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact'



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="overflow-x-hidden bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
     <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
    
  )
}

export default App
