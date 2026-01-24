import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import Right from '../assets/icons/circle-svgrepo-com (1).svg';
import Left from '../assets/icons/circle-svgrepo-com.svg';

const projectsData = [
  {
    id: 1,
    title: "Library Project",
    description: "A simple project using Python and SQLite with database support.",
    link: "https://github.com/mehmett09/LIBRARY-PROJECT",
  },
  {
    id: 2,
    title: "To-Do List Project",
    description: "A simple and responsive to-do list app built with HTML, CSS, and JavaScript. Users can add, complete, and delete tasks — with data saved using localStorage. Fully mobile-friendly.",
    link: "https://github.com/mehmett09/To-do-list-project",
  },
  {
    id: 3,
    title: "Extensions Dashboard",
    description: "A responsive extension management dashboard with filtering and toggle features. Built with HTML, CSS, and vanilla JavaScript.",
    link: "https://github.com/mehmett09/extenions-dashboard",
  },
  {
    id: 4,
    title: "Landing Page",
    description: "Responsive intro section with dropdown navigation – Interactive dropdown menus and mobile hamburger navigation built with HTML, CSS, and vanilla JavaScript. I have published this project on Frontend Mentor.",
    link: "https://github.com/mehmett09/intro-section-with-dropdown-navigation-main",
  },
  {
    id: 5,
    title: "Blogging Website",
    description: "A learning-focused blog project developed with Node.js and Express to understand backend fundamentals, routing, CRUD logic, and MVC architecture.",
    link: "https://github.com/mehmett09/blogapp",
  },
  
];

const Projects = () => {
  const [active, setActive] = useState(2);
  const sliderRef = useRef(null);

  useEffect(() => {
    const items = sliderRef.current.querySelectorAll('.item');

    items.forEach((item) => {
      item.style.transition = '0.5s';
      item.style.zIndex = 1;
      item.style.filter = 'none';
      item.style.opacity = 1;
      item.style.transform = 'none';
    });

    let stt = 0;
    for (let i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt})`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(5px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;
    for (let j = active - 1; j >= 0; j--) {
      stt++;
      items[j].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt})`;
      items[j].style.zIndex = -stt;
      items[j].style.filter = 'blur(5px)';
      items[j].style.opacity = stt > 2 ? 0 : 0.6;
    }
  }, [active]);

  const nextSlide = () => {
    setActive((prev) => (prev + 1 < projectsData.length ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <section className="projects-container" id="projects">
      <div className="title">
        <h1>PROJECTS</h1>
      </div>
      <div className="slider" ref={sliderRef}>
        {projectsData.map((project) => (
          <div key={project.id} className="item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button className="more">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                More
              </a>
            </button>
          </div>
        ))}

        <button id="prev" onClick={prevSlide}>
          <img src={Right} alt="next button" />
        </button>
        <button id="next" onClick={nextSlide}>
          <img src={Left} alt="prev button" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
