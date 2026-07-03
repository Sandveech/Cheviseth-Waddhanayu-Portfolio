import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar.jsx";
import Footer from "../components/common/footer.jsx";

import Portrait from "../assets/portrait.webp";

import "./styles/homepage.css";

const Homepage = () => {
    return (
        <>
            <div className="page-content">
                <NavBar active="home"/>
                <div className="hero-container">
                    <div className="hero-background">
                        <div className="hero-overlay">
                            <div className="hero-text">
                                <h1>Hi, I am Cheviseth Waddhanayu</h1>
                                <h2>Software Engineering Student</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container projects-container"}>
                    <div className="projects-background">
                        <p>meow</p>
                    </div>
                </div>
                <div className={"container profile-container"}>
                    <div className="profile-background">
                        <img src={Portrait} alt="nayu-portrait" className="portrait-img"/>
                        <p>Hi! I'm Nayu, a Cambodia-based programmer. I have love combining technicality and creativity through the development of video games.</p>
                    </div>
                </div>
                <div className={"container socials-container"}>
                    <div className="socials-background">
                        <p>meow</p>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Homepage;