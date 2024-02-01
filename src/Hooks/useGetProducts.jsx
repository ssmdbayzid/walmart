import { useContext } from "react"
import { ProductContext } from "../Provider/ProductsProvider"

export const useGetProducts = ()=>{
   const products = useContext(ProductContext)
   return products
}