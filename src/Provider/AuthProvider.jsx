import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase.init"

import { toast } from "react-toastify"



export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null)
    const [loading, setLoading] = useState(false)
    

    // ------------ Create User ----------------
    const createUser = async(email, password, navigate, location) => {
        
        try {
            setLoading(true)        
            const result = await createUserWithEmailAndPassword(auth, email, password)
            const {user} = result
            
                fetch('http://localhost:8000/api/v1/auth/signup', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({email: user?.email})
                    
                })
                    .then(res => res.json())
                    .then(data => {                    
                        console.log(data)
                        const destination = location?.state?.from || '/home';
                        navigate(destination)
                        setLoading(false)

                        toast.success(data?.message)
                    })
                    .catch(error=> toast.error(error.message))
        } catch (error) {
            setLoading(false); // Handle errors and set loading to false                        
            toast.error("Already have an account")
            return // Re-
        }
    }
    // ------------ Log In ----------------

    const logIn = async (email, password, navigate, location) => {

        try {
            setLoading(true)        
            const result = await signInWithEmailAndPassword(auth, email, password)
            const {user} = result
            
                fetch('http://localhost:8000/api/v1/auth/jwt-token', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({email: user?.email})
                    
                })
                    .then(res => res.json())
                    .then(data => {                    
                        console.log(data?.user)
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem("user", JSON.stringify(data?.user))
                        localStorage.setItem("accessToken", data.accessToken)
                        localStorage.setItem("refreshToken", data.refreshToken)
                        setUser(data?.user)
                        const destination = location?.state?.from || '/home';
                        navigate(destination)
                        setLoading(false)
                    })
                    .catch(error=> toast.error(error.message))
        } catch (error) {
            setLoading(false); // Handle errors and set loading to false
            toast.error("invalid-credential");
            throw error; // Re-
        }
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{        
        signOut(auth)
        setUser(null)
        localStorage.removeItem("user")
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
    }

    // useEffect(()=>{
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{                        
    //         if(currentUser){                
    //             setLoading(true)
    //             fetch('http://localhost:8000/api/v1/auth/jwt-token', {
    //               method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(currentUser)
    //         })
    //             .then(res => res.json())
    //             .then(data => {                    
    //                 // local storage is the easiest but not the best place to store jwt token
    //                 localStorage.setItem("accessToken", data.accessToken)
    //                 localStorage.setItem("refreshToken", data.refreshToken)
    //                 setUser(data?.user)
    //                 setLoading(false)
    //             })
    //             .catch(error=> console.log(error.message))
                 
    //         }else{
    //             setLoading(false)
    //             localStorage.removeItem("accessToken")
    //             localStorage.removeItem("refreshToken")
    //             setUser(null)
    //         }
    //     })

    //     return ()=> {
    //         unsubscribe();
    //     }
    // },[])

    const info = {
        user,        
        loading,
        setLoading,
        setUser,
        createUser,
        logIn,
        googleSignIn,
        logOut
    }

    return (    
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;