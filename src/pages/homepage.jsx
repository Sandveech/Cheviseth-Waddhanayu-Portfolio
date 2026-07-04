import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/common/navBar.jsx";
import Footer from "../components/common/footer.jsx";
import ContactForm from "../components/contact/contactForm.jsx";

import INFO from "../data/user.js";
import Portrait from "../assets/portrait.webp";

import "./styles/homepage.css";

const Homepage = () => {
    return (
        <>
            <div className="page-content">
                <NavBar/>
                <div className="hero-container" id="home">
                    <div className="hero-background">
                        <div className="hero-overlay">
                            <div className="hero-text">
                                <h2>{INFO.main.title}</h2><br/>
                                <button><Link to="/projects">View My Projects</Link></button>
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
                <div className={"container highlights-container"} id="highlights">
                    <h2>HIGHLIGHTS</h2><br/>
                    <div className="highlights-background">
                        <p>meow</p>
                        <p>meow</p>
                        <p>meow</p>
                        <p>meow</p>
                    </div>
                </div>
                <div className={"container contact-container"} id="contact">
                    <div className="contact-info-container">
                        <h2>CONTACT INFO</h2><br/>
                        <ul className="contact-info-background">
                            <li>
                                <p>{INFO.main.email}</p>
                            </li>
                            <li>
                                <a href={INFO.links.linkedin}>LinkedIn</a>
                            </li>
                            <li>
                                <a href={INFO.links.github}>GitHub</a>
                            </li>
                        </ul>
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