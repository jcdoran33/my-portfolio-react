import React from 'react';
//import my bio picture
import bioPic from '../../../src/images/bio_pic.jpg'

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            {/* Have 1 row contain everything (2 columns). Picture on left a few cols, then all bio text in second column */}
            <div className="row">
                <div className="col-md">
                    <img src={bioPic} id="biopic" alt='Bio Headshot' className="shadow-lg"/>
                </div>
                <div className="col-md">
                    <h3>Welcome</h3>
                    
                    <p>My name is Jack and I am a full stack web developer. Thanks for visiting my portfolio site!</p>
                    <h5>Background</h5>
                    <p>Full stack web developer with a recently-earned certificate in full stack development from Rutgers University. Newly acquired proficiencies in JavaScript, Node.js, React, MongoDB, responsive design, third-party APIs, and various other packages and technologies. Applied agile design methodology working on collaborative group projects, including building a MERN-stack e-commerce website. Leveraging prior professional experience in combination with new development skill sets to create responsive and useful sites and applications. Already possessing soft skills like team leadership, customer obsession, and client relations, I’m excited to put my new skills to work to solve problems and create better experiences for the end user.</p>
                    <h5>Technical Skills</h5>
                    <p>HTML5, CSS, JavaScript, Responsive Design, Node.js, React, Express.js, MongoDB, and more. Please see the Resume page for a more detailed breakdown.</p>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/>
        </div>
    );
}