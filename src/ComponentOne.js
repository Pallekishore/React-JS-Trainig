// ComponentOne.js
import React from 'react';
import Button from './Button';

const ComponentOne = () => {
    const handleClick = () => {
        alert('Button in ComponentOne clicked!');
    };

    return (
        <div>
            <h2>Component One</h2>
            <Button onClick={handleClick} text="Second Component" />
        </div>
    );
};

export default ComponentOne;
