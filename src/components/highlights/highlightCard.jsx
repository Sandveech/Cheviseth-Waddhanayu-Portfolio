import React from 'react';

import TechnologyTag from '../projects/technologyTag';

import "./styles/highlightCard.css";

const HighlightCard = ({ project }) => {
    if (!project.highlighted) { return null; }

    return (
        <>
            <div className='card-container'>
                <img src={project.imageUrl} alt={project.title} className="cover-image" />
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
                </div>
            </div>
        </>
    )
}

export default HighlightCard;