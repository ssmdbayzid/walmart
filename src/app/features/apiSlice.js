// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../utls/Base_URL';


let token 
const baseQuery = fetchBaseQuery({     
  baseUrl: BASE_URL,      
  prepareHeaders: (headers)=> {
    if(token){
      headers.set("Authorization", `Bearer ${token}`)
    }
    return headers;
  }
})



export const apiSlice = createApi({
  
  baseQuery: async (args, api, extraOptions) =>{
    token = localStorage.getItem("accessToken");
    let result = await baseQuery(args, api, extraOptions)    
    if(result?.error?.status === 401){
      localStorage.removeItem("accessToken")
      localStorage.removeItem("shippingAddress")
      localStorage.removeItem("billingAddress")
      localStorage.removeItem("user")
      window.location.href = "/login";
      toast.error("invalid token please Log In")
    }
    return result
  },
  endpoints: () => ({})
});

