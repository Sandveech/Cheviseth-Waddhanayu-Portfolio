import React, { useState, useEffect } from 'react';

import NavBar from "../components/common/navBar.jsx";
import Footer from "../components/common/footer.jsx";
import ProjectForm from "../components/admin/projectForm.jsx";

import "./styles/adminPage.css";

const AdminPage = () => {
    const [passwordInput, setPasswordInput] = useState('');
    const [token, setToken] = useState(() => localStorage.getItem('authToken'));
    const [error, setError] = useState('');
    
    const [projects, setProjects] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    const baseUrl = import.meta.env.VITE_API_URL;

    const fetchDashboardProjects = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/projects`);
            if (response.ok) {
                const data = await response.json();
                setProjects(data);
            }
        } catch (err) {
            console.error("Could not fetch dashboard list", err);
        }
    };

    useEffect(() => {
        if (token) {
            fetchDashboardProjects();
        }
    }, [token]);

    useEffect(() => {
        const savedToken = localStorage.getItem('authToken');
        if (savedToken) { setToken(savedToken); }
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch(`${baseUrl}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: passwordInput })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                localStorage.setItem('authToken', data.token);
                setToken(data.token);
            } else {
                setError(data.error || 'Authentication failed');
            }
        } catch (err) {
            setError('Could not connect to the authentication server.');
        }
    };

    const handleEditClick = (project) => {
        setEditingProject(project);
        setShowForm(true);
    };

    const handleDeleteClick = async (projectId) => {
        if (!window.confirm("Are you absolutely sure you want to delete this project?")) { return; }

        try {
            const response = await fetch(`${baseUrl}/api/projects/${projectId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                setProjects(projects.filter(p => p._id !== projectId));
            } else {
                const errData = await response.json();
                alert(`Error: ${errData.error || 'Failed to delete project.'}`);
            }
        } catch (err) {
            alert("Network error. Could not complete deletion request.");
        }
    };

    const handleFormSuccess = () => {
        setShowForm(false);
        setEditingProject(null);
        fetchDashboardProjects();
    };

    if (token) {
        return (
            <>
                <NavBar/>
                <div className="container admin-dashboard">
                    <div className="dashboard-header">
                        <h2>Project Management</h2><br />
                    </div>

                    {!showForm && (
                        <button className="add-btn" onClick={() => { setEditingProject(null); setShowForm(true); }}>
                            New Project
                        </button>
                    )}

                    {showForm ? (
                        <div className="form-wrapper">
                            <button className="cancel-btn" onClick={() => { setShowForm(false); setEditingProject(null); }}>
                                Back to Dashboard List
                            </button>
                            <ProjectForm 
                                adminPassword={token} 
                                projectToEdit={editingProject} 
                                onSuccess={handleFormSuccess} 
                            />
                        </div>
                    ) : (
                        <div className="management-list">
                            {projects.length === 0 ? (
                                <p className="empty-msg">No projects found.</p>
                            ) : (
                                projects.map((project) => (
                                    <div key={project._id} className="management-row">
                                        <span className="row-title">{project.title}</span>
                                        <div className="row-actions">
                                            <button className="edit-btn" onClick={() => handleEditClick(project)}>Edit</button>
                                            <button className="delete-btn" onClick={() => handleDeleteClick(project._id)}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
                <Footer/>
            </>
        )
    }

    return (
        <>
            <NavBar/>
            <div className="container login-container">
                <h2>Password Required</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <input type="password" placeholder="Enter Admin Password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} required/>
                    <button type="submit">Login</button>
                </form>
                {error && <p style={{ color:'red', marginTop:'10px' }}>{error}</p>}
            </div>
            <Footer/>
        </>
    )
}

export default AdminPage;