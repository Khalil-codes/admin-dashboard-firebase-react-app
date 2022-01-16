import React from 'react';
import './SideBar.css';

import SidebarMenu from './SidebarMenu';
const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <SidebarMenu />
            </div>
        </div>
    );
};

export default SideBar;
