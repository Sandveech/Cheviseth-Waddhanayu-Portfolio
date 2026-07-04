import React, { useState, useEffect } from 'react';

import HighlightCard from "./highlightCard";

import "./styles/highlightsList.css";

const HighlightsList = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_URL;
                const response = await fetch(`${baseUrl}/api/projects`);
               
                if (!response.ok) {
                    throw new Error(`Failed to fetch highlighted projects.`);
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
            <div className="highlights-list-container">
                {projects.map((item) => (
                    <HighlightCard key={item._id} project={item}/>
                ))}
            </div>
        </>
    )
}

export default HighlightsList;