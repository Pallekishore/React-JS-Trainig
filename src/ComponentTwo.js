// ComponentTwo.js
import React from 'react';
import Button from './Button';

const ComponentTwo = () => {
    const handleClick = () => {
        alert('Button in ComponentTwo clicked!');
    };

    return (
        <div>
            <h2>Component Two</h2>
            <Button onClick={handleClick} color="green" text="Second Component" />
        </div>
    );
};

export default ComponentTwo;

