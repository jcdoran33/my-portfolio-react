import React from 'react';

export default function Form() {
    return (
        <div>
            <h3>Contact Form</h3>
            <form>
                <input name="name" type="text" placeholder="Name" required={true}></input> <br /><br />
                <input name="email" type="email" placeholder="Email" required={true}></input> <br /><br />
                <textarea cols="40" rows="7" required={true} placeholder="Enter message here...">

                </textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}