import React, { useState } from 'react'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'

const Login: React.FC = () => {
    const [rememberMe, setRememberMe] = useState(false)

    return <>
        <div className="flex flex-col justify-center flex-wrap content-center min-h-screen">
            <div className="flex flex-col justify-center flex-wrap content-center bg-gray-200 p-3 md:w-1/4 sm:w-3/4">
                <h1 className="text-3xl text-center font-bold mt-2">Login</h1>
                <input type="text" className="w-full mt-4  bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
                <input type="password" className="w-full mt-4  bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />

                <Button label="Sign in" type="secondary" />

                <Checkbox label="Remember me" value={rememberMe} setRememberMe={() => setRememberMe(!rememberMe)} />
                <button style={{ backgroundColor: '#4267B2' }} className="w-full mt-4 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">Sign in with facebook</button>
                <button style={{ backgroundColor: '#1DA1F2' }} className="w-full mt-4  bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">Sign in with facebook</button>

                <Button label="Sign up" type="primary" />
            </div>
        </div>
    </>
}

export default Login
