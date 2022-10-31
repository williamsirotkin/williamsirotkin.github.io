import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css'

function Menu () {
  return (
    <div class = "menu">
        <ul>
            <li><a href="index.html"> Bio </a></li>
            <li><a href="experience.html"> Work Experience </a></li>
            <li><a href="projects.html"> Projects </a></li>
            <li><a href="involvement.html"> Involvement </a></li>
            <li><a href="skills.html"> Skills </a></li>
            <li><a href="interests.html"> Interests </a></li>
            <li><a href="contact.html"> Contact </a></li>
        </ul>
    </div>
  )
}

function FrontImg () {
  return (
    <img class = "sanford" src = {require('./images/sanford.jpg')} alt = "sanford"></img>
  ) 
}

function FrontText () {
  return (
    <div class = "front-text">
        <div class = "name">
            <h1> William Sirotkin </h1>
        </div>
        <p> CS Student at UGA. React App </p>
    </div> 
  )
}

function Bio () {
  return (
    <div class = "bio">
      <img class = "headshot" src = {require('./images/headshot.jpg')} alt = "headshot"></img>
      <div class = "info">
          I'm a 3rd year Honors Computer Science Student at UGA graduating in May 2024. <br></br>
          My most proficient languages and technologies are Python, Flask, TypeScript, Firestore DB, and GCP. <br></br>
          I'm particularly interested in back-end development, system design, and scalability. <br></br>
          I like to build software that can help many people 
      </div>
    </div>
  )
}

function Experience () {
  return (
    <div class = "experience">
        <div class = "info"> 
            My work experience has helped shape my career and has given me the skills necessary to succeed. 
            <center><button class = "read-more" type = "button" onclick = "location.href='experience.html'"> READ MORE </button></center>
        </div>
        <img src = "https://imageio.forbes.com/specials-images/imageserve/5f63685f8a5fc10b76f655dc/0x0.jpg?format=jpg&width=1200"></img>
    </div>
  )
}

function Projects () {
  return (
    <div class = "projects">
        <img src = "https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/how-to-become-software-engineer.jpg.webp?itok=uuamJN8l"></img>
        <div class = "info"> 
            I really enjoy working on personal projects, both to learn new things and to create something cool
            <br></br>
            <center><button class = "read-more" type = "button" onclick = "location.href='projects.html'"> READ MORE </button></center>
            <br></br>
        </div>
    </div>
  )
}

function Skills () {
  return (
    <div class = "skills">
          <div class = "info">
              I have learned many useful technical and non-technical skills through my experiences
              <br></br>
              <center><button class = "read-more" type = "button" onclick = "location.href='skills.html'"> READ MORE </button></center>
              <br></br>
          </div>
          <img class = "image" src = "https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/1553778302662-Y1Y7C58AS7NF94816X1L/publications.jpg" alt = "Skills"></img>
      </div>
  )
}

function Footer () {
  return (
    <div class = "footer"> 
        <center>
            <p>
                Connect with me on <a href="https://www.linkedin.com/in/williamsirotkin" target = "blank"><u>LinkedIn</u> </a>
                and check out my <u><a href="https://www.github.com/williamsirotkin" target = "blank">GitHub</a></u>
            </p>
    </center>
    </div>
  )
}

function Mock() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload now.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now
        </a>
      </header>
    </div>
  );
}

function App () {
  return (
  <React.Fragment>
    <Menu/>
    <FrontImg/>
    <FrontText/>
    <Bio/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Footer/>
  </React.Fragment>
  )
}

export default App;
