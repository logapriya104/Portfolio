import React from "react";
import Linkedin from "../assets/Linkedin.png";
import gitt from "../assets/gitt.png";
import Email from "../assets/Email.png";
import Resume from "../assets/Resume.png";
import "../App.css";

function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <h1>Get In Touch</h1>
      <p className="contact-text">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>

      <div className="contact-container">

  
        <div className="contact-card">
          <img src={Email} alt="Email"  className="contact-icon" />
          <h3>Email</h3>
          <p>logapriyab104@gmail.com</p>
        </div>

      
        <div className="contact-card">
          <img src={Linkedin} alt="linkedin" className="contact-icon"/>
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/logapriya-b-958607295" target="_blank" rel="noreferrer">
         Open LinkedIn
          </a>
        </div>

    
        <div className="contact-card">
          <img src={gitt} alt="github" className="contact-icon"/>
          <h3>GitHub</h3>
         <a href="https://github.com/logapriya104" target="_blank" rel="noreferrer">
  Open GitHub
</a>
        </div>

       
        <div className="contact-card">
            <img src={Resume} alt="Resume" className="Resume-icon"/>
            <h3>Resume</h3>
         <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn" >
  View Resume
</a>
        </div>

      </div>
 </section>
  );
}

export default Contact;