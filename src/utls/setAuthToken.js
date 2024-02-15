import useAuth from "../Hooks/useAuth";

export const setAuthToken = (user) =>{
    // const {setUser} = useAuth()
    const currentUser = {
        email: user.email
    }

    // get jwt token
    fetch('https://walmart-server.vercel.app/api/v1/auth/jwt-token', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem("accessToken", data.accessToken)
            localStorage.setItem("refreshToken", data.refreshToken)
            // setUser(data?.user)

        })
        .catch(error=> console.log(error.message))
}