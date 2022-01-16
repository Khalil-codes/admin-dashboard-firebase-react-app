import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/dashboard/home/Home';
import Users from './components/pages/dashboard/users/Users';
import Orders from './components/pages/dashboard/orders/Orders';
import Products from './components/pages/dashboard/products/Products';
import Login from './components/pages/auth/login/Login';
import Register from './components/pages/auth/register/Register';
import './App.css';
import Dashboard from './components/pages/dashboard/Dashboard';
import Auth from './components/pages/auth/Auth';

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
