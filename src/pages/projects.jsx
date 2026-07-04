import React, { useState } from 'react';

import NavBar from "../components/common/navBar.jsx";
import Footer from "../components/common/footer.jsx";

import ProjectsList from "../components/projects/projectsList.jsx";

import "./styles/projects.css";

const Projects = () => {
    return (
        <>
            <NavBar/>
                <div className={"container projects-container"} id="highlights">
                    <div>
                        <h2>STUDIO PROJECTS</h2><br/>
                        <div className="projects-background">
                            <ProjectsList category="studio"/>
                        </div>
                    </div>
                    <div>
                        <h2>PERSONAL PROJECTS</h2><br/>
                        <div className="projects-background">
                            <ProjectsList category="personal"/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Projects;