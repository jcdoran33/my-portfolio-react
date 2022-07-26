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
            <p>
                <small><i>This form uses the <a href="https://www.emailjs.com/" target="_blank" rel="noreferrer">EmailJS package</a>, and will automatically send me an email with the contents of the form. I will get back to you ASAP, thanks!</i></small>
            </p>
            {/* BEGIN form content */}
            <Form />
            {/* END form content*/}
            <br/>
            <p>
                <a href="mailito:jcdoran33@gmail.com?subject=Portfolio Contact Page">jcdoran33@gmail.com</a>
            </p>
            <p>
                <a href="https://www.linkedin.com/in/j-doran/">LinkedIn</a>
            </p>
            <br/><br/><br/><br/><br/><br/>
        </div>
    );
}