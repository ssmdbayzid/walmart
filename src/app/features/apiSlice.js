// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

let token 
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://walmart-server.vercel.app/api/v1/',      
  // baseUrl: 'http://localhost:5000/api/v1/',      
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

