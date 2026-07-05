import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/common/navBar.jsx";
import Footer from "../components/common/footer.jsx";

import "./styles/404.css";

const NotFound = () => {
    return (
        <>
            <div className="page-content">
                <NavBar/>
                <div className="container not-found-container">
                    <h1>404: PAGE NOT FOUND</h1>
                    <Link to="/">Return home</Link>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default NotFound;