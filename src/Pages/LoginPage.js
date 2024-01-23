import React from 'react'
import logo from '../Assets/logo technopartner.png'

const LoginPage = () => {
    return (
        <div className='container px-8 flex-row h-screen bg-gray-50'>
            <div className="h-2/5">
                <img className='' src={logo} alt="" />
            </div>
            <div className="text-center h-3/5 text-gray-500">
                <form className="px-12" action="# ">
                    <div>
                        <label for="email" className="block text-sm font-bold">Your email</label>
                        <input type="email" name="email" id="email" className="my-4 bg-gray-50 border shadow-lg border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>
                    <div>
                        <label for="password" className="block text-sm font-bold dark:text-white">Password</label>
                        <input type="password" name="password" id="password" className=" my-4 shadow-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>
                    <button type='submit'
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
