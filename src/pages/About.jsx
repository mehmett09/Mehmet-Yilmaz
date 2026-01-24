import React from 'react'
// { Html, Css, Javascript, React, Nodejs, Mongodb, Python}
import './About.css'
import Header from '../components/Header.jsx'
import portImage from '../assets/images/portfolio-image.png'
import Html from '../assets/icons/html5-01-svgrepo-com.svg';
import Css from '../assets/icons/css-fill-svgrepo-com.svg';
import Javascript from '../assets/icons/javascript-svgrepo-com.svg';
import ReactIcon from '../assets/icons/react-svgrepo-com.svg';
import Nodejs from '../assets/icons/nodejs01-svgrepo-com.svg';
import Mongodb from '../assets/icons/mongodb-svgrepo-com.svg';
import Python from '../assets/icons/python-svgrepo-com.svg';


const About = () => {
  return (

    <section className="about-container" id='about'>

      <section className="photo">
        <img src={portImage} alt="Me" />
      </section>
      
      <section className="about-text">
        <h2>About Me</h2>
        <p>
          I am a 3rd-year Computer Engineering student with a strong interest in software development, particularly in building interactive and scalable web applications. I am currently focusing on becoming a Full Stack developer using the MERN Stack and creating real-world projects across both frontend and backend.
        </p>
        <p>
          I enjoy solving problems and turning ideas into functional products, which is one of the main reasons I am interested in game development. Games require strong problem-solving skills, performance awareness, and a deep understanding of user experience — areas I actively work on through my projects.
        </p>
        <p>
          One of my long-term goals is to develop my own game in the future. I see game development as a field where software engineering, creativity, and user experience come together, and this motivates me to continuously improve my technical and problem-solving skills. I aim to build a strong portfolio, gain experience in interactive systems, and contribute to professional projects in creative, technology-driven environments.
        </p>

        <h3>SKILLS</h3>
        <ul className="skills-list">
          <li><img src={Html} alt="html-icon" /></li>
          <li><img src={Css} alt="css-icon" /></li>
          <li><img src={Javascript} alt="javascript-icon" /></li>
          <li><img src={ReactIcon} alt="react-icon" /></li>
          <li><img src={Nodejs} alt="nodejs-icon" /></li>
          <li><img src={Mongodb} alt="mongodb-icon" /></li>
          <li><img src={Python} alt="python-icon" /></li>
        </ul>


      </section>
    
    
    
    </section>
    
  )
}

export default About