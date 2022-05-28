import React from 'react';
import '../styles/Footer.css'

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
            <footer className="container-fluid justify-content-center">
                <div className="row">
                    <div className ="text-center ">
                        {icons.map(icon => (
                            <a id="icon"href= {icon.link} key={icon.name} target="_blank" rel="noreferrer"> <i className={icon.name}></i></a>
                        ))
                        }
                        </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer;