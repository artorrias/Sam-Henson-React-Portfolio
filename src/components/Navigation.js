import React, { useState } from 'react';
import Project from './Project';
import Footer from './Footer';

function Navigation(props) {
    //use state set which page we're on
    const [nav, setNav] = useState(props.section);


    //function that checks the page and returns code depending on page
    if (nav === 'About') {
        return (
            <div>
                <p>Sam Henson</p>
                <p>insert image</p>
            </div>
        );
    }
    else if (nav==='Resume') {
        return (
            <div>
                <p>enter resume here</p>
            </div>
        );
    }
}

export default Navigation;


