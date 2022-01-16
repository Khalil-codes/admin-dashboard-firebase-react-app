import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className="register-container">
            <h3>Register User</h3>
            <small>
                As of now on clicking button user will be navigated to login
            </small>
            <button
                className="register-button"
                onClick={() => navigate('/auth/login')}>
                Register
            </button>
        </div>
    );
};

export default Register;
