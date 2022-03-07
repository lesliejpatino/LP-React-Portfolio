import React from 'react'
import '../../styling/Contact.css'

export default function Contact() {


    const headshot = process.env.PUBLIC_URL + '/assets/images/headshot3.png';


    return (
        <>
            <div id="contact-page">
                <div id="contact-me">
                    <h1>Leslie Patino</h1>
                    <h3>full stack web developer</h3>
                </div>
                <img src={headshot} alt="leslies headshot" id="contact-img" />
                <br />
                <p> Would you like to connect? Fill out the contact form & I'll be in touch within 2 business days or contact me directly at the links below!</p>

                You can also find me at any of the following:
                {/* ADD CONTACT LINKS HERE */}
            </div>

            <div>
                <form id="contact-form">
                    <h2 className="text-center">Let's Connect! </h2> <br />
                    <label for="name">Name</label> <br />
                    <input type="text" id="user-name" /> <br /><br />

                    <label for="email">Email</label> <br />
                    <input type="email" id="user-email" /> <br /><br />

                    <label for="message">Enter Your Message:</label><br />
                    <textarea type="message" id="user-msg" /><br />
                    <input type="submit" value="Submit" /> <br />
                </form>
            </div>
        </>

    )
};

