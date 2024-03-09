import React from 'react';
import '../styling/About.css';

export default function AboutPage() {
  return (
    <>

<section class="about-section" id="about">
        <div class="about-div">
            <div class="about-content">
                <h1 class="about-heading">About <span>ME</span></h1>
                <p>Hello there! I'm Divyansh verma, a <span>passionate frontend developer</span> with a keen eye for creating visually stunning and highly functional user interfaces. I thrive on turning complex ideas into elegant, intuitive, and user-friendly designs. My toolbox is equipped with the latest technologies and frameworks in the frontend realm. I specialize in crafting responsive and pixel-perfect websites.</p>
            </div>
        </div>

        <div class="lower-abt">
            <div class="left-abt">
                <h1>EDUCATION</h1>
                <ol>
                    <li>SCHOOLING</li>
                    <p class="ed"><span>High school</span></p>
                    <p class="ed">Pt. Deen Dayal Upadhyaya Saraswati Vidhya Mandir Inter college (C.B.S.E.), Lakhimpur-kheri (2017-18)</p>
                    <p class="ed"><span>Inter Mediate</span></p>
                    <p class="ed">Pt. Deen Dayal Upadhyaya Saraswati Vidhya Mandir Inter college (C.B.S.E.), Lakhimpur-kheri (2019-20)</p>
                    
                    <li>GRADUATION</li>
                    <p class="ed"><span>B.tech (Electrical Engineering)</span></p>
                    <p class="ed">Bundelkhand Institute of Engineering and Technology, Jhansi (2021-25)</p>

                </ol>
                
            </div>
            <div class="right-abt">
                <div class="wrapper">
                    <h2 class="how-title">SKILLS</h2>
                        <div class="skill">
                            <p>HTML5/CSS</p>
                            <div class="skill-bar skill1">
                                <span class="skill-count1">90%</span>
                            </div>
                        </div>

                        <div class="skill">
                            <p>JAVASCRIPT</p>
                            <div class="skill-bar skill2">
                                <span class="skill-count2">85%</span>
                            </div>
                        </div>

                        <div class="skill">
                            <p>BOOTSTRAP</p>
                            <div class="skill-bar skill4">
                                <span class="skill-count4">95%</span>
                            </div>
                        </div>

                        <div class="skill">
                            <p>REACT JS</p>
                            <div class="skill-bar skill3">
                                <span class="skill-count3">80%</span>
                            </div>
                        </div>

                        <div class="skill">
                            <p>NEXT JS</p>
                            <div class="skill-bar skill5">
                                <span class="skill-count5">75%</span>
                            </div>
                        </div>

                        <div class="skill">
                            <p>PHOTOSHOP</p>
                            <div class="skill-bar skill6">
                                <span class="skill-count6">75%</span>
                            </div>
                        </div>

                        
                </div>
            </div>
        </div>
    </section>
        
    </>
  )
}
