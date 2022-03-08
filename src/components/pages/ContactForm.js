import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import '../../styling/ContactForm.css';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xzbogvlq");
    if (state.succeeded) {
        return (
            <p>Thanks! I'll be in touch, soon.</p>
        );
    }
    function MouseOut(event) {
        event.target.setAttribute('placeholder', 'This field is required');
    }
    return (
        <div>
            <fieldset id="fs-frm-inputs">
                <label for="Name">Name</label>
                <input type="text" name="name" id="contact-name" placeholder="" required="" onMouseOut={MouseOut}/>
                <br />

                <label for="email-address">Email Address</label>
                <input type="email" name="_replyto" id="contact-email" placeholder="you@email.com" required="" onMouseOut={MouseOut}/>
                <br />

                <label for="message">Your Message: </label>
                <textarea rows="5" name="message" id="message" placeholder="" required="" onMouseOut={MouseOut}></textarea>
                <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />

            </fieldset>
            <input type="submit" value="Submit" />

        </div>
    )
};