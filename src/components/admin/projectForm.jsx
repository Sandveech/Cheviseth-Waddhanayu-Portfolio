import React, { useState, useEffect } from "react";

const ProjectForm = ({ adminPassword }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        problem: '',
        technologies: '',
        imageUrl: '',
        githubUrl: '',
        liveUrl: '',
        contribution: '',
        challenges: '',
        lessonsLearned: '',
        featured: false
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        const processedData = {
            ...formData,
            technologies: typeof formData.technologies === 'string' && formData.technologies.trim() !== '' ? formData.technologies.split(',').map((tech) => tech.trim()).filter(Boolean) : []
        }

        try {
            const baseUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${baseUrl}/api/projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-password': adminPassword
                },
                body: JSON.stringify(processedData)
            });

            if (response.ok) {
                setStatus('Project added successfully!');

                setFormData({
                    title: '', description: '', problem: '', technologies: '',
                    imageUrl: '', githubUrl: '', liveUrl: '', contribution: '',
                    challenges: '', lessonsLearned: '', featured: false
                });
            }
            else {
                const errData = await response.json();
                setStatus(`Error: ${errData.error || 'Failed to save project.'}`);
            }
        }
        catch (error) {
            setStatus('Network error. Could not connect to server.');
        }
    }

    return (
        <>
            <div>
                <h2>Add new Portfolio Project</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label htmlFor="">Project Title *</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} required  id="title" />
                    </div>
                    <div>
                        <label htmlFor="">Description</label>
                        <input type="text" name="description" value={formData.description} onChange={handleChange} id="description" />
                    </div>
                    <div>
                        <label htmlFor="">The Problem</label>
                        <input type="text" name="problem" value={formData.problem} onChange={handleChange}  id="problem" />
                    </div>
                    <div>
                        <label htmlFor="">Technologies</label>
                        <input type="text" name="technologies" value={formData.technologies} onChange={handleChange} id="technologies" />
                    </div>
                    <div>
                        <label htmlFor="">Image URL</label>
                        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} id="imageUrl" />
                    </div>
                    <div>
                        <label htmlFor="">GitHub URL</label>
                        <input type="text" name="githubUrl" value={formData.githubUrl} onChange={handleChange} id="githubUrl" />
                    </div>
                    <div>
                        <label htmlFor="">Live Site URL</label>
                        <input type="text" name="liveUrl" value={formData.liveUrl} onChange={handleChange} id="liveUrl" />
                    </div>
                    <div>
                        <label htmlFor="">Your Contribution</label>
                        <textarea name="contribution" value={formData.contribution} onChange={handleChange} id="contribution"></textarea>
                    </div>
                    <div>
                        <label htmlFor="">Challenges Faced</label>
                        <textarea name="challenges" value={formData.challenges} onChange={handleChange} id="challenges"></textarea>
                    </div>
                    <div>
                        <label htmlFor="">Lessons Learned</label>
                        <textarea name="lessonsLearned" value={formData.lessonsLearned} onChange={handleChange} id="lessonsLearned"></textarea>
                    </div>
                    <div>
                        <input type="checkbox" name="featured" id="featured" checked={formData.featured} onChange={handleChange}/>
                        <label htmlFor="featured">Feature this project</label>
                    </div>
                    <button type="submit">Save Project to Database</button>
                    {status && <p style={{ fontWeight:'bold', marginTop: '15px' }}>{status}</p>}
                </form>
            </div>
        </>
    )
}

export default ProjectForm;