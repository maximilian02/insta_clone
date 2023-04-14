import React, { FormEvent, useState, useEffect } from 'react'
import Button from '../components/Button'
import FormLayout from './FormLayout'
import DB from '../lib/DatabaseStorage'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const SignUp: React.FC = () => {
  const [submitDisable, setSubmitDisable] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const navigate = useNavigate()

  const inputClass = 'w-full mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
  const validateForm = () => {
    let res = false

    if (
      username.length > 3 &&
      password.length > 3 &&
      password2.length > 3 &&
      password === password2
    ) res = true

    setSubmitDisable(!res)
    return res;
  }

  const signInHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (validateForm()) {
      const res = DB.createUserHandler(username, password)
      if (res) {
        toast('User successfully created. Redirecting to Login page, wait for it.', {
          onClose: () => navigate('/login')
        })
      } else {
        toast('Username already taken. Please try again!')
      }
    }
  }

  useEffect(() => {
    validateForm()
  }, [username, password, password2])

  return <>
    <FormLayout>
      <div className="flex flex-col justify-center flex-wrap content-center bg-gray-200 p-3 lg:w-4/12 w-10/12">
        <h1 className="text-3xl text-center font-bold mt-2">Create Account</h1>
        <form className="rounded px-8 pt-6 w-full" onSubmit={signInHandler}>
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
          <input
            type="password"
            className={inputClass}
            placeholder="Confirm password"
            required
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </form>

        <Button label="Sign in" type="secondary" onClick={signInHandler} disabled={submitDisable} />
      </div>
    </FormLayout>
  </>
}

export default SignUp
