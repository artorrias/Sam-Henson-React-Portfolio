//require navigation
import React, { useState } from 'react';
import Navigation from './Navigation';

function Header() {

    const [activeTab, setTab] = useState("About");

    const handleAbout = () => {
        setTab("About");
    };

    const handleResume = () => {
        setTab("Resume");
    };

    const handleProjects = () => {
        setTab("Projects");
    };

    const handleContact = () => {
        setTab("Contact");
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className='navbar-brand'>Sam Henson</h1>
                <div className="navbar-nav">
                    <p className={activeTab==="About" ? "nav-item nav-link active" : "nav-item nav-link"} onClick={handleAbout}>About Me</p>
                    <p className={activeTab==="Resume" ? "nav-item nav-link active" : "nav-item nav-link"} onClick={handleResume}>Resume</p>
                    <p className={activeTab==="Projects" ? "nav-item nav-link active" : "nav-item nav-link"} onClick={handleProjects}>Projects</p>
                    <p className={activeTab==="Contact Me" ? "nav-item nav-link active" : "nav-item nav-link"} onClick={handleContact}>Resume</p>
                </div>
            </nav>
            {activeTab === "About" ? <Navigation section="About"/> : activeTab==="Resume" ? <Navigation section="Resume"/> : activeTab==="Contact" ? <Navigation section="Projects"/> : <Navigation section="Projects"/>} 
        </div>
    )
}
export default Header;