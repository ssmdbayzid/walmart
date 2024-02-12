import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate,  Outlet,  useLocation } from 'react-router-dom';

const PrivatedRoute = ({children}) => {    
    const location = useLocation();
    const token = localStorage.getItem("accessToken")    
    const {user, loading} = useAuth()


    if(loading) {return <p>Loading ...</p> }

    if(user.email && token) {return <Outlet />}

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivatedRoute;