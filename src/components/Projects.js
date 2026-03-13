
import React from "react";
import "./Projects.css";
import bookskyImg from "../assets/BooksKey.png";
import loginImg from "../assets/LoginForm.png";
import todoImg from "../assets/ToDoList.png";
import Weatherapp from "../assets/WeatherApp.png";
import git from "../assets/git.png";


function Projects() {
 const projectList = [
  {
    name: "Weather App",
    description: "Shows real-time weather using OpenWeather API.",
    image: Weatherapp,
     tech: ["React", "HTML","JavaScript", "CSS"],
    github: "https://github.com/logapriya104/weather-app"
  },
   {
    name: "To-Do List App",
    description: "Task management app to add and track daily tasks.",
    image: todoImg,
     tech: ["React", "JavaScript", "CSS","HTML"],
    github: "https://github.com/logapriya104/To-Do-List"
  },
  {
    name: "Booksky-App",
    description: "Book management application to add and manage books.",
    image: bookskyImg,
     tech: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/logapriya104/Booksky-App"
  },
  {
    name: "Login Page",
    description: "React login page with validation and responsive design.",
    image: loginImg,
     tech: ["React", "HTML","JavaScript", "CSS"],
    github: "https://github.com/logapriya104/Login-page"
  }
];

  return (
    <section id="projects" className="section">
      <h1 className="FeaturedProjects">Featured Projects</h1>


 <div className="project-cards">
  {projectList.map((proj, index) => (

    <div className="card" key={index}>
  <img src={proj.image} alt={proj.name} className="project-img"/>

      <h3>{proj.name}</h3>
      <p>{proj.description}</p>

 <div className="tech-stack">
    {proj.tech.map((tech, i) => (
      <span key={i} className="tech">{tech}</span>
    ))}
  </div>

     <a
    href={proj.github}
    target="_blank"
    rel="noopener noreferrer"
    className="github-btn"
  >
   <img src={git} alt="github" className="github-icon"/>
    View Code
  </a>

</div>
  ))}
</div>
    </section>
  );
}

export default Projects;