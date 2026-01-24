import React from 'react'
import './Home.css'
// import portImage from '../assets/images/portfolio-image.png'
import portLogo from '../assets/images/logo.png'

import { Github, Linkedin, X } from "lucide-react";
import { FaInstagram  } from "react-icons/fa";

const Home = () => {
  return (
    <section id='home' className='home-container'>
        <section className='left-container'>
            <h1>Hi, I am Mehmet</h1>
            <h1 id='job'>Full-Stack Developer</h1>
            <p>I am a 3rd-year Computer Engineering student, actively developing my skills to become a Full Stack Web Developer. I focus on the <strong>MERN</strong> Stack and turn what I learn into real projects, which I continuously add to my portfolio. You can follow my progress here.
            </p>
            <div className="social-links">
              <a href="https://github.com/mehmett09" target='blank' className='social-icon'>
                <Github color="#54e7e7" size={40} strokeWidth={2.5} />
              </a>  
              <a href="https://www.linkedin.com/in/mehmet-y%C4%B1lmaz-562b7a326/" target='blank'className='social-icon'>
                <Linkedin color="#54e7e7" size={40} strokeWidth={2.5} />
              </a>  
              <a href="https://x.com/MehmeTy1lm4z_" target='blank' className='social-icon'>
                <X color="#54e7e7" size={40} strokeWidth={2.5} />
              </a>  
              <a href="https://www.instagram.com/mhmet.ylmzzz" target='blank' className='social-icon'>
                <FaInstagram color="#54e7e7" size={40} />
              </a>
              
              <a href="/Mehmet-Yilmaz/Mehmet_Yilmaz_CV.pdf" rel="noopener noreferrer" target="_blank" className="cv-btn">
                
                View CV
              </a>
              
  
               
            </div>
        </section>

        <section className="right-container">
            <img src={portLogo} alt="logo" />
        </section> 
    </section>
    
    
  )
}

export default Home
