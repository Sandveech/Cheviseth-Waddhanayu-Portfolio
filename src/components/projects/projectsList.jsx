import React, { useState, useEffect } from 'react';

import ProjectCard from "./projectCard";

import "./styles/projectsList.css";

const ProjectsList = ({ category }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_URL;
                const response = await fetch(`${baseUrl}/api/projects?category=${category.toLowerCase()}`);
               
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${category} projects.`);
                }

                const data = await response.json();
                setProjects(data);
            }
            catch (err) {
                setError(err.message || 'Something went wrong');
            }
            finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [])

    if (loading) { return <p>Loading projects...</p>; }
    if (error) { return <p>Error: {error}</p> }
    if (projects.length === 0) { return <p>No projects found.</p> }

    return (
        <>
            <div className="projects-list-container">
                {projects.map((item) => (
                    <ProjectCard key={item._id} project={item}/>
                ))}
            </div>
        </>
    )
}

export default ProjectsList;