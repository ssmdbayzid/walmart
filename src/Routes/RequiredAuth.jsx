import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate,  useLocation } from 'react-router-dom';

const RequiredAuth = ({children}) => {    
    const token = localStorage.getItem("accessToken")    

    const location = useLocation();

    return token ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequiredAuth;