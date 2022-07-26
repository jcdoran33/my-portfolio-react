import React, { useState } from 'react';
import NavTabs from './NavTabs';
// import Home from './pages/Home'; //opting to not use a home page, profile will default ot About me as the home page for now
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';
import Portfolio from './pages/Portfolio';
// screenshot imports
import AdvAdvScreenshot from '../../src/images/adventure-adviser-screenshot.png';
import EcommerceScreenshot from '../../src/images/ecommerce-screenshot.png';
import EmpTrackerScreenshot from '../../src/images/employee-tracker-screenshot.png';
import NoteTakerScreenshot from '../../src/images/note-taker-screenshot.png';
import ReadMeGeneratorScreenshot from '../../src/images/readme-generator-screenshot.png';
import WeatherDashboardScreenshot from '../../src/images/weather-dash-screenshot.png';
import ExcelsiorScreenshot from '../../src/images/excelsior-screenshot.png';
import PlaceKayaScreenshot from '../../src/images/placekaya-screenshot-small.png';

//  test - laying out object with project data
const projectObj = [
  {
    id: 1,
    projectName: "placeKaya.com",
    projectImageLink: PlaceKayaScreenshot,
    projectImageAlt: "Screenshot thumbnail of placeKaya.com",
    projectDescription: "A custom-built placeholder image service featuring images of my dog, Kaya. Cloudinary and Netlify used to host and transform images.",
    projectDeployedLink: "https://www.placekaya.com",
    projectGithubRepo: "https://github.com/jcdoran33/PlaceKaya"
  },
  {
    id: 2,
    projectName: "Adventure Adviser",
    projectImageLink: AdvAdvScreenshot,
    projectImageAlt: "Screenshot thumbnail of Adventure Adviser home page",
    projectDescription: "Allows a user to search and buy tickets for events in a given geographical area. Utilizes Google Maps, OpenWeather, and Ticketmaster APIs.",
    projectDeployedLink: "https://jcdoran33.github.io/Adventure-Adviser/",
    projectGithubRepo: "https://github.com/jcdoran33/Adventure-Adviser"
  },
  {
    id: 3,
    projectName: "Excelsior Emporium",
    projectImageLink: ExcelsiorScreenshot,
    projectImageAlt: "Screenshot thumbnail of the Excelsior Emporium main page",
    projectDescription: "A mock ecommerce site for the Marvel universe. MERN-stack application using Apollo/GraphQL, bcrypt and json webtoken packages, and Stripe payment API.",
    projectDeployedLink: "https://excelsior-emporium-jcd.herokuapp.com/",
    projectGithubRepo: "https://github.com/jcdoran33/Excelsior-Emporium"
  },
  {
    id: 4,
    projectName: "Ecommerce Back End",
    projectImageLink: EcommerceScreenshot,
    projectImageAlt: "Screenshot of using the Ecommerce Back End app in Insomnia",
    projectDescription: "A simplified example of an ecommerce back end using Express with MySql/Sequelize. User can create, read, update, and delete products, product categories, and product tags.",
    projectDeployedLink: "https://github.com/jcdoran33/Ecommerce-Back-End",
    projectGithubRepo: "https://github.com/jcdoran33/Ecommerce-Back-End"
  },
  {
    id: 5,
    projectName: "Employee Tracker",
    projectImageLink: EmpTrackerScreenshot,
    projectImageAlt: "Screenshot of the commnad line interface of the Employee tracker",
    projectDescription: "Back end CLI application that allows a user to create, read update, and delete from a database of employee information. Uses Node, Express, MySql, and the Inquirer npm package.",
    projectDeployedLink: "https://github.com/jcdoran33/Employee-Tracker",
    projectGithubRepo: "https://github.com/jcdoran33/Employee-Tracker"
  },
  {
    id: 6,
    projectName: "Note Taker",
    projectImageLink: NoteTakerScreenshot,
    projectImageAlt: "Screenshot of the deployed Note Taker application",
    projectDescription: "A simple note taking application that will allow a user to create text notes, save them, and edit them. The note data persists, so if a user navigates away from the page and returns later, the notes from the previous session will be saved.",
    projectDeployedLink: "https://note-taker-jcd.herokuapp.com/",
    projectGithubRepo: "https://github.com/jcdoran33/Note-Taker"
  },
  {
    id: 7,
    projectName: "ReadMe Generator",
    projectImageLink: ReadMeGeneratorScreenshot,
    projectImageAlt: "Image of an example ReadMe file created with the ReadMe Generator app",
    projectDescription: "This is a CLI application that will automatically generate a ReadMe file for the end user, based on the user's supplied criteria. The application uses the Inquirer package to prompt the user for information about their project, then generates a ReadMe.MD file.",
    projectDeployedLink: "https://github.com/jcdoran33/ReadMe-Generator",
    projectGithubRepo: "https://github.com/jcdoran33/ReadMe-Generator"
  },
  {
    id: 8,
    projectName: "Weather Dashboard",
    projectImageLink: WeatherDashboardScreenshot,
    projectImageAlt: "Screenshot of the Weather Dashboard app",
    projectDescription: "This is a front end application that displays current and 5-day weather forecast for a given geographical area based on the user's input. It utilizes the OpenWeather API for current weather data, and the Google Maps API for geocoding.",
    projectDeployedLink: "https://jcdoran33.github.io/Weather-Dashboard/",
    projectGithubRepo: "https://github.com/jcdoran33/Weather-Dashboard"
  },
]


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About'); //default to about me page

  // render correct component, based on currentPage value
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio projects={projectObj}/>;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}

      <Footer />
      
    </div>
  );
}
