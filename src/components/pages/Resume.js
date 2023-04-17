import React from 'react';
// may have to import my resume file here, so we can have it as part of the download tag below
import ResumePDF from '../../../src/JackDoranResume2022.pdf'
import RutgersBootcampBadge from '../../images/rutgers-coding-bootcamp.png';

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            {/* <p>
                This is a miniature, web version of my resume highlighting coding-specific proficiences. You can click the download link below to download a more expansive PDF copy.
            </p>
            <p>
                <a href={ResumePDF} download>
                    Click here to download a PDF of my full resume.
                </a>
            </p> */}
            <h3>Education</h3>
            <ul className="education">
                <a href="https://www.credly.com/badges/c76bb091-ebc9-4956-8bc5-1c8bb9e383d4/linked_in_profile" target="_blank" rel="noreferrer">
                    <img id="badge" src={RutgersBootcampBadge} alt="rutgers bootcamp badge"></img>
                </a>
                <li><a href="https://www.credly.com/badges/c76bb091-ebc9-4956-8bc5-1c8bb9e383d4/linked_in_profile" target="_blank" rel="noreferrer">Certificate in Full Stack Development</a> from Rutgers University</li>
                <li>B.A. in Economics - Rutgers University (New Brunswick)</li>
            </ul>
            <h3>Front End Proficiencies</h3>
            <ul className="resume">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>jQuery</li>
                <li id="res-design-li">Responsive Design (hover over me)<span id="responsivetext">(try shrinking and expanding this browser window - this text is hidden on mobile devices)</span></li>
                <li>Web, Third Party, Server Side APIs</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back End Proficiencies</h3>
            <ul className="resume">
                <li><strong id="mern">M</strong>ongoDB / MongoDB Atlas Cloud and Mongoose</li>
                <li><strong id="mern">E</strong>xpress</li>
                <li><strong id="mern">R</strong>eact (used to create this portfolio site!)</li>
                <li><strong id="mern">N</strong>ode.js</li>
                <li>Progressive Web Applications</li>
                <li>MySQL / Sequelize</li>
                <li>MVC Design Pattern</li>
                <li>Object Oriented Programming</li>
            </ul>
            <h3>Collaborative Proficiencies</h3>
            <ul className="resume">
                <li>Git / Github / Github Pages</li>
                <li>Heroku</li>
            </ul>
            {/* added some breaks so not cut off by footer */}
            <br/> <br/> <br/> <br/> <br/> <br/>
        </div>
    );
}