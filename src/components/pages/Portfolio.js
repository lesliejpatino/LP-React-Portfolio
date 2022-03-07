import React from 'react'
import '../../styling/Portfolio.css'

export default function Portfolio() {
    const organizarr = process.env.PUBLIC_URL + '/assets/images/organizarr-site.png';
    const covid = process.env.PUBLIC_URL + '/assets/images/covid-site.png';
    const blog = process.env.PUBLIC_URL + '/assets/images/blog-site.png';
    const notes = process.env.PUBLIC_URL + '/assets/images/note-site.png';
    const pwdGenerator = process.env.PUBLIC_URL + '/assets/images/pwdgen-site.png';
    const scheduler = process.env.PUBLIC_URL + '/assets/images/sched-site.png';
    const gitHubLogo = process.env.PUBLIC_URL + '/assets/images/gh.png';


    return (
        <>
            <div className="col-8 m-5 text-center">
                <div className="row">
                    <div className="card col-5 mx-4 mb-4 border bg-black border bg-black project-cards">
                        <a href="https://dry-badlands-77030.herokuapp.com/" rel="noreferrer" target="_blank">
                            <h4>Organizarr</h4>
                        </a>
                        <img className="project-images" src={organizarr} alt="org site" /> <br />
                        <a href="https://github.com/lesliejpatino/Organizarr" rel="noreferrer" target="_blank">
                            <img src={gitHubLogo} alt="github-logo" id="repo-link" />
                        </a>
                    </div>

                    <div className="card col-5 mx-4 mb-4 border bg-black project-cards">
                        <a href="https://lesliejpatino.github.io/Find-Covid-Testing/" rel="noreferrer" target="_blank">
                            <h4>Map-A-Covid-Test</h4>
                        </a>
                        <img className="project-images" src={covid} alt="covid site" /> <br />
                        <a href="https://github.com/lesliejpatino/Find-Covid-Testing" rel="noreferrer" target="_blank">
                            <img src={gitHubLogo} alt="github-logo" id="repo-link" />
                        </a>
                    </div>

                    <div className="card col-5 mx-4 mb-4 border bg-black project-cards">
                        <a href="https://github.com/lesliejpatino/AllThingsTech-Blog" rel="noreferrer" target="_blank">
                            <h4>All Things Tech - Blog</h4>
                        </a>
                        <img className="project-images" src={blog} alt="blog site" /> <br />
                        <a href="https://github.com/lesliejpatino/AllThingsTech-Blog" rel="noreferrer" target="_blank">
                            <img src={gitHubLogo} alt="github-logo" id="repo-link" />
                        </a>

                    </div>

                    <div className="card col-5 mx-4 mb-4 border bg-black project-cards">
                        <a href="https://obscure-waters-08324.herokuapp.com/" rel="noreferrer" target="_blank">
                            <h4>Save A Note</h4>
                        </a>
                        <img className="project-images" src={notes} alt="notes site" /> <br />
                        <a href="https://github.com/lesliejpatino/Note-Saver" rel="noreferrer" target="_blank">
                            <img src={gitHubLogo} alt="github-logo" id="repo-link" />
                        </a>

                    </div>

                    <div className="card col-5 mx-4 mb-4 border bg-black project-cards">
                        <a href="https://lesliejpatino.github.io/Password-Generator/" rel="noreferrer" target="_blank">
                            <h4>Password Generator</h4></a>
                        <img className="project-images" src={pwdGenerator} alt="pwd site" /> <br />
                        <a href="https://github.com/lesliejpatino/Password-Generator" rel="noreferrer" target="_blank">
                            <img src={gitHubLogo} alt="github-logo" id="repo-link" />
                        </a>


                    </div>

                    <div className="card col-5 mx-4 mb-4 border bg-black project-cards">
                        <a href="https://lesliejpatino.github.io/Schedule-Your-Workday/" rel="noreferrer" target="_blank">
                            <h4>Work Day Scheduler</h4>
                        </a>
                        <img className="project-images" src={scheduler} alt="scheduler site" />
                        <a href="https://github.com/lesliejpatino/Schedule-Your-Workday" rel="noreferrer" target="_blank">
                            <img src={gitHubLogo} alt="github-logo" id="repo-link" />
                        </a>
                    </div>

                </div>
            </div>
        </>

    );
};