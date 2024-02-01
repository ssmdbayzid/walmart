import { createContext, useEffect, useState } from "react"
import { useGetProductsQuery } from "../app/features/productAPISlice"
import { IoFastFood } from "react-icons/io5"

export const ProductContext = createContext()

const ProductProvider = ({children}) =>{
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
  const {data, isLoading, isError} = useGetProductsQuery()
  
useEffect(()=>{
    setLoading(true)
    if(data){
        setProducts(data?.data)
        setLoading(false)
        console.log("product context", data?.data)
    }else{
        setProducts(null)
        setLoading(false)

    }
},[data])
    
 
const info =  {
    products,
    loading,
    error
}
return (
<ProductContext.Provider value={info}>
{children}
</ProductContext.Provider >)
}

export default ProductProvider ;