



import React from "react";
import '../App.css';

function Skills() {
  return (
    <section id="skills" className="section">

      <h1>Skills</h1>

      <div className="skills-container">

  
        <div className="skill-box">
          <h3>Frontend Development</h3>
          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        
        <div className="skill-box">
          <h3>Backend Basics</h3>
          <div className="skill-tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Python</span>
            <span>SQL</span>
            <span>JDBC</span>
            <span>Hibernate</span>
          </div>
        </div>

      
        <div className="skill-box">
          <h3>Tools</h3>
          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Postman</span>
            <span>IntelliJ IDEA</span>
          </div>
        </div>

      </div>

    </section>
  );
}


export default Skills;