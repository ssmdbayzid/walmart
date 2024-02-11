import { apiSlice } from "./apiSlice";

const userSlice = apiSlice.enhanceEndpoints({addTagTypes: ["Users"]}).injectEndpoints({
    endpoints: build => ({
        getAllUsers: build.query({
            query: ()=>"users",
            providesTags: ["Users"]
        })
    })
})

export const {
    useGetAllUsersQuery
} = userSlice;