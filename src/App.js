import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/dashboard/home/Home';
import Users from './pages/dashboard/users/Users';
import Orders from './pages/dashboard/orders/Orders';
import Products from './pages/dashboard/products/Products';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Auth from './pages/auth/Auth';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<Home />} />
                    <Route path="users" element={<Users />} />
                    <Route path="products" element={<Products />} />
                    <Route path="orders" element={<Orders />} />
                </Route>
                <Route path="auth" element={<Auth />}>
                    <Route index path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </Router>
    );
}
export default App;
