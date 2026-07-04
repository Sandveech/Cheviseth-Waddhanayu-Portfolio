import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./styles/navBar.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div className="header-container">
                <div className="header-background">
                    <h1>CHEVISETH WADDHANAYU</h1>
                </div>
            </div>
            <nav className="nav-container">
                <div className="navbar">
                    <div className="nav-background">
                        <p className="burger-menu" onClick={toggleMenu}>
                            {isOpen ? "✕" : "☰"}
                        </p>
                        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
                            <li className="nav-item">
                                <HashLink smooth to="/#about">About</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink smooth to="/#highlights">Highlights</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink smooth to="/#contact">Contact</HashLink>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;