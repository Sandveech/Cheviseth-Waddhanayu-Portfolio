import React from 'react';

import "./styles/projectCard.css";

const ProjectCard = ({ project }) => {
    return (
        <>
            <div className='card-container'>
                <img src={project.imageUrl} alt={project.title} className="cover-image" />
                <div className="contents">
                    <div className="brief">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                    <div className="contribution">
                        <h4>Contribution</h4>
                        <p>{project.contribution}</p>
                    </div>
                    <p>{project.technologies}</p>
                    <div>
                        <h4>Problem</h4>
                        <p>{project.problem}</p>
                    </div>
                    <div className="challenges">
                        <h4>Challenges</h4>
                        <p>{project.challenges}</p>
                    </div>
                    <div className="lessons-learned">
                        <h4>Lessons Learned</h4>
                        <p>{project.lessonsLearned}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;