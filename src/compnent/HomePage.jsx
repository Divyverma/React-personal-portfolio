import React from 'react'
import myimg from '../img/img-logo.png'
import shape from '../img/bg-finale-crop.png';
import me from '../img/finale-img.png';
import '../styling/Home.css';

export default function HomePage() {
  return (
    <>
      <div class="hero">
        <nav class="navbar">
            <div class="new">
                <img class="logo" src={myimg} />
                <a href="/" class="name">Divyansh Verma</a>

            </div>
            
            <ul class="nav-menu">
                <li class="nav-item"><a class="nav-link" href="#">HOME</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">ABOUT</a></li>
                <li class="nav-item"><a class="nav-link" href="#project">PROJECT</a></li>
                <li class="nav-item"><a class="nav-link" href="/#contact">CONTACT</a></li>
                
            </ul>

            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            
        </nav>

        <div class="detel">
            <h1>I,m <span class="auto-type">Divyansh</span></h1>
            <p>This is my official portfolio website to show all 
                <br></br>
                Details and work experience in web development
            </p>
            <a download="resume.pdf" href="#">Download CV</a>
        </div>
        <div class="images">
            <img  src={shape} class="shape" alt="" />
            <img class="yimg" src={me} alt="" />
        </div>
    </div>
    
    </>
  )
}
