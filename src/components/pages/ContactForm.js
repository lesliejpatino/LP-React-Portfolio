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
            <form onSubmit={handleSubmit} id="fs-frm-inputs">
                <label for="Name">Name</label>
                <input
                    className="form-control"
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    onMouseOut={MouseOut}
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <br />

                <label for="email-address">Email Address</label>
                <input
                    className="form-control"
                    id="contact-email"
                    type="email"
                    name="_replyto"
                    placeholder="you@email.com"
                    required
                    onMouseOut={MouseOut}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <br />

                <label for="message">Your Message: </label>
                <textarea
                    rows="5"
                    name="message"
                    id="message"
                    required
                    onMouseOut={MouseOut}
                />

                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button type="submit" value="Submit" disabled={state.submitting}> Submit </button>
            </form>
        </div>
    )
};