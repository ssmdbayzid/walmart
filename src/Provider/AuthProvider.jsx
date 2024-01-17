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
                setLoading(false)
                setUser(currentUser);                
            }else{
                setLoading(false)
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