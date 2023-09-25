//require navigation
import React, { useState } from 'react';
import Navigation from './Navigation';
import { act } from 'react-dom/test-utils';

function Header() {

    const [activeTab, setTab] = useState("About");

    const handleAbout = () => {
        setTab("About");
    };

    const handleResume = () => {
        setTab("Resume");
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className='navbar-brand'>Sam Henson</h1>
                <div className="navbar-nav">
                    <p className={activeTab==="About" ? "nav-item nav-link active" : "nav-item nav-link"} onClick={handleAbout}>About Me</p>
                    <p className={activeTab==="Resume" ? "nav-item nav-link active" : "nav-item nav-link"} onClick={handleResume}>Resume</p>
                </div>
            </nav>
            {activeTab === "About" ? <Navigation section="About"/> : <Navigation section="Resume"/>} 
        </div>
    )
}
export default Header;