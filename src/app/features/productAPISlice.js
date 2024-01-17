import { apiSlice } from "./apiSlice";

const productApiSlice = apiSlice.enhanceEndpoints({addTagTypes: ['Product']}).injectEndpoints({
    endpoints: build => ({
        getProducts: build.query({
            query: ()=> 'Products',
            providesTags: ['Products']
        }),
        getSingleProduct: build.query({
            query: (id)=> `products/${id}`,
            providesTags: ['Product']
        }),
        postReview: build.mutation({
            query: ({id, ...rest})=> ({
                url: `products/${id}/review`,
                method: 'POST',
                body: rest,
            }),
            invalidatestags: ['product']
        })
    })
})

export const {
    useGetProductsQuery,
    useGetSingleProductQuery,
    usePostReviewMutation,
} = productApiSlice