import { apiSlice } from "./apiSlice";

const orderSlice = apiSlice.enhanceEndpoints({addTagTypes: ['Orders']}).injectEndpoints({
    endpoints: build =>({
        getOrders : build.query({
            query: ()=> "orders",
            providesTags: ["Orders"]
        }),
        updateOrder: build.mutation({
            query: ({id, ...rest})=>({
                url: `orders/${id}`,
                method: "PUT",
                body: rest,
            }),
            invalidatesTags: ['Orders']
        })

    })
})

export const {
    useGetOrdersQuery,
    useUpdateOrderMutation,
} = orderSlice