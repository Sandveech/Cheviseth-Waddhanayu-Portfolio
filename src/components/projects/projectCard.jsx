import React from 'react';

import TechnologyTag from './technologyTag';

import "./styles/projectCard.css";

const ProjectCard = ({ project }) => {
    if (!project?.featured) { return null; }

    return (
        <>
            <div className='card-container'>
                {project.imageUrl && (
                    <img src={project.imageUrl} alt={project.title} className="cover-image" />
                )}
                <div className="contents">
                    <div className="brief">
                        <h3 className="project-title">
                            {project.liveUrl ? (
                                <a href={project.liveUrl}>{project.title}</a>) : (project.title
                            )}
                        </h3><br/>
                        {project.date && (
                            <p className="date">{project.date}</p>
                        )}
                        {project.description && (
                            <div>
                                <h4>Description</h4>
                                <p>{project.description}</p>
                            </div>
                        )}
                    </div>
                    {project.technologies.length > 0 && (
                        <div className="technologies">
                            <h4>Technologies</h4>
                            <div className="technology-tags-container">
                                {project.technologies.map((item, index) => (
                                    <TechnologyTag key={index} technology={item}/>
                                ))}
                            </div>
                        </div>
                    )}
                    {project.githubUrl && (
                        <div className="github">
                           <a href={project.githubUrl}>Project GitHub</a>
                        </div>
                    )}
                    {project.contribution && (
                        <div className="contribution">
                            <h4>Contribution</h4>
                            <p>{project.contribution}</p>
                        </div>
                    )}
                    {project.problem && (
                        <div className="problem">
                            <h4>Problem</h4>
                            <p>{project.problem}</p>
                        </div>
                    )}
                    {project.challenges && (
                        <div className="challenges">
                            <h4>Challenges</h4>
                            <p>{project.challenges}</p>
                        </div>
                    )}
                    {project.lessonsLearned && (
                        <div className="lessons-learned">
                            <h4>Lessons Learned</h4>
                            <p>{project.lessonsLearned}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProjectCard;