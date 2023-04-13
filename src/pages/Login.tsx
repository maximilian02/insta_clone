import React from 'react'

const Login: React.FC = () =>
    <>
        <div className="flex flex-col justify-center flex-wrap content-center min-h-screen">
            <div className="flex flex-col justify-center flex-wrap content-center bg-gray-200 w-5/12 p-3">
                <h1 className="text-3xl text-center font-bold mt-2">Login</h1>
                {/* <input className="w-full mt-4 text-gray-700" type="input" placeholder="Username" /> */}
                <input type="text" className="w-full mt-4  bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
                <input type="password" className="w-full mt-4  bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />

                <button className="self-center bg-white mt-4 hover:bg-blue-700 text-black font-bold py-2 px-4 w-4/12 rounded">
                    Sign up
                </button>
            </div>
        </div>
    </>


export default Login
