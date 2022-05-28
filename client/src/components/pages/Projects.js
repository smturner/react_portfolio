import React, {useState} from 'react';
import ProjectsPage from '../ProjectsPage'
import "./Pages.css"

// const Projects = () => {
//     return (
//         <p>Projects</p>
//     )
// }

// export default Projects;

// import React from 'react';

function Projects () {
    const [myProjects] = useState
([
    {
        name: 'Movie Generator',
        link: 'https://amplifyrebel.github.io/movie-generator/',
        repo: 'https://github.com/AmplifyRebel/movie-generator',
        description: 'HTML, CSS, JavaScript, API'
    },
    {
        name: "Weight 2 Go",
        link: "https://immense-hamlet-02624.herokuapp.com/signup",
        repo: "https://github.com/Rhoward1/workout_app-pj2",
        description: 'Handlebars, BootStraps, MySQL, JavaScript, API, Express, Azios, Node'

    },
    {
        name: "Work Day Scheduler",
        link: "https://smturner.github.io/work_day_scheduler/",
        repo: "https://github.com/smturner/work_day_scheduler",
        description: 'HTML, CSS, JavaScript'

    },
    {
        name: "Tech Blog",
        link: "https://blooming-island-93288.herokuapp.com/",
        repo: "https://github.com/smturner/tech_blog_MVC",
        description: 'Handlebars, JavaScript, CSS, MySQL, Node.js, Sequalize'

    },
    {
        name: "Team Profile Generator",
        link: "https://drive.google.com/file/d/1gxpzAN9uhYz1QpeQPKfTxp1haZ4GNKSJ/view",
        repo: "https://github.com/smturner/team_profile_generator",
        description: 'HTML, CSS, JavaScript, Inquirer, Node.js, OOP, Jest'
    },
    {
        name: "Note Taker",
        link: "https://mighty-island-61962.herokuapp.com/",
        repo: "https://github.com/smturner/express.js_note_taker",
        description: 'JavaScript, Express, Node, MySQL, Sequalize'

    },
    // {
    //     name: "E-Commerce",
    //     link: "https://drive.google.com/file/d/1SR5_sQS6Zq1JEC6POTHdgbFF4wH8qFdP/view",
    //     repo: "https://github.com/smturner/e_commerce_back_end",
    //     description: 'JavaScript, MySQL, Node.js, Express.js'
    // },
    // {
    //     name: "Social Network API",
    //     link: "https://drive.google.com/file/d/1zoPGK31Xf9Lwx1LipRu_gv55rJ0EWalg/view",
    //     repo: "https://github.com/smturner/social_network_api",
    //     description: 'JavaScript, MongoDB, Node.js, Express.js'
    // },
    // {
    //     name: "SQL Employoee Manager",
    //     link: "https://drive.google.com/file/d/1zons6c9fng-Y4GT0JWNg3P7QPKliBauB/view",
    //     repo: "https://github.com/smturner/SQL_employee_manager",
    //     description: 'JavaScript, MySQL, Node.js, Express.js'
    // },
    // {
    //     name: "Password Generator",
    //     link: "https://smturner.github.io/password_generator/",
    //     repo: "https://github.com/smturner/password_generator",
    //     description: 'HTML, CSS, JavaScript'
    // },
    {
        name: "Code Quiz",
        link: "https://smturner.github.io/code_quiz/",
        repo: "https://github.com/smturner/code_quiz",
        description: 'HTML, CSS, JavaScript, JQuery'
    }, 
    {
        name: "Readme Generator",
        link: "https://drive.google.com/file/d/1YCMTSfqpxSXkJn-dobnXGZQzGiM1APA4/view",
        repo: "https://github.com/smturner/readme_generator",
        description: 'JavaScript, MySQL, Node.js, Express.js Inquirer'
    },
]);

return(
    <section className="portfolio">
    <div className="container">
        <div className="row">
            <div className="col-lg-10 mx-auto mb-4">
                <h1 className="text-center" id="portfolio">Portfolio</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                    {myProjects.map((project,index) => (
                        <ProjectsPage
                        project= {project}
                        key={"project"+ index}/>
                    ))}
                </div>

           
            </div>
        </div>
    </div>
</section> 
)
}

export default Projects