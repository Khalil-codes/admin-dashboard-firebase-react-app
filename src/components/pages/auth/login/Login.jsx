import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../../redux/loginSlice';
import './Login.css';
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
            <button className="login-button" onClick={loginHandler}>
                Login
            </button>
            <button
                onClick={() => navigate('/auth/register')}
                className="login-links">
                Register Yourself
            </button>
        </div>
    );
};

export default Login;
