import React from 'react';
import "./About.css"

const About = () => {
    return (
        <section className="aboutMe">        
            <div className="container my-auto">
                <div className="row">
                    <h1 className="title text-center">About Me</h1>
                    <hr className="my-4" />
                      <div className= "col-lg-3">
                      <img src={require("./mypicture.jpg")} className=" rounded img-fluid" alt="..."/>
                          </div>
                          <br/>
                          <div className="page col-lg-9 mx-auto">

                        <p>
                            I am a former teacher of 5 years, expanding my skills and experience to make an exciting career change. I have resently graduated from a 12 week full stack boot camp at the University of Minnesota where I learned a variety of languages that I am ready to put to use in my next job.
                        <br />
                        <br />
                            I have spent much of my professional career collaborating with my peers to develop resources that streamline and enhance learning, and utilizing my creativity and problem solving skills to tackle challenging situations. I am someone who works hard, sets goals, and pursues them to the best of my abilitiy. Being proficient in these skills, I believe, will have a positive impact on my future employeer and co-workers. I plan to do full-stack development with an emphasis on backend databases, as well as market my skills for non-profits and small buisnesses. 
                        </p>
                  </div>
                    </div>
                </div>
    

        </section>
    )
}

export default About;