import { apiSlice } from "./apiSlice";

const userSlice = apiSlice.enhanceEndpoints({addTagTypes: ["Users"]}).injectEndpoints({
    endpoints: build => ({
        getAllUsers: build.query({
            query: ()=>"users",
            providesTags: ["Users"]
        }),
        getUser : build.query({
            query: (id)=> `users/${id}`,
            providesTags: ["Users"]
        }),
        updateUser: build.mutation({
            query: ({id, ...rest})=>({
                url: `users/${id}`,
                method: "PUT",
                body: rest
            }),
            invalidatesTags: ["Users"]
        }),
        deleteUser: build.mutation({
            query: (id)=> ({
                url: `users/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Users"]
        })
    })
})

export const {
    useGetAllUsersQuery,
    useGetUserQuery,

    useUpdateUserMutation,
    useDeleteUserMutation,
} = userSlice;