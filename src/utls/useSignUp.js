import useAuth from "../Hooks/useAuth";
import { BASE_URL } from "./Base_URL";

export const useSignUp   = (user) =>{
   const {setUser} = useAuth()
    // get jwt token
    fetch(`${BASE_URL}auth/signUp`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email: user?.email})
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("accessToken", data.accessToken)
            localStorage.setItem("refreshToken", data.refreshToken) 
            setUser(data?.user)
        })
        .catch(error=> console.log(error.message))
}
