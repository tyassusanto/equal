import React, { useState } from 'react'
import logo from '../Assets/logo technopartner.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// require('dotenv').config()

const LoginPage = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: '',
        password: '',
        grant_type: 'password',
        client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
        client_id: 'e78869f77986684a'
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleClick = () => {
        axios.post(`https://soal.staging.id/oauth/token`, form)
            .then((res) => {
                const token = res.data.access_token
                localStorage.setItem('auth', 1)
                localStorage.setItem('user', JSON.stringify(token))
                // navigate('/')
                console.log('Token : ',token)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className='container px-8 flex-row h-screen bg-gray-50'>
            <div className="h-2/5">
                <img className='' src={logo} alt="" />
            </div>
            <div className="text-center h-3/5 text-gray-500">
                <form onSubmit={handleSubmit}
                    className="px-12" action="# ">
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold">Your email</label>
                        <input
                            onChange={handleChange}
                            value={form.username}
                            type="text"
                            name="username"
                            id="email"
                            required=""
                            className="my-4 bg-gray-50 border shadow-lg border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-bold dark:text-white">Password</label>
                        <input
                            onChange={handleChange}
                            value={form.password}
                            type="password"
                            name="password"
                            id="password"
                            required=""
                            className=" my-4 shadow-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        />
                    </div>
                    <button
                        type='submit'
                        onClick={handleClick}
                        className='w-2/5 font-bold rounded-lg px-5 py-2.5 text-center mt-2 border-2 shadow-lg'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
