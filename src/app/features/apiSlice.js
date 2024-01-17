// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

let token
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/api/v1/',
  credentials: "include",
  prepareHeaders: (headers)=> {
    if(token){
      headers.set("Authorization", `Bearer ${token}`)
    }
    return headers;
  }
})



export const apiSlice = createApi({
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1/' }), // Update the base URL accordingly
  baseQuery: async (args, api, extraOptions) =>{
    token = localStorage.getItem("accessToken");
    const result = await baseQuery(args, api, extraOptions)    
    if(result?.error?.status === 401){
      token = localStorage.getItem("refreshToken")
      
      const refreshResult = await baseQuery({
        url: 'auth/refresh-token',
        method: "GET"        
      }, api, extraOptions)      
      
      if(refreshResult?.data){
        localStorage.setItem("accessToken", refreshResult?.data?.accessToken)
        toast.success("Generate Access Token")
        return await baseQuery(args, api, extraOptions)
        
      }else{
        const {logOut}=useAuth()
        logOut()
      }
    }
    return result
  },
  endpoints: () => ({})
});


// export const { useGetProductQuery, useAddToCartMutation, useDecreaseCartQtyMutation } = apiSlice;



/*
// // const baseQuery = fetchBaseQuery()
import { createApi } from '@reduxjs/toolkit/query';
import {fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';


let token;
const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
    credentials: "include",
    prepareHeaders: (headers)=>{
        if(token){
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers;
    }    
})

export const apiSlice = createApi({
    baseQuery: async (args, api, extraOptions)=>{
        token = localStorage.getItem("accessToken")

        const result  = await baseQuery(args, api, extraOptions);
        if(result?.error?.status ===401){
            token = localStorage.getItem("refreshToken");
            const refreshResult = await baseQuery({
               url: 'auth/refresh-token',
               method: "GET",
            }, api, extraOptions)
            console.log(refreshResult)
            
            if(refreshResult?.data){
                localStorage.setItem("accessToken")
                // retry the original query with new access token
                result = await baseQuery(args, api, extraOptions)
            }else {
                //  const {logOut} = useAuth()
                 toast.error("Token expired, please login again")

            }
        }
        return result
    },
    endpoints: builder => ({})
})



*/