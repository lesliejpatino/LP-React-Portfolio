import React from 'react'
import '../../styling/Resume.css'

export default function Resume() {
    const myResume = process.env.PUBLIC_URL + '/assets/Resume.pdf';

    return (
        <>
            <div className="col-10 justify-content-between my-5" id="resume-div">
                <div className="row">
                    <div className="col-lg-5 col-md-7 col-sm-8 text-center mt-3" id="leslie-exp">
                        <h2>Front End Technologies</h2>
                        <hr />
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>React</p>
                        <p>Handlebars</p>
                        <p>Bootstrap</p>
                        <p>Javascript</p>
                        <p>jQuery</p>
                        <p>Ajax & APIs</p>

                        <br />

                        <h2>Back End Technologies</h2>
                        <hr />
                        <p>Node</p>
                        <p>Express</p>
                        <p>mySql</p>
                        <p>Sequelize</p>
                        <p>Javascript</p>
                        <p>jQuery</p>
                        <p>Ajax & APIs</p>

                        {/* <p>full stack web development</p>
                        <p>management/leadership</p>
                        <p>planning/logistics</p>
                        <p>bilingual(english/spanish)</p>
                        <p>digital design</p> */}
                        <br />
                    </div>

                    <div className="col-lg-7 col-md-7 col-sm-8 text-end mb-5" id="my-resume">
                        <embed
                            src={myResume}
                            width="550"
                            height="700">
                        </embed>
                        <br />
                        <br />
                        <a
                            href={myResume}
                            rel="noreferrer"
                            target="_blank"
                            id="resume-link">
                            <h4 className="text-center"> - Download Resume -</h4>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}