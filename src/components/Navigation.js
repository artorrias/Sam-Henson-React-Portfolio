import React, { useState } from 'react';
import Project from './Project';
import Footer from './Footer';

function Navigation(props) {
    //use state set which page we're on
    let variable = props.section;


    //function that checks the page and returns code depending on page
    return (
        <div className="outlet"> 
        {variable==="About" ?
            (
                <div>
                    <p>about</p>
                </div>
            )
        : (
            <div>
                <p>Resume</p>
            </div>
        )}
        </div>
    );
};

export default Navigation;


