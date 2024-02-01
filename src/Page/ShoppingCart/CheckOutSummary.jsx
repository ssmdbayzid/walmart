import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from '../../app/features/cartSlice'

const CheckOutSummary = () => {

    const cart = useSelector((state)=> state.cart)    
    const dispatch = useDispatch()
  
    useEffect(()=>{
      dispatch(getTotal())
    },[dispatch, cart])
  return (
    <div>
         <p className="text-xl font-medium">Order Summary</p>
    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
    {/* <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
   { cart && cart.cartItems.map((item, index)=> 
      <div key={index} className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.image} alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">{item.title}</span>
          <span className="float-right text-gray-400">{item.brand}</span>
          <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
        </div>
      </div>)}
        
    </div> */}
    

<div className="relative overflow-x-auto">
    <table className="w-full border text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 text-center py-3">
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
        { cart && cart.cartItems.map((item, index)=>  
         <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-2 px-2">
                  <div className=' h-20'>
                    <img src={item.image} className="object-cover h-full w-[95%] mx-auto" alt="Apple Watch"/>

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
    <div className="mt-6 border-t border-b py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Subtotal</p>
          <p className="font-semibold text-gray-900">${cart?.cartTotalAmount.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Shipping</p>
          <p className="font-semibold text-gray-900">${(cart?.cartTotalAmount * 0).toFixed(2)}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">${(cart?.cartTotalAmount * 0 + cart?.cartTotalAmount).toFixed(2)}</p>
      </div>  
</div>

    </div>
  )
}

export default CheckOutSummary