import React, { useState } from 'react'
import Input from '../components/Input'
import { login } from '../services/authService'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordErrors, setPasswordErrors] = useState()
  const [userErrors, setUserErrors] = useState()

  function validate() {
    const errors = {}
    if (username.trim() === '') {
      errors.username = 'Username is required'
    }
    if (password.trim() === '') {
      errors.password = 'Password is required'
    }
    return Object.keys(errors).length === 0 ? null : errors
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await login(username, password)
      window.location = '/learning'
      setUsername('')
      setPassword('')
    } catch (err) {
      if (err.response.status === 404) {
        setUserErrors('Couldn`t find a username')
      }
      if (err.response.status === 403) {
        setPasswordErrors('Password is wrong!')
      }
      setPassword('')
    }
  }

  function HandleChagePassword(e) {
    if (e.target.value !== '') setPasswordErrors(false)
    setPassword(e.target.value)
  }

  function HandleChageUsername(e) {
    if (e.target.value !== '') setUserErrors(false)
    setUsername(e.target.value)
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5 mt-5">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <Input
              autoFocus={true}
              type="text"
              name="username"
              label="Username"
              error={userErrors}
              value={username}
              onChange={HandleChageUsername}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              error={passwordErrors}
              value={password}
              onChange={HandleChagePassword}
            />
            <button
              disabled={validate()}
              type="submit"
              className="btn btn-info mt-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
