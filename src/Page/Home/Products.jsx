import axios from 'axios'
import React, { useEffect, useState } from 'react'

// import { products } from '../../assets/data/ItemsCategory'
// import { useGetProductsQuery } from '../../app/features/productAPISlice'
import { useGetProducts } from '../../Hooks/useGetProducts'
import Loader from '../../component/Loader'


const Products = () => {
  const {products, loading} = useGetProducts()

  if(loading){
    return <Loader />
  }
  
  return (
    <div className="max-w-[1170px] mx-auto">
        
        <h1 className="text-4xl font-semibold text-center text-nowrap">Popular Products</h1>        
        <hr className='mb-4 h-1 bg-gradient-to-r from-yellow-300 via-blue-100 to-blue-500
        w-1/4 m-auto mt-2' />
                
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 px-4 md:px-0">
           {products && products.slice(0, 8).map((item, index)=> 
           <div key={index} className="">
               <div className='h-60 '>
               <img src={item.image} alt=""
                className=" w-full h-full mx-auto " />                              
               </div>   
               <div className="px-1">
                   {/* --------- Product Content ---------- */}
               <div className=" h-28">
                   {/* <p className="text-md font-semibold">{item.title}</p> */}
                                 
                   <p className="text-slate-400 ">{item.category}</p>
                   <div className="w-full flex justify-between">
                   <p  className="text-md font-bold overflow-hidden text-ellipsis whitespace-nowrap w-[90%]">{item.title}</p>
                   <a
                   href={`/product/${item._id}`}
                   className=" ml-1 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7 text-white cursor-pointer">                   
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                   </svg>
               
                   </a>   
                   </div>
                   <div className="flex justify-between mt-2">
                   <p>$ {item.price}</p>
                   <div className="flex items-center justify-center">                   
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-400 mr-1">
                   <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                   </svg>
                   <span>4.5 (5)</span>
                   </div>   
                   </div>
                   
   
               </div>
                   {/* --------------- Icons -----------  */}                
               
               </div>
           </div>
           )}
           </div>
        
       
    </div>
  )
}

export default Products