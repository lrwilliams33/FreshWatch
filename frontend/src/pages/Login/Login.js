import React from 'react'
import {useState} from 'react'
import './Login.css'

const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)
    }


  return (
    <form className='login' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label>Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Login</button>

    </form>
  )
}

export default Login
