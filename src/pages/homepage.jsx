import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar.jsx";
import Footer from "../components/common/footer.jsx";
import ProjectsList from "../components/projects/projectsList.jsx";
import ContactForm from "../components/contact/contactForm.jsx";

import INFO from "../data/user.js";
import Portrait from "../assets/portrait.webp";

import "./styles/homepage.css";

const Homepage = () => {
    return (
        <>
            <div className="page-content">
                <div className="header-container">
                    <div className="header-background">
                        <h1>CHEVISETH WADDHANAYU</h1>
                    </div>
                </div>
                <NavBar/>
                <div className="hero-container" id="home">
                    <div className="hero-background">
                        <div className="hero-overlay">
                            <div className="hero-text">
                                <h2>{INFO.main.title}</h2><br/>
                                <button><a href="#projects">View My Projects</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container about-container"} id="about">
                    <h2>ABOUT</h2><br/>
                    <div className="about-background">
                        <img src={Portrait} alt="nayu-portrait" className="portrait-img"/>
                        <p>{INFO.about.description}</p>
                    </div>
                </div>
                <div className={"container projects-container"} id="projects">
                    <h2>PROJECTS</h2><br/>
                    <div className="projects-background">
                        <ProjectsList/>
                    </div>
                </div>
                <div className={"container contact-container"} id="contact">
                    <div className="contact-info-container">
                        <h2>CONTACT INFO</h2><br/>
                        <div className="contact-info-background">
                            <p>waddhnayucheviseth@gmail.com</p>
                            <a href={INFO.links.linkedin}>LinkedIn</a>
                            <a href={INFO.links.github}>GitHub</a>
                        </div>
                    </div>
                    <div className="inquiries-container">
                        <h2>INQUIRIES</h2><br/>
                        <div className="inquiries-background">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Homepage;