import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";

import { AuthContext } from '../../Provider/AuthProvider';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { setAuthToken } from '../../utls/setAuthToken';
import GoogleSignIn from '../../component/GoogleSignIn';

const Login = () => {
    const {logIn, setUser} = useAuth()

 
    const navigate = useNavigate();
    const location = useLocation();

    // let from = location.state?.from?.pathname || "/home";

    //     useEffect(()=>{
    //         if(token) {
    //           navigate(from, { replace: true });
    //           }
    //     },[token])

    const handleLogin = (e) =>{

        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value           
        logIn(email, password, navigate, location)        
        
    }
    return (
        <div className='max-w-[1170px] h-screen mx-auto flex items-center justify-center'>
            <div className="p-3 w-full md:w-1/2">
                <form onSubmit={handleLogin} className='w-full'>
                    <div className='relative'>
                        <p className='text-xl text-blue-500 font-bold '>Walmart
                        </p>
                        <span className='absolute top-4 left-20 w-4 h-4 bg-yellow-300 rounded-full'></span>
                    </div>
                    <p className='text-5xl font-bold font-sans mb-6'>Log In</p>
                    <div>
                        <label htmlFor="email" className='font-semibold '>Email</label>
                        <br />
                        <input type="email" name='email' id='email'
                            className='w-full mt-2 py-2  rounded-lg focus:border focus:border-blue-300 border-gray-600 border-1 mb-3'
                            placeholder='example@gmail.com' />
                    </div>
                    <div>
                        <label htmlFor="password" className='font-semibold' >Password</label>
                        <br />
                        <input type="password" name='password' id='password'
                            className='w-full mt-2 py-2  rounded-lg focus:border focus:border-blue-300 border-gray-600 border-1'
                            placeholder='password' />
                    </div>
                    <p className='text-gray-500 my-3'>Don't have an account ? <a href="/signup" className='font-semibold text-blue-500'> Sign Up</a></p>
                    <button className='w-full py-2 bg-blue-500 text-white font-light text-xl my-3'>Log In</button>
                </form>
                <div className="inline-flex items-center justify-center w-full ">
                    <hr className="w-1/3 h-1 bg-gradient-to-r from-blue-100 via-blue-500 to-yellow-300 border-0 rounded dark:bg-gray-700" />
                    <p className='mx-3 text-lg'>Or Signin With</p>
                    <hr className="w-1/3 h-1 my-8 bg-gradient-to-r from-yellow-300 via-blue-500 to-blue-100 border-0 rounded dark:bg-gray-700" />   
                </div>
                <GoogleSignIn />
            </div>
            <div className='hidden md:block md:w-1/2'>
                <img src="https://i.pinimg.com/originals/6b/1b/22/6b1b22573f9f3d4bba11a9fa5cb45652.png" alt="" />
            </div>
        </div>
    )
}

export default Login