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
                    <p>I recently (Summer 2022) made a pivot to focus more on programming and development. I love learning and mastering new concepts and technologies, so, while challenging, learning in a more structured way about coding over the past few months has been very rewarding. I’m looking forward to see where this will take my in a professional capacity, and even more so looking forward to how I can employ these new skills for <strong>fun</strong> in my personal life!</p>
                    <p>Outside of coding, I love listening to, playing, and creating music, and spending time with my rescue dog, Kaya.</p>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/>
        </div>
    );
}