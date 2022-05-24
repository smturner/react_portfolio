import React from 'react';
import './Footer.css'

const Footer = () => {

    const icons = [
        {
            name: "fa-brands fa-github",
            link: 'https://github.com/smturner',
        },
        {
            name: "fa-brands fa-linkedin",
            link: "https://www.linkedin.com/in/sarahturner28/",
        }
    ]

    return(
        <section>
            <footer className="container">
                <div className="row">
                    <div className ="col-lg-8 mx-auto text-center">
                        {icons.map(icon => (
                            <a href= {icon.link} key={icon.name} target="_blank" rel="noreferrer"> <i className={icon.name}></i></a>
                        ))
                        }
                        </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer;