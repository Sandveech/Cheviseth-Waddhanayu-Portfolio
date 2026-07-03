import React, { useState } from 'react';

import Footer from "../components/common/footer.jsx";

import ProjectForm from "../components/admin/projectForm.jsx";

const AdminPage = () => {
    const [passwordInput, setPasswordInput] = useState('');
    const [token, setToken] = useState(null);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        const baseUrl = import.meta.env.VITE_API_URL;

        try {
            const response = await fetch(`${baseUrl}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: passwordInput })
            })

            const data = await response.json();

            if (response.ok && data.success) {
                setToken(data.token);
            }
            else {
                setError(data.error || 'Authentication failed');
            }
        }
        catch (err) {
            setError('Could not connect to the authentication server.');
        }
    };

    if (token) {
        return (
            <>
                <ProjectForm adminPassword={token}/>
                <Footer/>
            </>
        )
    }

    return (
        <>
            <div>
                <h2>Admin Authentication Required</h2>
                <form onSubmit={handleLogin}>
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