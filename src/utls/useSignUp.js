import useAuth from "../Hooks/useAuth";

export const useSignUp   = (user) =>{
   const {setUser} = useAuth()
    // get jwt token
    fetch('http://localhost:8000/api/v1/auth/signUp', {
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
