
import React from "react";
import profile from "../assets/photo.jpeg";

function About() {
  return (
    <section id="about" className="section">

      <div className="about-container">

       
        <div className="about-left">
          <h1 className="aboutme">About Me</h1>
 <p>
            I am an aspiring Full Stack Developer with a strong interest in
            building modern and user-friendly web applications. I enjoy working
            on both the frontend and backend using technologies like React,
            Java, and Spring Boot.
          </p>

          <p>
            I enjoy learning new technologies and improving my programming
            skills through building real-world projects. My goal is to grow as
            a developer and build applications that solve real-world problems.
          </p>

         
            <p>
  I am constantly exploring new tools and technologies to improve my
  development skills and stay updated with modern web development trends.
 

          </p>

        </div>

        
        <div className="about-right">

          <img src={profile} alt="profile" />
       </div>
     </div>

    </section>
  );
}

export default About;