import React from 'react';
// screenshot imports - commented out since they are reference now in PortfolioContainer.js
// import AdvAdvScreenshot from '../../../src/images/adventure-adviser-screenshot.png';
// import EcommerceScreenshot from '../../../src/images/ecommerce-screenshot.png';
// import EmpTrackerScreenshot from '../../../src/images/employee-tracker-screenshot.png';
// import NoteTakerScreenshot from '../../../src/images/note-taker-screenshot.png';
// import ReadMeGeneratorScreenshot from '../../../src/images/readme-generator-screenshot.png';
// import WeatherDashboardScreenshot from '../../../src/images/weather-dash-screenshot.png';

export default function Portfolio(props) {
    return (
        <div>
            <h1>Portfolio</h1>
            <p>
                Here is a collection of some recent projects I have worked on. Click on the images to go to the deployed application.
            </p>

            <div className="row container-fluid">

                {props.projects.map(project => (
                    <div className="card col-md-5 col-sm-12 p-2 m-2">
                    <a href={project.projectDeployedLink} target="_blank" rel="noreferrer">
                        <img className="card-img-top" src={project.projectImageLink} alt={project.projectImageLink} />
                    </a>
                    <h5 className="card-title">{project.projectName}</h5>
                    <p className="card-text">{project.projectDescription}</p>
                    <p className="card-text"><a href={project.projectGithubRepo} target="_blank" rel="noreferrer">Github Repository</a></p>
                </div>
                ))}



            </div>
            
            {/* added breaks to help with footer eclipsing content */}
            <br/><br/><br/><br/><br/><br/><br/>

        </div>
    );
}
