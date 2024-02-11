import React, { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../../../app/features/productAPISlice'
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";


const AllProducts = () => {
  const {data} = useGetProductsQuery()
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState(null)
  useEffect(()=>{
    setLoading(true)
    if(data){
      setLoading(false),
      setProducts(data?.data)
    }else{
      setLoading(false)
    }
  },[data])
  return (
    <div>
      {
        loading ? <p>Loading ...</p> :
        <>
        
         <div className="overflow-x-auto">
         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
             <tr>
               <th scope="col" className="px-4 py-3">
                 Image
               </th>
               <th scope="col" className="px-4 py-3">
                 Name
               </th>
               <th scope="col" className="px-4 py-3">
                 Price
               </th>
               <th scope="col" className="px-4 py-3">
                 Category
               </th>
               <th scope="col" className="px-4 py-3">
                 Brand
               </th>
               <th scope="col" className="px-4 py-3">
                 Company
               </th>
               <th scope="col" className="px-4 py-3">
              Description
               </th>
               <th scope="col" className="px-4 py-3">
                Action
               </th>
             </tr>
           </thead>
           <tbody>
           {products && products.map((product, index)=>   
           <tr key={index}  className="border-b dark:border-gray-700">
               <td className="px-4 py-3 w-20 h-20">
                <img src={product.image} alt="" className='w-full h-full object-fill' />
                </td>
             
               <th                
                 className="px-4 py-3 font-medium  "
               >
                {product.title}
               </th>
               <td className="px-4 py-3">{product.price}</td>
               <td className="px-4 py-3">{product.category}</td>
               <td className="px-4 py-3">{product.brand}</td>
               <td className="px-4 py-3 ">
                  {product.company}              
               </td>
               <td className="px-4 py-3 line-clamp-3 h-14  overflow-hidden">
                {product.description}
                 </td>
               <td className='px-4 py-3'>
               <div className="flex items-center justify-between gap-5">
               <FiEdit3 className='h-6 w-6 text-blue-700 cursor-pointer' />
                <FaRegTrashAlt className='h-6 w-6 text-red-700 cursor-pointer' />
               </div>
               </td>
             </tr>)}
           
           </tbody>
         </table>
       </div>
        </>
      }
    </div>
  )
}

export default AllProducts