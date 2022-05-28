import React from 'react';
import '../styles/Projects.css'

function ProjectsPage({ project }) {
    const { name, link, repo, description } = project
    console.log(project)

    return (
//         <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
        <div className="card col-lg-4">
            <img
                    src={require(`../assets/image/${name}.jpg`)}
                    alt={(name)}
                    className="img-fluid card-img-top"/>
            <div className="portfolio-box" key={name}>
                <a href={link} id="projectName" className="project-category text-faded" target="_blank">{(name)}</a>{' '}
                <br/>
                <a id="icon" href={repo} className="project-category text-faded title" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <h5 className="project-description">{description}</h5>
                
                <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;
