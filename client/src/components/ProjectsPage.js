import React from 'react';
import '../styles/Projects.css'

function ProjectsPage ({ project }) {
    const {name, link, repo, description } = project
    console.log(project)
    
    return(
<div className="col-lg-6">
		<div className="portfolio-box" key={name}>
        <a href={link} className="project-category text-faded" target="_blank">{(name)}</a>{' '}
				<a href={repo} className="project-category text-faded" target="_blank">
						<i className="fab fa-github"></i>
					</a>
			<img
				src={require(`../assets/image/${name}.jpg`)}
				alt={(name)}
				className="img-fluid"
			/>
			<div className="portfolio-box-caption">
				<div className="portfolio-box-caption-content">
               
					
					
					
					<p className="project-name">{description}</p>
				</div>
			</div>
		</div>
		</div>
    )
}

export default ProjectsPage;
