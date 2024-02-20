import React, { useEffect, useState } from 'react'
import { useDeleteProductMutation, useGetProductsQuery } from '../../../app/features/productAPISlice'
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import UpdatePrtoduct from './UpdatePrtoduct';
import { toast } from 'react-toastify';
import Loader from '../../../component/Loader';


const AllProducts = () => {
  const {data, isLoading} = useGetProductsQuery()
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState(null)
  const [deleteProduct] =  useDeleteProductMutation()

  const [openEditModal, setOpenEditModal] = useState(false)
  const [editItem, setEditItem] = useState(null)

  const [visiableItems, setVisiableItems] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)  
  const itemsPerPage = 10

  const totalPages = Math.ceil(products?.length / itemsPerPage);

  // -------- Get data from database --
  useEffect(()=>{
    if(isLoading){    
      setLoading(true)
    }
    if(data){     
      console.log(data)
      setLoading(false),
      setProducts(data?.data)
    }else{
      setLoading(false)
    }
  },[data])
 

  // -------- show per page items -----

  useEffect(()=>{
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endInex = currentPage * itemsPerPage;
    setVisiableItems(products?.slice(startIndex, endInex))
  },[currentPage, products])

  const handlePageChange = (newPage) => {setCurrentPage(newPage)}

  const handleBackClick = () => {
    if(currentPage > 1){
      handlePageChange(currentPage - 1)
    }
  }

  const handleForwardClick = () => {
    if(currentPage < totalPages){
      handlePageChange(currentPage + 1)
    }
  }
  
  const handDeleteProduct = async(id) =>{{
        
    if(confirm("Are you sure you want to delete") === false){
      return;
    }else{
      setLoading(true)
      try {
        await deleteProduct(id)
        setLoading(false)
        toast.error("Deleted Product Successfully")
      } catch (error) {
        console.log(error?.message)
        setLoading(false)
      }
    }
    
  
  }}


  return (
    <div>
      {
        loading ? <Loader /> :
        <>
        
        {visiableItems &&  <div className="overflow-x-auto px-2">
        <h2 className='text-center text-2xl font-bold pt-2'>All Products</h2>
      <hr className='mb-4 h-1 bg-gradient-to-r from-yellow-300 via-blue-100 to-blue-500
        w-1/4 m-auto mt-2' />
         <table className=" border w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
             <tr>
               <th scope="col" className="whitespace-nowrap px-2 py-3 text-center">
                 Sl No
               </th>
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
           { visiableItems.map((product, index)=>   
           <tr key={index}  className="border-b dark:border-gray-700">
               <th                
                 className="px-2 py-3 font-medium  text-center"
               >
                {(currentPage - 1)  * itemsPerPage + index + 1 }
               </th>
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
               <FiEdit3 onClick={()=> {setOpenEditModal(!openEditModal); setEditItem(product) }              
              } className='h-6 w-6 text-blue-700 cursor-pointer' />
                
                <FaRegTrashAlt 
                onClick={()=> handDeleteProduct(product._id)}
                className='h-6 w-6 text-red-700 cursor-pointer' />
               </div>
               </td>
             </tr>)}           
           </tbody> 
         </table>
         
         {/* ----------- Pagination Button ------- */}

        <nav
        className="relative bottom-0 flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <span className=" flex gap-2 text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing
          <span className="font-semibold text-gray-900 dark:text-white">
           <span>{ (currentPage - 1) * itemsPerPage + 1}</span>  - <span>{itemsPerPage * currentPage}</span>
            
          </span>
          of
          <span className="font-semibold text-gray-900 dark:text-white">
           {products?.length}
          </span>
        </span>
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <p
              onClick={()=>handleBackClick()}
              className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </li>
         { totalPages && [...Array(totalPages).keys()].map((_, index) =>
           { return <li key={index}>
            <p
              onClick={()=> setCurrentPage(index + 1)}
              className={`${index + 1 === currentPage ? " text-white bg-blue-400  border border-blue-300 hover:bg-blue-300" 
              : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"} cursor-pointer flex items-center justify-center text-sm py-2 px-3 leading-tight`} > 
              {index + 1} </p>
          </li> })} 
                      
          <li>
            <p
              onClick={()=>handleForwardClick()}
              className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </li>
        </ul>
      </nav>

       </div>}
       {openEditModal &&  < UpdatePrtoduct openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} product={editItem} /> }
        </>
      }
    </div>
  )
}

export default AllProducts