import React from 'react'

const Login: React.FC = () =>
    <>
        <div className="flex flex-col justify-center flex-wrap content-center min-h-screen">
            <div className="flex flex-col justify-center flex-wrap content-center bg-gray-200 w-5/12 p-8">
                <h1 className="text-3xl text-center font-bold">Login</h1>
                <input className="w-56" type="input" placeholder="Username" />
                <input className="w-56" type="input" placeholder="Password" />
            </div>
        </div>
    </>


export default Login
