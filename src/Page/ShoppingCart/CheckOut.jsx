import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from '../../app/features/cartSlice'
import ShippingForm from './ShippingForm'
import Payment from '../Payment/Payment'
import CheckOutSummary from './CheckOutSummary'

const CheckOut = () => {
  const cart = useSelector((state)=> state.cart)
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTotal())
  },[dispatch, cart])
  return (
    <div className='max-w-[1170px] mx-auto'>     
    <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
  
  <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
    
  </div>
</div>
<div className=" flex w-full flex-col items-start sm:px-10 md:flex-row ">
  <div className="px-4 pt-8 md:w-1/2 ">
   <CheckOutSummary />
    <p className="mt-8 text-2xl text-center font-medium">Payment </p>
    <Payment />
  </div>
  <div className='md:w-1/2'>
 <ShippingForm  />
  </div>
</div>
    </div>
  )
}

export default CheckOut