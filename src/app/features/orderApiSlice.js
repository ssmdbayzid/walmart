import { apiSlice } from "./apiSlice";

const orderSlice = apiSlice.enhanceEndpoints({addTagTypes: ['Orders']}).injectEndpoints({
    endpoints: build =>({
        getOrders : build.query({
            query: ()=> "orders",
            providesTags: ["Orders"]
        }),

    })
})

export const {useGetOrdersQuery} = orderSlice