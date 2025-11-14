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
          I am a 3rd-year Computer Engineering student, constantly improving myself in the field of web development. My main focus is becoming a Full Stack developer by working with the MERN Stack and building real projects across both frontend and backend.
        </p>
        <p>
          I chose software development because I enjoy solving problems and turning ideas into functional products. Applying what I learn through hands-on projects helps me grow faster and stay motivated.
        </p>
        <p>
          I describe myself as organized, curious, and solution-oriented. I enjoy exploring modern web technologies and clean, well-designed interfaces. My current goal is to build a solid portfolio and start contributing to professional projects.
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