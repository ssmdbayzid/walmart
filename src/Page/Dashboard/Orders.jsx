import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from '../../app/features/cartSlice'
import useAuth from '../../Hooks/useAuth'

import { useGetUserQuery } from '../../app/features/userApiSlice'

const Orders = () => {
    const [orders, setOrders] = useState(null)
    const {user, loading} = useAuth()

    const {data, isloading} = useGetUserQuery(user?._id)

    if(isloading) return <p>Loading ....</p>

    if(data) console.log(data)

    
    useEffect(()=>{
        if(data){
            setOrders(data?.data?.orders)
        }
    },[data])
    
    if(loading){
        return <p>Loading ...</p>
    }

  return (
    <div className="bg-slate-100 p-8 rounded-md w-full">
        
        
    {orders && orders.length === 0 ? <h1 className='text-center font-bold text-2xl'>Empty Order</h1> : 
   <>
   <h1 className='text-3xl text-center  font-bold text-blue-600'>Orders</h1>
   <hr className='mb-4 h-1 bg-gradient-to-r from-yellow-300 via-blue-100 to-blue-500
        w-1/4 m-auto mt-2' />
     {orders && orders.length > 0 && orders.map((order, index)=>
     <div key={index} className=''>
        <div className="flex space-y-2 flex-col">
        <h1 className="text-md dark:text-white lg:text-2xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #{order.tran_id}</h1>
        <p className="text-base dark:text-gray-300 font-medium leading-6 -600 text-capitalize ">Delivery Status : <span className='text-yellow-400 capitalize'>{order.delivery_Status}</span> </p>       
        </div>     
        <div className="relative overflow-x-auto">
    <table className="w-full border text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className=" text-center py-3">
                    Image
                </th>
                <th scope="col" className="px-3   py-3">
                    Product name
                </th>
                <th scope="col" className="px-3  py-3">
                    Price
                </th>
                <th scope="col" className="px-3  py-3">
                    Category
                </th>
                <th scope="col" className="px-3  py-3">
                    Total
                </th>
             
            </tr>
        </thead>
        <tbody>
        { order?.cartItems && order?.cartItems.map((item, index)=>  
         <tr key={index} className="bg-white dark:bg-gray-800 dark:border-gray-700 mb-10">
                <td className="py-2 ">
                  <div className=' h-10'>
                    <img src={item.image} className="object-cover h-full w-16 mx-auto" alt="Apple Watch"/>

                  </div>
                </td>
                <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
                    {item.title}
                </th>
                <td className="px-3 ">
                    {item.price}
                </td>
                <td className="px-3 text-center ">
                    {item.cartQuantity}
                </td>
                <td className="px-3 ">
                    ${item.price * item.cartQuantity.toFixed(2) }
                </td>
               
            </tr>)}
          
        </tbody>
    </table>
    <div className="mt-6 border-t border-b-4 border-b-black/70 py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="font-semibold text-gray-900">${order?.total_price.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Shipping</p>
          <p className="font-semibold text-gray-900">${(order?.total_price * 0).toFixed(2)}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">${(order?.total_price).toFixed(2)}</p>
      </div>  
</div>
        </div>)
   }
   </>} 
   </div>     
  )
}

export default Orders