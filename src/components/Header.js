//require navigation
import React, { useState } from 'react';
import Navigation from './Navigation';

function Header() {
    let [category, setCategory] = useState('About');

    const clickHandler = (e) => {
        e.preventDefault();

        const { target } = e;
        const navType = target.type;

        if (navType != category) {
            setCategory(navType);
        }

    };

    return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <p className="navbar-brand">Sam Henson</p>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <p className="nav-item nav-link active" onClick={clickHandler}>About</p>
                                <p className="nav-item nav-link" onClick={clickHandler}>Resume</p>
                            </div>
                        </div>
                    </nav>
                    <Navigation 
                        section={category}>
                    </Navigation>
                </div>
    );
}

export default Header;