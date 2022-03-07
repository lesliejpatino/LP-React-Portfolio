import React from 'react'
import '../../styling/Resume.css'

export default function Resume() {
    const myResume = process.env.PUBLIC_URL + '/assets/Resume.pdf';
    // const bgImg = process.env.PUBLIC_URL + '/assets/images/bkg.png';

    return (
        <>
            <div className="col-12 justify-content-between white my-5 mx-4">
                <div className="row border" id="resume-div">
                    <div className="col-4 border text-center" id="leslie-exp">
                        <h2>Strengths</h2> <br />

                        <p>full stack web development</p>
                        <p>management/leadership</p>
                        <p>planning/logistics</p>
                        <p>bilingual(english/spanish)</p>
                        <p>digital design</p>

                        <br />
                        {/* <img src={working} alt="icon of person on laptop" id="working-icon" /> */}

                        <h4> <a href={myResume} rel="noreferrer" target="_blank" id="resume-link"> -Download Resume- </a></h4>
                        <br />
                    </div>

                    <div className="col-8 border text-end mb-5" id="my-resume">
                        <embed
                            src={myResume}
                            width="550"
                            height="800">
                        </embed>

                    </div>

                    {/* <img src={bgImg} alt="background" id="bg-img"/> */}
                </div>
            </div>
        </>
    )
}