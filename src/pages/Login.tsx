import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import FormLayout from './FormLayout'
import DB from '../lib/DatabaseStorage'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login: React.FC = () => {
    const [submitDisable, setSubmitDisable] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const navigate = useNavigate()
    const inputClass = 'w-full mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
    const validateForm = () => {
        let res = false

        if (
            username.length > 3 &&
            password.length > 3
        ) res = true

        setSubmitDisable(!res)
        return res;
    }

    const goToSignUpHandler = () => navigate('/signup')
    const signInHandler = () => {
        const res = DB.loginHandler(username, password)
        if (!res) {
            toast('User and password combination error')
        } else {
            navigate('/')
        }
    }

    useEffect(() => {
        validateForm()
    }, [username, password])

    return <>
        <FormLayout>
            <div className="flex flex-col justify-center flex-wrap content-center bg-gray-200 p-3 lg:w-4/12 w-10/12">
                <h1 className="text-3xl text-center font-bold mt-2">Login</h1>
                <input
                    type="text"
                    className={inputClass}
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className={inputClass}
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button label="Sign in" type="secondary" onClick={signInHandler} disabled={submitDisable} />
                <Checkbox label="Remember me" value={rememberMe} setRememberMe={() => setRememberMe(!rememberMe)} />

                <Button label="Sign in with facebook" type="facebook" onClick={signInHandler} />
                <Button label="Sign in with twitter" type="twitter" onClick={signInHandler} />

                <Button label="Sign up" type="primary" onClick={goToSignUpHandler} />
            </div>
        </FormLayout>
    </>
}

export default Login
