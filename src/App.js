import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SideBar from './components/sidebar/SideBar';
import TopBar from './components/topbar/TopBar';
import Home from './components/pages/home/Home';
import Users from './components/pages/users/Users';
import Orders from './components/pages/orders/Orders';
import Products from './components/pages/products/Products';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import './App.css';

import { useSelector } from 'react-redux';

function App() {
    const isAuthorized = useSelector((state) => state.isAuthorized);
    console.log(isAuthorized);
    // return (
    //     <Router>
    //         {!isAuthorized ? (
    //             <Routes>
    //                 <Route index path="login" element={<Login />} />
    //                 <Route path="register" element={<Register />} />
    //             </Routes>
    //         ) : (
    //             <>
    //                 <TopBar />
    //                 <div className="container">
    //                     <SideBar />
    //                     <Routes>
    //                         <Route path="/" element={<Home />} />
    //                         <Route path="users" element={<Users />} />
    //                         <Route path="products" element={<Products />} />
    //                         <Route path="orders" element={<Orders />} />
    //                     </Routes>
    //                 </div>
    //             </>
    //         )}
    //     </Router>
    // );
    return (
        <Router>
            <TopBar />
            <div className="container">
                <SideBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="users" element={<Users />} />
                    <Route path="products" element={<Products />} />
                    <Route path="orders" element={<Orders />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
