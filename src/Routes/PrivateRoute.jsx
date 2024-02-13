

import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({children}) => {
  const {user, loading} = useAuth()
  const token = localStorage.getItem("accessToken")
 
  const location = useLocation()     
  
  if(loading) return <p>Loading </p>

 
  
  const accessableRoute = user?.email && token ? children 
  :  <Navigate to="/login" state={{from: location}} replace />  
  return accessableRoute;
}

export default PrivateRoute