import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar.jsx";
import Footer from "../components/common/footer.jsx";

const Contact = () => {
    return (
        <>
            <div className="page-content">
                <NavBar/>
                <Footer/>
            </div>
        </>
    )
}

export default Contact;