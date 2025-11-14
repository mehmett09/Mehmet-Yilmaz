import React from 'react';
import './Contact.css';
import profileImage from '../assets/images/portfolio-image.png'; 

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-left">
        <h1 className="contact-title">Contact <span>Me</span></h1>
        <div className="contact-image-wrapper">
          <img src={profileImage} alt="profile" className="contact-image" />
        </div>
      </div>

      <div className="contact-right">
        <h2 className="contact-subtitle">Get in Touch</h2>
        <p className="contact-text">
          If you’d like to discuss a project, collaborate, or just say hi — feel free to reach out!
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:mhmtylmzz59@gmail.com">mhmtylmzz59@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mehmet-y%C4%B1lmaz-562b7a326/" target="_blank" rel="noopener noreferrer">linkedin.com/in/mehmetyilmaz</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/mehmett09" target="_blank" rel="noopener noreferrer">github.com/mehmetyilmaz</a></p>
          <p><strong>Location:</strong> Türkiye</p>
        </div>
        
      </div>
     
    </section>
  );
};

export default Contact;
