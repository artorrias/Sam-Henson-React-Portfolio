import React, { useState } from 'react';

function Project(props) {
    const [image, setImage] = useState(props.image);
    const [title, setTitle] = useState(props.title);

    return (
        <div className='card'>
            <img className='card-img-top' src={image}/>
            <div className='card-body'>
                <p className='card-text'>{title}</p>
            </div>
        </div>
    );
}

export default Project;