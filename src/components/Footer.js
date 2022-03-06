import React from "react";
import "../styling/Footer.css";
// import '../../public/assets/images'


export default function Footer() {

    const gitHubLogo = process.env.PUBLIC_URL+'/assets/images/gh.png';
    const linkedInLogo = process.env.PUBLIC_URL+'/assets/images/linkedin.png';
    const mediumLogo = process.env.PUBLIC_URL+'/assets/images/medium.png';

    return (
        <section className="footer">
            <h3>
                <a href="https://github.com/lesliejpatino" rel="noreferrer" target="_blank">
                    <img src={gitHubLogo} alt="github-logo" />
                </a>

                <a href="https://www.linkedin.com/in/lesliejpatino/" rel="noreferrer" target="_blank">
                    <img src={linkedInLogo} alt="linkedin-logo" />
                </a>

                <a href="https://medium.com/@lesliejpatino" target="_blank" rel="noreferrer">
                    <img src={mediumLogo} alt="medium-logo" />
                </a>
            </h3>
        </section>
    );
}