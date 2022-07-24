import React from 'react';
// screenshot imports
import AdvAdvScreenshot from '../../../src/images/adventure-adviser-screenshot.png';
import EcommerceScreenshot from '../../../src/images/ecommerce-screenshot.png';
import EmpTrackerScreenshot from '../../../src/images/employee-tracker-screenshot.png';
import NoteTakerScreenshot from '../../../src/images/note-taker-screenshot.png';
import ReadMeGeneratorScreenshot from '../../../src/images/readme-generator-screenshot.png';
import WeatherDashboardScreenshot from '../../../src/images/weather-dash-screenshot.png';

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <p>
                Here is a collection of some recent projects I have worked on in the past few weeks. Click on the images to go to the deployed application.
            </p>

            <div className="row container-fluid">


                <div className="card col-md-5 col-sm-12 p-2 m-2">
                    <a href="https://jcdoran33.github.io/Adventure-Adviser/" target="_blank">
                        <img className="card-img-top" src={AdvAdvScreenshot} alt="Adventure Adviser Screenshot" />
                    </a>
                    <h5 className="card-title">Adventure Adviser</h5>
                    <p className="card-text">Allows a user to search and buy tickets for events in a given geographical area. Utilizes Google Maps, OpenWeather, and Ticketmaster APIs</p>
                    <p className="card-text"><a href="https://github.com/jcdoran33/Adventure-Adviser">Github Repository</a></p>
                </div>


                <div className="card col-md-5 col-sm-12 p-2 m-2">
                    <a href="https://github.com/jcdoran33/Ecommerce-Back-End" target="_blank">
                        <img className="card-img-top" src={EcommerceScreenshot} alt="Ecommerce Backend Screenshot" />
                    </a>
                    <h5 className="card-title">Ecommerce Back End</h5>
                    <p className="card-text">A simplified example of an ecommerce back end using Express with MySql/Sequelize. User can create, read, update, and delete products, product categories, and product tags.</p>
                    <p className="card-text"><a href="https://github.com/jcdoran33/Ecommerce-Back-End">Github Respository</a></p>
                </div>

                <div className="card col-md-5 col-sm-12 p-2 m-2">
                    <a href="https://github.com/jcdoran33/Employee-Tracker" target="_blank">
                        <img className="card-img-top" src={EmpTrackerScreenshot} alt="Employee Tracker Screenshot" />
                    </a>
                    <h5 className="card-title">Employee Tracker</h5>
                    <p className="card-text">Back end CLI application that allows a user to create, read update, and delete from a database of employee information. Uses Node, Express, MySql, and the Inquirer npm package.</p>
                    <p className="card-text"><a href="https://github.com/jcdoran33/Employee-Tracker">Github Repository</a></p>
                </div>

                <div className="card col-md-5 col-sm-12 p-2 m-2">
                    <a href="https://note-taker-jcd.herokuapp.com/" target="_blank">
                        <img className="card-img-top" src={NoteTakerScreenshot} alt="Note Taker Screenshot" />
                    </a>
                    <h5 className="card-title">Note Taker</h5>
                    <p className="card-text">A simple note taking application that will allow a user to create text notes, save them, and edit them. The note data persists, so if a user navigates away from the page and returns later, the notes from the previous session will be saved.</p>
                    <p className="card-text"><a href="https://github.com/jcdoran33/Note-Taker">Github Repository</a></p>
                </div>

                <div className="card col-md-5 col-sm-12 p-2 m-2">
                    <a href="https://github.com/jcdoran33/ReadMe-Generator" target="_blank">
                        <img className="card-img-top" src={ReadMeGeneratorScreenshot} alt="ReadMe Generator Screenshot" />
                    </a>
                    <h5 className="card-title">ReadMe Generator</h5>
                    <p className="card-text">This is a CLI application that will automatically generate a ReadMe file for the end user, based on the user's supplied criteria. The application uses the Inquirer package to prompt the user for information about their project, then generates a ReadMe.MD file.</p>
                    <p className="card-text"><a href="https://github.com/jcdoran33/ReadMe-Generator">Github Repository</a></p>
                </div>

                <div className="card col-md-5 col-sm-12 p-2 m-2">
                    <a href="https://jcdoran33.github.io/Weather-Dashboard/" target="_blank">
                        <img className="card-img-top" src={WeatherDashboardScreenshot} alt="Weather Dashboard Screenshot" />
                    </a>
                    <h5 className="card-title">Weather Dashboard</h5>
                    <p className="card-text">This is a front end application that displays current and 5-day weather forecast for a given geographical area based on the user's input. It utilizes the OpenWeather API for current weather data, and the Google Maps API for geocoding.</p>
                    <p className="card-text"><a href="https://github.com/jcdoran33/Weather-Dashboard">Github Repository</a></p>
                </div>

            </div>
            
            {/* added breaks to help with footer eclipsing content */}
            <br/>
            <br/>
            <br/>

        </div>
    );
}
