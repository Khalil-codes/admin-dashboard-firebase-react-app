import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { useSelector } from 'react-redux';
import TopBar from './topbar/TopBar';
import SideBar from './sidebar/SideBar';
const Dashboard = () => {
    const isAuthorized = useSelector((state) => state.isAuthorized);
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthorized) navigate('/');
        else navigate('/auth/login');
    }, [isAuthorized]);
    return (
        <>
            <TopBar />
            <div className="container">
                <SideBar />
                <Outlet />
            </div>
        </>
    );
};

export default Dashboard;
