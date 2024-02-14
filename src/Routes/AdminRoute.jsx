import React from 'react'
import { Navigate, Outlet, useLocation,  } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const AdminRoute = () => {
    const {user, loading} = useAuth()
    const location = useLocation()
    

    if(loading) {return <p>Loading ....</p> }
    if(user.role === "admin"){
        return <Outlet />
    }
    
  return <Navigate to="/dashboard" state={{from: location}} />
}

export default AdminRoute