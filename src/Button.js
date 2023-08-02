// Button.js
import React from 'react';

const Button = ({ onClick, color, text }) => {
    const buttonStyle = {
        backgroundColor: color || 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
