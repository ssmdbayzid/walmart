import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase.init"
import axios from "axios"
import { current } from "@reduxjs/toolkit"


export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    // ------------ Create User ----------------
    const createUser = (email, password) => {
        setLoading(true)
        const result =  createUserWithEmailAndPassword(auth,email, password)
        console.log(result)
        return;

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
        setLoading(false)
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            
            if(currentUser){
                setUser(currentUser);                
            }
            // if(currentUser){
            //     axios.post("http://localhost:8000/", {email: currentUser?.email})
            //     .then(data=> {
            //         console.log(data)
            //     })
            //     .catch(error => console.log(error.message))
            // }else{
            //     setLoading(false)
            // }
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