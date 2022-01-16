import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Button from '../../../components/Button';

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className="register-container">
            <h3>Register User</h3>
            <small>
                As of now on clicking button user will be navigated to login
            </small>
            <Button fn={() => navigate('/auth/login')}>Register</Button>
        </div>
    );
};

export default Register;
