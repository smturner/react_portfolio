import React from 'react';
import "./Pages.css"

const Resume = () => {
    return (
        // <p>Resume</p>
        <section className="resume">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto mb-4">
                    <h1 className="text-center" id="resume">Resume</h1>
                    <hr className="my-4" />
                    <h3>Front-end Proficiencies:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Git</li>
                        <li>React</li>
                        <li>Bootstrap, Bulma</li>
                        
                       
                    </ul>
                    <h3>Back-end Proficiencies:</h3>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>MERN Stack</li>
                    </ul>
                    <h3>Additional Skills:</h3>
                    <ul>
                        <li>Collaboration</li>
                        <li>Problem-Solving</li>
                        <li>Communication</li>
                        <li>Time-Management</li>
                        <li>Leadership</li>
                    </ul>
                    <p className="text-center">
                        Download my resume here --
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Resume;