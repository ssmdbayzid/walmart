import React, { useEffect, useState } from 'react'
import { useGetOrdersQuery, useUpdateOrderMutation } from '../../../app/features/orderApiSlice'
import { IoEyeOutline } from "react-icons/io5";
import ItemModal from './ItemModal';
import { FiEdit3 } from "react-icons/fi";
import { toast } from 'react-toastify';
import Loader from '../../../component/Loader';
const AllOrder = () => {
    // const [openOption, setOpenOption] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const {data, isLoading, isError} = useGetOrdersQuery()
    const [ updateOrder] = useUpdateOrderMutation()
    const [loading, setLoading]= useState(false)
    const [orders, setOrders] = useState(null)
    const [cartItems, setCartItems] = useState(null)
    
    const [openEdit, setOpenEdit] = useState(false)
    const [editItemId, setEditItemId] = useState("")
    

useEffect(()=>{
  setLoading(true)
  if(data){
    setOrders(data)    
    setLoading(false)
  }else{
    setOrders(null)
  }
},[data])

    const updateOrderStatus = async (id, dStatus) =>{
      setLoading(true)
      const result =  await updateOrder({id, delivery_Status: dStatus})
      
      if(result.data){
        setOpenEdit(false)
        setLoading(false)
        toast.success("Order Updated")        
    }
    if(result.error){
        // toast.error(`${result.error?.data}`,)
        setLoading(false)
        console.log(result.error)
    }
    }



  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 min-h-screen">
  <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
    {/* Start coding here */}
    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
      <h2 className='text-center text-2xl font-bold pt-2'>All Orders</h2>
      <hr className='mb-4 h-1 bg-gradient-to-r from-yellow-300 via-blue-100 to-blue-500
        w-1/4 m-auto mt-2' />

     {loading ? <Loader /> : <>
     {orders && 
      <div className="overflow-x-hidden">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                Transaction Id
              </th>
              <th scope="col" className="px-4 py-3">
                Total Item
              </th>
              <th scope="col" className="px-4 py-3">
                Total Amount
              </th>
              <th scope="col" className="px-4 py-3">
                Shipping Address
              </th>
              <th scope="col" className="px-4 py-3">
                Delivery Status
              </th>
              <th scope="col" className="px-4 py-3">
             Actions
              </th>
            </tr>
          </thead>
          <tbody>
         { orders?.data.map((order, index)=>  
            <tr key={index} className="border-b align-middle dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
               {order.tran_id}
              </th>
              <td className="px-4 py-3">{order.cartItems.length}</td>
              <td className="px-4 py-3">{order.total_price}</td>
              <td className="px-4 py-3">{order.shippingAddress.address}</td>
              <td className="px-4 py-3 ">
                {openEdit && editItemId === order._id ?
                <select onChange={(e)=>updateOrderStatus(order._id, e.target.value)} name="delivery_status" id="" className='px-2 py-1 ' >
                  <option value="pending">pending</option>
                  <option value="shipped">shipped</option>
                  <option value="delivered">delivered</option>
                </select> : <><p className={`
                ${order.delivery_Status == "pending" && "bg-red-200"}
                ${order.delivery_Status == "shipped" && "bg-yellow-200"}
                ${order.delivery_Status == "delivered" && "bg-green-200"}

                 text-center px-1 py-2 rounded-md font-semibold`}>{order.delivery_Status}</p> </>}
                </td>
              <td className="px-4 py-3 ">
                  <div className="flex items-center justify-center ">
                  <IoEyeOutline onClick={()=>{
                    setOpenModal(!openModal);
                    setCartItems(order)}                    
                  } 
                   className='w-6 h-6 mr-2 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none' />
                   <FiEdit3 onClick={()=>{
                    setEditItemId(order._id);
                    setOpenEdit(!openEdit)
                  }}
                    className='w-6 h-6 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none'/>
                  </div>                 
                    </td>
            </tr> )}
          </tbody>
        </table>
      </div> }</>}
      <nav
        className="relative bottom-0 flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>
          of
          <span className="font-semibold text-gray-900 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <a
              href="#"
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
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              100
            </a>
          </li>
          <li>
            <a
              href="#"
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
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  {/* <!-- Main modal --> */}
{openModal && <div className=""><ItemModal order={cartItems} openModal={openModal} setOpenModal={setOpenModal} /></div> }
</section>

  )
}

export default AllOrder