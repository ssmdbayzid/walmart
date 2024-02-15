// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

let token
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://walmart-server.vercel.app/api/v1/',    
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
      token = localStorage.getItem("refreshToken")
      
      const refreshResult = await baseQuery({
        url: 'auth/refresh-token',
        method: "GET"        
      }, api, extraOptions)      
      
      if(refreshResult?.data){
        localStorage.setItem("accessToken", refreshResult?.data?.accessToken)
        toast.success("Generate Access Token")
        result = await baseQuery(args, api, extraOptions)        
      }else{
        const {logOut}=useAuth()
        logOut()
      }
    }
    return result
  },
  endpoints: () => ({})
});

