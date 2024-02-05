import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase.init"
import { current } from "@reduxjs/toolkit"


export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    // ------------ Create User ----------------
    const createUser = (email, password) => {

        console.log("email", email, "password", password)
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email, password)

    }
    // ------------ Log In ----------------

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{        
        signOut(auth)
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{                        
            if(currentUser){                
                setLoading(true)
                fetch('http://localhost:8000/api/v1/auth/jwt-token', {
                  method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {                    
                    // local storage is the easiest but not the best place to store jwt token
                    localStorage.setItem("accessToken", data.accessToken)
                    localStorage.setItem("refreshToken", data.refreshToken)
                    setUser(data?.user)
                    setLoading(false)
                })
                .catch(error=> console.log(error.message))
                 
            }else{
                setLoading(false)
                localStorage.removeItem("accessToken")
                localStorage.removeItem("refreshToken")
                setUser(null)
            }
        })

        return ()=> {
            unsubscribe();
        }
    },[])

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