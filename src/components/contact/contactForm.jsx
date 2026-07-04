import React, { useState } from 'react';

import "./styles/contactForm.css";

const ContactForm = () => {
    const[formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    })

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const  { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            const baseUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${baseUrl}/api/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ fullName: '', email: '', subject: '', message: '' });
            }
            else {
                const errData = await repsonse.json();
                setStatus(`Error: ${errData.error || 'Failed to send mssage.'}`);
            }
        }
        catch (err) {
            setStatus('Network error. Could not connect to server.');
        }
    }

    return (
        <>
            <i><span className='required-star'>*</span> Indicates required field</i><br/><br/>

            <form onSubmit={(e) => handleSubmit(e)} className="contact-form">
                <div className="field-container">
                    <label htmlFor="">Full Name <span className='required-star'>*</span></label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} id="fullName" required/>
                </div>
                <div className="field-container">
                    <label htmlFor="">Email <span className='required-star'>*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" required/>
                </div>
                <div className="field-container">
                    <label htmlFor="">Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} id="subject" />
                </div>
                <div className="field-container">
                    <label htmlFor="">Message <span className='required-star'>*</span></label>
                    <textarea name="message" value={formData.message} onChange={handleChange} id="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </>
    )
}

export default ContactForm;