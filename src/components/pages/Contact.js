import React from 'react'
import '../../styling/Contact.css'
// import CurvedArrow from "react-curved-arrow";

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
                        <p> Would you like to connect? Fill out the contact form & I'll be in touch within 2 business days or contact me directly at the links below!</p>

                        You can also find me at any of the following:
                        {/* ADD CONTACT LINKS HERE */}
                    </div>

                    <div type="form" className="col-lg-5 col-sm-9" id="contact-form">
                        {/* <form id="contact-form"> */}
                        <h2 className="text-center">Let's Connect! </h2> <br />
                        <label for="name">Name</label> <br />
                        <input type="text" id="user-name" /> <br /><br />

                        <label for="email">Email</label> <br />
                        <input type="email" id="user-email" /> <br /><br />

                        <label for="message">Enter Your Message:</label><br />
                        <textarea type="message" id="user-msg" /><br />
                        <input type="submit" value="Submit" /> <br />
                        {/* </form> */}

                        {/* <div className="wrapper bg-white">
                            <div className="from" />
                            <div className="to" />
                            <CurvedArrow fromSelector=".from" toSelector=".to" middleY={33} />
                        </div> */}
                    </div>
                </div>
            </div>
        </>

    )
};

