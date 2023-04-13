import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/Home"
import Login from "./pages/Login"
import Authenticated from './pages/Authenticated';

ReactDOM.render(
    <Router>
        <div className="xl:container bg-gray-800 min-h-screen w-full">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Authenticated>
                            <Home />
                        </Authenticated>}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
            </Routes>
        </div>
    </Router>,
    document.getElementById("root")
)
