import { apiSlice } from "./apiSlice";

const productApiSlice = apiSlice.enhanceEndpoints({addTagTypes: ['Product']}).injectEndpoints({
    endpoints: build => ({
        createProduct: build.mutation({
            query: (data)=> ({
                url: `products`,
                method: 'POST',
                body: data,
            }),
            invalidatestags: ['Product']
        }),
        getProducts: build.query({
            query: ()=> 'Products',
            providesTags: ['Product']
        }),
        getSingleProduct: build.query({
            query: (id)=> `products/${id}`,
            providesTags: ['Product']
        }),
        updateProduct : build.mutation({
            query: ({id, ...rest})=>({
                url: `products/${id}`,
                method: "PUT",
                body: rest
            }),
            invalidatesTags: ['Product']
        }),
        deleteProduct: build.mutation({
            query: (id)=> ({
                url: `products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Product']
        }),
        postReview: build.mutation({
            query: ({id, ...rest})=> ({
                url: `products/${id}/review`,
                method: 'POST',
                body: rest,
            }),
            invalidatestags: ['Product']
        })
    })
})

export const {
    useGetProductsQuery,
    useGetSingleProductQuery,
    
    useDeleteProductMutation,
    useCreateProductMutation,
    useUpdateProductMutation,
    usePostReviewMutation,
} = productApiSlice