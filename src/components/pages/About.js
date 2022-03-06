import React from 'react'
import '../../styling/About.css'

export default function About() {
    const headshot = process.env.PUBLIC_URL + '/assets/images/headshot.png';


    return (
        <div id="home-div">
            <div id="about">
                <h1>Hi,
                    <br />
                    I'm Leslie</h1>
                <h3>full stack web developer</h3>
                <hr />
                <p id="bio">
                    Glad you're here! Please have a look around and get in touch if you would like to work together. <br />
                    My top value is growth and it drives everything I do! I thrive in an environment that requires equal parts creative and logical thinking - which is why I love web development. 
                </p>
            </div>
                <img src={headshot} alt="leslies headshot" id="my-headshot"/>
        </div>

    )
};

