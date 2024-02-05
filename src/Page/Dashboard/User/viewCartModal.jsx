import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from '../../../app/features/cartSlice'

const viewCartModal = () => {
    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTotal())
    },[cart, dispatch])

  return (
    <div className="bg-white p-8 rounded-md w-full">
   
   <div className="flex justify-start item-start space-y-2 flex-col">
        <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #13432</h1>
        <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
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
        { cart && cart.cartItems.map((item, index)=>  
         <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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

export default viewCartModal