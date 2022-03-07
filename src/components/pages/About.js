import React from 'react'
import '../../styling/About.css'

export default function About() {
    const headshot = process.env.PUBLIC_URL + '/assets/images/headshot.png';


    return (
        <div className="col-7 my-5" id="home-div">
            <div id="about">
                <h1>Hi,
                    <br />
                    I'm Leslie</h1>
                <h4>full stack web developer</h4>
                <hr />
                <p id="bio">
                    Welcome! I'm glad you're here. <br /> <br /> 
                    I thrive in environments that require equal parts creative and logical thinking - which is why I became a web developer. My favorite thing about this career path is the never ending opportunity for growth.
                </p>
            </div>
                <img src={headshot} alt="leslies headshot" id="my-headshot"/>
        </div>

    )
};

