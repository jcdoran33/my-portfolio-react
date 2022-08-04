import React from 'react';

export default function Form() {
    return (
        <div>
            <h3>Contact Form</h3>
            <form id="contact-form">
                <input type="hidden" name="contact_number"></input>
                <input name="user_name" type="text" placeholder="Name" required={true}></input> <br /><br />
                <input name="user_email" type="email" placeholder="Email" required={true}></input> <br /><br />
                <textarea name="message" cols="40" rows="7" required={true} placeholder="Enter message here...">

                </textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}