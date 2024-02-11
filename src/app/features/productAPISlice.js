import { apiSlice } from "./apiSlice";

const productApiSlice = apiSlice.enhanceEndpoints({addTagTypes: ['Product']}).injectEndpoints({
    endpoints: build => ({
        createProduct: build.mutation({
            query: (data)=> ({
                url: `products`,
                method: 'POST',
                body: data,
            }),
            invalidatestags: ['product']
        }),
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
    useCreateProductMutation,
    useGetProductsQuery,
    useGetSingleProductQuery,
    usePostReviewMutation,
} = productApiSlice