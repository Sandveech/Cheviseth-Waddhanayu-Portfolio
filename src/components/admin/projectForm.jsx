import React, { useState, useEffect } from "react";
import "./styles/projectForm.css";

const ProjectForm = ({ adminPassword, projectToEdit, onSuccess }) => {
    const [formData, setFormData] = useState({
        title: '', date: '', category: '', description: '', problem: '',
        technologies: '', imageUrl: '', githubUrl: '', liveUrl: '',
        contribution: '', challenges: '', lessonsLearned: '', featured: false, highlighted: false
    });

    const [status, setStatus] = useState('');

    useEffect(() => {
        if (projectToEdit) {
            setFormData({
                title: projectToEdit.title || '',
                date: projectToEdit.date || '',
                category: projectToEdit.category || '',
                description: projectToEdit.description || '',
                problem: projectToEdit.problem || '',
                technologies: Array.isArray(projectToEdit.technologies) ? projectToEdit.technologies.join(', ') : '',
                imageUrl: projectToEdit.imageUrl || '',
                githubUrl: projectToEdit.githubUrl || '',
                liveUrl: projectToEdit.liveUrl || '',
                contribution: projectToEdit.contribution || '',
                challenges: projectToEdit.challenges || '',
                lessonsLearned: projectToEdit.lessonsLearned || '',
                featured: !!projectToEdit.featured,
                highlighted: !!projectToEdit.highlighted
            });
        }
    }, [projectToEdit]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting updates...');

        const processedData = {
            ...formData,
            technologies: typeof formData.technologies === 'string' && formData.technologies.trim() !== '' 
                ? formData.technologies.split(',').map((tech) => tech.trim()).filter(Boolean) 
                : []
        };

        try {
            const baseUrl = import.meta.env.VITE_API_URL;
            
            const url = projectToEdit ? `${baseUrl}/api/projects/${projectToEdit._id}` : `${baseUrl}/api/projects`;
                
            const method = projectToEdit ? 'PATCH' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${adminPassword}`
                },
                body: JSON.stringify(processedData)
            });

            if (response.ok) {
                setStatus(projectToEdit ? 'Project updated successfully!' : 'Project added successfully!');
                
                if (!projectToEdit) {
                    setFormData({
                        title: '', date: '', category: '', description: '', problem: '', 
                        technologies: '', imageUrl: '', githubUrl: '', liveUrl: '', contribution: '',
                        challenges: '', lessonsLearned: '', featured: false
                    });
                }
                
                if (onSuccess) {
                    setTimeout(() => onSuccess(), 1000);
                }
            } else {
                const errData = await response.json();

                if (response.status === 401 || response.status === 403) {
                    localStorage.removeItem('authToken');
                    alert('Your session has expired. Please log in again.');
                    window.location.reload();
                }
                else {
                    setStatus(`Error: ${errData.error || 'Failed to complete action.'}`);
                }
            }
        } catch (error) {
            setStatus('Network error. Could not connect to server.');
        }
    }

    return (
        <div className="project-form-container">
            <h2>{projectToEdit ? `Edit Project: ${projectToEdit.title}` : 'Add New Portfolio Project'}</h2>
            <i><span className='required-star'>*</span> Indicates required field</i><br/><br/>
            <form onSubmit={handleSubmit} className="project-form">
                <div>
                    <label>Project Title <span className='required-star'>*</span></label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required id="title" />
                </div>
                <div>
                    <label>Category <span className='required-star'>*</span></label>
                    <input type="text" name="category" value={formData.category} onChange={handleChange} required id="category" />
                </div>
                <div>
                    <label>Description</label>
                    <textarea type="text" name="description" value={formData.description} onChange={handleChange} id="description" />
                </div>
                <div>
                    <label>Date</label>
                    <input type="text" name="date" value={formData.date} onChange={handleChange} id="date" />
                </div>
                <div>
                    <label>The Problem</label>
                    <input type="text" name="problem" value={formData.problem} onChange={handleChange} id="problem" />
                </div>
                <div>
                    <label>Technologies</label>
                    <input type="text" name="technologies" value={formData.technologies} onChange={handleChange} id="technologies" placeholder="React, Node.js, Express" />
                </div>
                <div>
                    <label>Image URL</label>
                    <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} id="imageUrl" />
                </div>
                <div>
                    <label>GitHub URL</label>
                    <input type="text" name="githubUrl" value={formData.githubUrl} onChange={handleChange} id="githubUrl" />
                </div>
                <div>
                    <label>Live Site URL</label>
                    <input type="text" name="liveUrl" value={formData.liveUrl} onChange={handleChange} id="liveUrl" />
                </div>
                <div>
                    <label>Your Contribution</label>
                    <textarea name="contribution" value={formData.contribution} onChange={handleChange} id="contribution"></textarea>
                </div>
                <div>
                    <label>Challenges Faced</label>
                    <textarea name="challenges" value={formData.challenges} onChange={handleChange} id="challenges"></textarea>
                </div>
                <div>
                    <label>Lessons Learned</label>
                    <textarea name="lessonsLearned" value={formData.lessonsLearned} onChange={handleChange} id="lessonsLearned"></textarea>
                </div>
                <div className="checkbox-form">
                    <input type="checkbox" name="featured" id="featured" checked={formData.featured} onChange={handleChange}/>
                    <label htmlFor="featured">Feature this project</label>
                </div>
                <div className="checkbox-form">
                    <input type="checkbox" name="highlighted" id="highlighted" checked={formData.highlighted} onChange={handleChange}/>
                    <label htmlFor="highlighted">Highlight this project</label>
                </div>
                <button type="submit">{projectToEdit ? 'Update Project' : 'Save Project to Database'}</button>
                {status && <p style={{ fontWeight:'bold', marginTop: '15px' }}>{status}</p>}
            </form>
        </div>
    );
};

export default ProjectForm;