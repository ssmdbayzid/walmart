import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation,  } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import Loader from '../component/Loader'

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
       
  useEffect(()=>{
    if(loading) {return <Loader />}

    const accessableRoute = user?.role === "admin"  ? children 
  :  <Navigate to="/dashboard" state={{from: location}} replace />  
  return accessableRoute;
  },[user, loading])
    
}

export default AdminRoute