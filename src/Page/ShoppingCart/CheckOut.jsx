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
    <div className='max-w-[1170px] w-full mx-auto'>     
     <div className='px-2 pt-14 w-full md:px-10'>
   <CheckOutSummary className=""/>  
</div>

<div className=" flex w-full  flex-col  md:flex-row md:mt-16 md:px-10">  
<div className='w-full md:w-1/2 '>
 <ShippingForm  className=''/>
</div>
<div className='w-full md:w-1/2 '>
<Payment className="" />
</div>
  </div>
 
    
</div>    
  )
}

export default CheckOut