import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = () => {
    return (
        <>
            <nav className="nav-container">
                <div className="navbar">
                    <div className="nav-background">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;