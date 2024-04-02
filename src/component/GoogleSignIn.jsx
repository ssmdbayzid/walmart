import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { FaDatabase } from 'react-icons/fa6';
import { CircleLoader } from 'react-spinners';
import { BASE_URL } from '../utls/Base_URL';

const GoogleSignIn = () => {
    const [loading, setLoading] = useState(false);

    const googleProvider = new GoogleAuthProvider()

    const navigate = useNavigate()
    const handleSignIn = async() =>{
        setLoading(true)
        try {
            const {user} = await signInWithPopup(auth, googleProvider)
            
            const data = {
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL
             }    
                setLoading(false)
                       
             fetch(`${BASE_URL}auth/google/login`, {                
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
                
            })
                .then(res => res.json())
                .then(data => {                                        
                    
                    localStorage.setItem("user", JSON.stringify(data?.user))
                    localStorage.setItem("accessToken", JSON.stringify(data?.accessToken))
                    localStorage.setItem("shippingAddress", JSON.stringify(data?.user?.shippingAddress))
                    localStorage.setItem("billingAddress", JSON.stringify(data?.user?.billingAddress))

                    const destination = location?.state?.from || '/home';
                    navigate(destination)
                    setLoading(false)
                    window.location.reload()

                    toast.success(data?.message)
                })
                .catch(error=> toast.error(error.message))
        } catch (error) {
            
        }
    }
  return (
    <div>
      <button onClick={()=>handleSignIn()} className='w-full flex items-center gap-5 justify-center py-2.5 bg-red-700 text-white'> 
       {loading  && 
       <CircleLoader
       color="#fff"
       size={30}
       speedMultiplier={1}
     /> 
       } Sign In With Google
      </button>
    </div>
  )
}

export default GoogleSignIn