import React from 'react'
import ContactForm from './ContactForm.js'
import '../../styling/Contact.css'

export default function Contact() {
    const headshot = process.env.PUBLIC_URL + '/assets/images/headshot3.png';

    return (
        <>
            <div className="col-10 my-5" id="contact-page">
                <div className="row justify-content-between m-4">
                    <div className="col-lg-5 col-sm-9 m-3" id="contact-me">
                        <h1>Leslie Patino</h1>
                        <h3>full stack web developer</h3>

                        <img src={headshot} alt="leslies headshot" id="contact-img" />
                        <br />
                        <p> Would you like to connect? Please fill out the contact form & I'll be in touch within 2 business days.
                            You can also contact me directly at the links below!</p>
                        {/* ADD CONTACT LINKS HERE */}
                    </div>

                    <div type="form" className="col-lg-5 col-sm-9" id="contact-form">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>

    )
};

