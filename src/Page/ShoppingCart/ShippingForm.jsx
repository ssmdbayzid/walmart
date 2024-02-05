import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'


const ShippingForm = () => {
  const {loading, user} = useAuth()
  
  return (
    <div className='pt-10 w-full'>

    {/* --------- Billing Address Content--------- */}

    { loading ? <><p>Loading ...</p></> : <>
      {user && <div className="mt-10 w-full  px-5 md:px-10  ">    
      <div className="w-full border border-dashed mb-10 md:mb-0">
      <div className='p-2'>
      <h1 className='text-xl text-center bg-slate-100 font-semibold'>Shipping Address</h1>
      <div className="ps-2 py-1">
        <div className="flex justify-between items-center">
      <p className='font-bold text-xl'>{user?.shippingAddress?.name}</p>
      <p    
      className='text-blue-600 inline-block border-blue-400 border me-2 font-bold  px-2 py-1 cursor-pointer'>
        Edit</p>
        </div>
      <p>{user?.shippingAddress?.mobile}</p>
      <p>{user?.shippingAddress?.address}</p>
      <p>{user?.shippingAddress?.town}</p>
      <p>{user?.shippingAddress?.region}</p>

     

      </div>
      </div>
    </div>    
    
    <div className="w-full border border-dashed">
      <div className='p-2'>
      <h1 className='text-xl text-center bg-slate-100 font-semibold'>Billing Address</h1>
      <div className="ps-2 py-1">
      <div className="flex justify-between items-center">
      <p className='font-bold text-xl'>{user?.billingAddress?.name}</p>
      <p    
      className='text-blue-600 inline-block border-blue-400 border me-2 font-bold  px-2 py-1 cursor-pointer'>
        Edit</p>
        </div>
      <p>{user?.billingAddress?.mobile}</p>
      <p>{user?.billingAddress?.address}</p>
      <p>{user?.billingAddress?.town}</p>
      <p>{user?.billingAddress?.region}</p>      
      <div className="div">            
      </div>
      </div>
      </div>
    </div> </div>  }
    </>}    
  </div>
  )
}

export default ShippingForm


