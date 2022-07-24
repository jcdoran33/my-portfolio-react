import React from 'react';

function Footer() {
    return (
        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <span className="text-muted col-sm blink-container">Let's connect! <span className="blink">{'>>>>>>>>>>>>>'}</span></span>
                    <div className="col-sm">
                        {/* <!-- Logo links for Github linked in here --> */}
                        <a href="https://www.linkedin.com/in/j-doran/"><img className="logos m-3" alt="LinkedIn Logo" src="./LI-In-Bug.png" /></a>
                        <a href="https://github.com/jcdoran33"><img className="logos m-3" alt="Github Logo" src="./GitHub-Mark-64px.png" /></a>
                        <a href="https://stackoverflow.com/users/19583492/jack"><img className="logos m-3" alt="Stack Overflow Logo" src="./Stack_Overflow-Icon-Logo.wine.png" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;