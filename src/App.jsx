// import { useState } from 'react'
import './App.css'


import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'




function App() {

  return (
    <>
      <Header/>

      <main>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>

      </main>
      
    </>
  )
}

export default App
