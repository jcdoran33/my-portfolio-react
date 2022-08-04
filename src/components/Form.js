import React, { useRef } from 'react';
//import emailjs
import emailjs from '@emailjs/browser';

export default function Form() {
    // new content for email js
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('contact_service', 'contact_form', form.current, 'iknfIbiyFVzfpzwOX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    // end new content for email js
    return (
        <div>
            <h3>Contact Form</h3>
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="contact_number"></input>
                <input name="user_name" type="text" placeholder="Your Name" required={true}></input> <br /><br />
                <input name="user_email" type="email" placeholder="Your Email" required={true}></input> <br /><br />
                <textarea name="message" cols="40" rows="7" required={true} placeholder="Enter message here...">

                </textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}