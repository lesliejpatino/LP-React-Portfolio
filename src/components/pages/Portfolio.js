import React from 'react'
import '../../styling/Portfolio.css'

export default function Portfolio() {
    const organizarr = process.env.PUBLIC_URL + '/assets/images/organizarr-site.png';
    const covid = process.env.PUBLIC_URL + '/assets/images/covid-site.png';
    const blog = process.env.PUBLIC_URL + '/assets/images/blog-site.png';
    const notes = process.env.PUBLIC_URL + '/assets/images/note-site.png';
    const pwdGenerator = process.env.PUBLIC_URL + '/assets/images/pwdgen-site.png';
    const scheduler = process.env.PUBLIC_URL + '/assets/images/sched-site.png';


    return (
        <>
        <div className="col-8 m-5">
            <div className="row">
            <div className="card col-5 mx-4 mb-4 border project-cards">
                <h4>Organizarr</h4>
                <img className="project-images" src={organizarr} alt="org site" /> <br />
            </div>

            <div className="card col-5 mx-4 mb-4 project-cards">
                <h4>Map-A-Covid-Test</h4>
                <img className="project-images" src={covid} alt="covid site" /> <br />
            </div>

            <div className="card col-5 mx-4 mb-4 project-cards">
                <h4>All Things Tech - Blog</h4>
                <img className="project-images" src={blog} alt="blog site" /> <br />
            </div>

            <div className="card col-5 mx-4 mb-4 project-cards">
                <h4>Save A Note</h4>
                <img className="project-images" src={notes} alt="notes site" /> <br />
            </div>

            <div className="card col-5 mx-4 mb-4 project-cards">
                <h4>Password Generator</h4>
                <img className="project-images" src={pwdGenerator} alt="pwd site" /> <br />
            </div>

            <div className="card col-5 mx-4 mb-4 project-cards">
                <h4>Work Day Scheduler</h4>
                <img className="project-images" src={scheduler} alt="scheduler site" />
            </div>
            </div>
            </div>
        </>
        
    );
};