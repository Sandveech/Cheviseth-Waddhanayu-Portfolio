import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar.jsx";
import Footer from "../components/common/footer.jsx";

const About = () => {
    return (
        <>
            <div className="page-content">
                <NavBar active="about"/>                
                <Footer/>
            </div>
        </>
    )
}

export default About;