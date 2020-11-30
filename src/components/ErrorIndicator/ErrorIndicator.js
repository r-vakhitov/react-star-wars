import React from 'react';
import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img width="200" height="218" src={icon} alt="error image" />
            <span className="boom">BOOM!</span>
            <span>
                something gone terribly wrong
            </span>
            <span>
                ( but we already sent droids to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;
