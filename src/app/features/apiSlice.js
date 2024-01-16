// // const baseQuery = fetchBaseQuery()
import { createApi } from '@reduxjs/toolkit/query';
import {fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import useAuth from '../../Hooks/useAuth';


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

const apiSlice = createApi({
    baseQuery: async (args, api, extraOptions)=>{
        token = localStorage.getItem("accessToken")

        const result  = await fetchBaseQuery(args, api, extraOptions);
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
                 const {logOut} = useAuth()
                 toast.error("Token expired, please login again")
            }
        }
        return result
    },
    endpoints: builder => ({})
})


