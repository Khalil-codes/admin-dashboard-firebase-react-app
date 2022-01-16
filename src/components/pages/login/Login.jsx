import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/loginSlice';
import './Login.css';

const Login = () => {
    const dispatch = useDispatch();
    const loginHandler = () => {
        dispatch(loginUser());
    };
    return (
        <div className="login-page">
            Login Page
            <button onClick={loginHandler}>Login user</button>
        </div>
    );
};

export default Login;
