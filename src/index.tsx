import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from './pages/SignUp'
import Authenticated from './components/Authenticated'
import CreatePost from './pages/CreatePost'

ReactDOM.render(
    <Router>
        <ToastContainer />
        <div className="bg-gray-800 min-h-screen w-full">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Authenticated>
                            <Home />
                        </Authenticated>}
                />
                <Route
                    path="/create-post"
                    element={
                        <Authenticated>
                            <CreatePost />
                        </Authenticated>}
                />
                <Route
                    path="/signup"
                    element={<SignUp />}
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
