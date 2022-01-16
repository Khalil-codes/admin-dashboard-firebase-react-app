import React from 'react';
import './TopBar.css';

import { Logout, Settings } from '@mui/icons-material';
const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="top-left">
                    <span className="logo">Adminy</span>
                </div>
                <div className="top-right">
                    <div className="topbar-welcome-text">Welcome, Khalil</div>
                    <div className="topbar-icons-container">
                        <div className="topbar-icon-container">
                            <Settings className="topbar-icon" />
                        </div>
                        <div className="topbar-icon-container">
                            <Logout className="topbar-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
