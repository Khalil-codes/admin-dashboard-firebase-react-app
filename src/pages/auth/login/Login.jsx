import React from 'react';
import './Login.css';

import Button from '../../../components/Button';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/loginSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginHandler = () => {
        dispatch(loginUser());
        navigate('/');
    };
    return (
        <div className="login-container">
            <h3>Login User</h3>
            <small>As of now on clicking button user will be logged in</small>
            <Button fn={loginHandler}>Login</Button>
            <Button mode="dark" fn={() => navigate('/auth/register')}>
                Register Yourself
            </Button>
        </div>
    );
};

export default Login;
