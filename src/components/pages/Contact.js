import React from 'react';
//import FOrm component
import Form from '../Form';

export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <p>
                Please use the form on this page to get in contact with me.
            </p>
            {/* BEGIN form content */}
            <Form />
            {/* END form content*/}
            <br/>
            <p>
                Email: <a href="mailito:jcdoran33@gmail.com?subject=Portfolio Contact Page">jcdoran33@gmail.com</a>
            </p>
            <p>
                Phone: (732)555-5555
            </p>
            <p>
                <a href="https://www.linkedin.com/in/j-doran/">LinkedIn</a>
            </p>
        </div>
    );
}