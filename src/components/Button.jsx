import React from 'react';
import './Button.css';

const Button = ({ type, children, mode, fn }) => {
    return (
        <button type={type} className={`btn-${mode}`} onClick={fn}>
            {children}
        </button>
    );
};
Button.defaultProps = {
    type: 'button',
    mode: 'light',
    fn: () => {
        return;
    },
};

export default Button;
