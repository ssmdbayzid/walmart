import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from '../../app/features/cartSlice'

const CheckOut = () => {
  const cart = useSelector((state)=> state.cart)
  console.log(cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTotal())
  },[dispatch, cart])
  return (
    <div>
     
    <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
  <a href="#" className="text-2xl font-bold text-gray-800">sneekpeeks</a>
  <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
    <div className="relative">
      <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg
          ></a>
          <span className="font-semibold text-gray-900">Shop</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
          <span className="font-semibold text-gray-900">Shipping</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
          <span className="font-semibold text-gray-500">Payment</span>
        </li>
      </ul>
    </div>
  </div>
</div>
<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div className="px-4 pt-8">
    <p className="text-xl font-medium">Order Summary</p>
    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
   { cart && cart.cartItems.map((item, index)=> 
      <div key={index} className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.image} alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">{item.title}</span>
          <span className="float-right text-gray-400">{item.brand}</span>
          <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
        </div>
      </div>)}
    
    </div>

    <p className="mt-8 text-lg font-medium">Shipping Methods</p>
    <form className="mt-5 grid gap-6">
      <div className="relative">
        <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
          <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Fedex Delivery</span>
            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
      <div className="relative">
        <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
          <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Fedex Delivery</span>
            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
    </form>
  </div>
  <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p className="text-xl font-medium">Payment Details</p>
    <p className="text-gray-400">Complete your order billing & shipping details.</p>
    <div className="">
      {/* --- Name ----- */}
      <label htmlFor="name" className="mt-4 mb-2 block text-sm font-medium">Name</label>
      <div className="relative">
        <input type="text" id="name" name="name" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Name" />        
      </div>
      {/* -------- Address --------  */}
      <label htmlFor="address" className="mt-4 mb-2 block text-sm font-medium">Address</label>
      <div className="relative">
        <textarea rows={1} type="text" id="address" name="address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Address" />        
      </div>
      {/* ------------ City & Region Start--------  */}
      <div className='flex w-full gap-2'>
      <div className='w-1/2'>
      <label htmlFor="city" className="mt-4 mb-2 block text-sm font-medium">Town / City</label>
      <div className="relative">
        <input type="text" id="city" name="city" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Address" />        
      </div>
      </div>
      <div className='w-1/2'>
      <label htmlFor="address" className="mt-4 mb-2 block text-sm font-medium">Region (Optional)</label>
      <div className="relative">
        <input type="text" id="address" name="address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Region" />        
      </div>
      </div>
      </div>
      {/* ------------ City & Region End--------  */}

      {/* ------------ Country & Mobile--------  */}
      <div className='flex w-full gap-2'>
      <div className='w-1/2'>
      <label htmlFor="country" className="mt-4 mb-2 block text-sm font-medium">Country</label>
      <div className="relative">
        <input type="text" id="country" name="country" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Country" />        
      </div>
      </div>
      <div className='w-1/2'>
      <label htmlFor="mobile" className="mt-4 mb-2 block text-sm font-medium">Mobile</label>
      <div className="relative">
        <input type="number" id="mobile" name="mobile" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Mobile" />        
      </div>
      </div>
      </div>
      {/* ------------ City & Region End--------  */}

      <label htmlFor="address" className="mt-4 mb-2 block text-sm font-medium">Address</label>
      <div className="relative">
        <input type="text" id="address" name="address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Address" />        
      </div>
          
      <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
      
      <div className="relative flex-shrink-0 w-full">
          <textarea rows={1} type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />          
        </div>
      <div className="flex flex-row gap-3">
   
        <input type="text" name="billing-state" className="w-1/2 md:w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder='City'>          
        </input>
        <input type="text" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none  focus:z-10 focus:border-blue-500 focus:ring-blue-500 w-1/2 md:w-1/3" placeholder="ZIP" />
      </div>

      {/* <!-- Total --> */}
      <div className="mt-6 border-t border-b py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Subtotal</p>
          <p className="font-semibold text-gray-900">${cart?.cartTotalAmount.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Shipping</p>
          <p className="font-semibold text-gray-900">${(cart?.cartTotalAmount * 0.02).toFixed(2)}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">${(cart?.cartTotalAmount * 0.02 + cart?.cartTotalAmount).toFixed(2)}</p>
      </div>
    </div>
    <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
  </div>
</div>
    </div>
  )
}

export default CheckOut