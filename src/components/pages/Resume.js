import React from 'react';
// may have to import my resume file here, so we can have it as part of the download tag below
// import Resume from '../../../src/JackDoranResume.pdf'

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <p>
                This is a miniature, web version of my resume highlighting coding-specific proficiences. You can click the download link to download a more formal PDF copy.
            </p>
            <p>
                {/* <a href={Resume} download> */}
                    Click here to download a PDF of my resume.
                {/* </a> */}
            </p>
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
                <li>React (used to create this portfolio site!)</li>
                <li>MongoDB / Mongoose</li>
                <li>Progressive Web Applications</li>
                <li>MySQL / Sequelize</li>
                <li>Express</li>
                <li>Node.js</li>
                <li>MVC Design Pattern</li>
                <li>Object Oriented Programming</li>
            </ul>
            <h3>Collaborative Proficiencies</h3>
            <ul className="resume">
                <li>Git / Github</li>
                <li>Heroku</li>
            </ul>
            {/* added some breaks so not cut off by footer */}
            <br/> <br/> <br/> <br/> <br/> <br/>
        </div>
    );
}