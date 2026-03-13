
import React from "react";
import "../App.css";   


function Navbar() {
  return (
    <nav id="navbar" className="navbar">
        <h4>portfolio</h4>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;