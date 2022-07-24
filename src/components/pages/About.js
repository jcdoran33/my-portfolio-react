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
                    <img src={bioPic} id="biopic" alt='Bio Picture' className="shadow-lg"/>
                </div>
                <div className="col-md">
                    <h3>Welcome to my portfolio!</h3>
                    <br/>
                    <p>My name is Jack and I am a full stack web developer.</p>
                    <p>More stuff about me here.</p>
                    <p>Personal stuff about me goes here.</p>
                </div>
            </div>
        </div>
    );
}