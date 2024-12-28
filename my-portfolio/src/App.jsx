import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
