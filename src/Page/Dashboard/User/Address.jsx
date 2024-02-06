import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'


const shippingAddressData = {
  name: "",
  mobile: "",
  address: "",
  town:"",
  region:"",
}
const billingAddressData = {
  name: "",
  mobile: "",
  address: "",
  town:"",
  region:"",
}
const Address = () => {
  const {user, loading} = useAuth()

  // --------- Shipping Address -------- initialState--------
  const [shippingAddress, setShippingAddress] = useState(shippingAddressData)  

  // --------- Billing Address -------- initialState--------
  const [billingAddress, setBillingAddress] = useState( billingAddressData)  
 
  // ------------ Set Address Type ------------
  const [addressType, setAddressType] = useState("shipping")
  const [open, setOpen] = useState(false)
  

  useEffect(()=>{
    if(user?.shippingAddress){
      setShippingAddress(user?.shippingAddress)
      setOpen(true)
    }
    if(user?.billingAddress){
      setBillingAddress(user?.billingAddress)
      setOpen(true)
    }
  },[user])

  
  const handleOnChange = e => {
    if(addressType == "shipping"){
      setShippingAddress({...shippingAddress, [e.target.name]: e.target.value})    
    }else{
      setBillingAddress({...billingAddress, [e.target.name]: e.target.value})    
    }
  }
  

  // ------------ Handle Form Submit ----------------
    const handleFormData = (event) =>{
        event.preventDefault()                            
        setOpen(true)
        if(addressType == "shipping"){
          if(event.target.ship_bill_Address.checked === true){
            axios.put("http://localhost:8000/api/v1/user/65be544bce718329f7e80b76",{
              shippingAddress:shippingAddress, billingAddress: shippingAddress})
            .then(res=> console.log(res))
            .catch(err=> console.log(err))
            localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress))
          }else{
            axios.put("http://localhost:8000/api/v1/user/65be544bce718329f7e80b76",{shippingAddress:shippingAddress})
            .then(res=> console.log(res))
            .catch(err=> console.log(err))
            localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress))
          }

        }else{
          localStorage.setItem("billingAddress", JSON.stringify(billingAddress))
          axios.put("http://localhost:8000/api/v1/user/65be544bce718329f7e80b76",{billingAddress:billingAddress})
          .then(res=> console.log(res))
          .catch(err=> console.log(err))
        }
    }
  return (
    <div className='w-full'>

    
  { !open ?
    <div className="rounded-xl w-4/5 mx-auto py-3 px-4 lg:mt-8 bg-gray-200">

      {/* -------------- Billing & Shipping Address Form ----------- */}
   <form onSubmit={handleFormData}>
    <p className="text-xl font-medium text-center capitalize">{addressType} Address</p>    
    <div className="">
      {/* --- Name ----- */}
      <label htmlFor="name" className="mt-4 mb-2 block text-sm font-medium">Name</label>
      <div className="relative">
        <input
        onChange={handleOnChange}
        value={addressType == "shipping" ? shippingAddress.name
        : billingAddress.name }
        type="text" id="name" name="name" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Name" required/>        
      </div>
      {/* -------- Mobile No --------  */}
      <label htmlFor="number" className="mt-4 mb-2 block text-sm font-medium">Mobile</label>
      <div className="relative">
        <input
        onChange={handleOnChange}
        value={addressType == "shipping" ? shippingAddress.mobile
        : billingAddress.mobile }

        type="number" id="number" name="mobile" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Mobile" required />        
      </div>
      {/* -------- Address --------  */}
      <label htmlFor="address" className="mt-4 mb-2 block text-sm font-medium">Address</label>
      <div className="relative">
        <textarea 
        onChange={handleOnChange}
        value={addressType == "shipping" ? shippingAddress.address
      : billingAddress.address}
        rows={2} type="text" id="address" name="address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Address" required/>        
      </div>
      {/* ------------ City & Region Start--------  */}
      <div className='flex w-full gap-2'>
      <div className='w-1/2'>
      <label htmlFor="town" className="mt-4 mb-2 block text-sm font-medium">Town / City</label>
      <div className="relative">
        <input
        onChange={handleOnChange} value={addressType == "shipping" ? shippingAddress.town
      : billingAddress.town} 
        type="text" id="town" name="town" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Town / City" required />        
      </div>
      </div>
      <div className='w-1/2'>
      <label htmlFor="region" className="mt-4 mb-2 block text-sm font-medium">Region (Optional)</label>
      <div className="relative">
        <input
        onChange={handleOnChange}
        value={addressType == "shipping" ? shippingAddress.region
        : billingAddress.region}
        type="text" id="region" name="region" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Region" />        
      </div>
      </div>
      </div>
      {/* ------------ City & Region End--------  */}                          
    </div>
    <div className="flex gap-3 pt-5 capitalize items-center">
      <input 
      type="checkbox" name="ship_bill_Address" id="" className='outline outline-slate-400 rounded-full p-1' />
      <p className='text-slate-600 font-semibold'>The shipping & billing address are same</p>
    </div>
    <div className="flex justify-between gap-5">
    <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Save</button>
    <p
    onClick={()=>setOpen(!open)} 
    className="cursor-pointer text-center mt-4 mb-8 w-full rounded-md bg-red-600 px-6 py-3 font-medium text-white">Cancel</p>
    </div>
    </form>
    </div>

    :
     <div className="mt-10 md:flex justify-between w-full md:gap-10 px-5 md:px-10  lg:mt-20 ">     
    {/* --------- Billing Address Content--------- */}

    <div className="w-full border border-dashed mb-10 md:mb-0">
      <div className='p-2'>
      <h1 className='text-xl text-center bg-slate-100 font-semibold'>Shipping Address</h1>
      <div className="ps-2 py-1">
      <p className='font-bold text-xl'>{shippingAddress?.name}</p>
      <p>{shippingAddress?.mobile}</p>
      <p>{shippingAddress?.address}</p>
      <p>{shippingAddress?.town}</p>
      <p>{shippingAddress?.region}</p>

      <p 
      onClick={()=>{
        setAddressType("shipping")
        setOpen(!open);
      }}
      className='text-blue-600 inline-block border-blue-400 border font-bold mt-5 px-2 py-1 cursor-pointer'>
        Edit</p>

      </div>
      </div>
    </div>    

    {/* --------- Billing Address Content--------- */}
    <div className="w-full border border-dashed">
      <div className='p-2'>
      <h1 className='text-xl text-center bg-slate-100 font-semibold'>Billing Address</h1>
      <div className="ps-2 py-1">
      <p className='font-bold text-xl'>{billingAddress?.name}</p>
      <p>{billingAddress?.mobile}</p>
      <p>{billingAddress?.address}</p>
      <p>{billingAddress?.town}</p>
      <p>{billingAddress?.region}</p>
      
      <div className="div">
      <p 
      onClick={()=>{
        setOpen(!open);
        setAddressType("billing")
      }}
      className='text-blue-600 inline-block border-blue-400 border font-bold mt-5 px-2 py-1 cursor-pointer'>
        Edit</p>
      
      </div>
      </div>
      </div>
    </div>    
  </div>}
  </div>
  )
}

export default Address


