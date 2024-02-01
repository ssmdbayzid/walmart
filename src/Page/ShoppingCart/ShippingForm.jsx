import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const initialFormData = {
  name: "",
  mobile: "",
  address: "",
  town:"",
  region:"",
}
const ShippingForm = () => {
  const [formData, setFormData] = useState(localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : initialFormData)  
  const [open, setOpen] = useState(false)

  const handleOnChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})    
  }
  
  // ------------ Handle Form Submit ----------------
    const handleFormData = (event) =>{
        event.preventDefault()                            
        setOpen(true)
        localStorage.setItem("shippingAddress", JSON.stringify(formData))
    }
  return (
    <div className='w-full'>

    
  { !open ?
    <div className="mt-10 rounded-3xl bg-gray-100/70 py-3 px-4 lg:mt-8">
   <form onSubmit={handleFormData}>
    <p className="text-xl font-medium text-center">Payment Details</p>
    <p className="text-gray-400 text-center">Complete your order billing & shipping details.</p>
    <div className="">
      {/* --- Name ----- */}
      <label htmlFor="name" className="mt-4 mb-2 block text-sm font-medium">Name</label>
      <div className="relative">
        <input
        onChange={handleOnChange}
        value={formData.name}
        type="text" id="name" name="name" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Name" required/>        
      </div>
      {/* -------- Mobile No --------  */}
      <label htmlFor="number" className="mt-4 mb-2 block text-sm font-medium">Mobile</label>
      <div className="relative">
        <input
        onChange={handleOnChange}
        value={formData.mobile}

        type="number" id="number" name="mobile" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Mobile" required />        
      </div>
      {/* -------- Address --------  */}
      <label htmlFor="address" className="mt-4 mb-2 block text-sm font-medium">Address</label>
      <div className="relative">
        <textarea 
        onChange={handleOnChange}
        value={formData.address}
        rows={2} type="text" id="address" name="address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Address" required/>        
      </div>
      {/* ------------ City & Region Start--------  */}
      <div className='flex w-full gap-2'>
      <div className='w-1/2'>
      <label htmlFor="town" className="mt-4 mb-2 block text-sm font-medium">Town / City</label>
      <div className="relative">
        <input
        onChange={handleOnChange} value={formData.town} 
        type="text" id="town" name="town" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Town / City" required />        
      </div>
      </div>
      <div className='w-1/2'>
      <label htmlFor="region" className="mt-4 mb-2 block text-sm font-medium">Region (Optional)</label>
      <div className="relative">
        <input
        onChange={handleOnChange}
        value={formData.region}
        type="text" id="region" name="region" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your Region" />        
      </div>
      </div>
      </div>
      {/* ------------ City & Region End--------  */}                          
    </div>
    <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Save</button>
    </form>
    </div> :
    <div className="mt-10 w-4/5 border lg:mt-20 ">      
      
      <h1 className='text-center text-lg bg-gray-100 py-1.5'>Shipping Address</h1>

      {/* --------------------- Table --------------- */}

      
<table className="mx-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">

<tbody>

 <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">        
        <th scope="row" className="text-left ps-8 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
            Name
        </th>
        <td className=" ">
            {formData.name}
        </td>       
    </tr>  
 <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">        
        <th scope="row" className="text-left ps-8 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
            Mobile
        </th>
        <td className=" ">
            {formData.mobile}
        </td>       
    </tr>  
 <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">        
        <th scope="row" className="text-left px-8 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
            Address
        </th>
        <td className=" ">
            {formData.address}
        </td>       
    </tr>  
 <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">        
        <th scope="row" className="text-left px-8 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
            Town
        </th>
        <td className=" ">
            {formData.town}
        </td>       
    </tr>  
    {formData.region && 
    <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">        
        <th scope="row" className="text-left px-8 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
            Town
        </th>
        <td className=" ">
            {formData.region}
        </td>       
    </tr> }
    <tr className="w-full border-b ">   
    <td colSpan={2}>
    <button onClick={()=> setOpen(!open)}
      className='w-4/5 ms-5 py-2 mb-5 bg-blue-200 text-blue-600'>Edit</button>
    </td>     
    </tr> 
</tbody>
</table>
  </div>}
  </div>
  )
}

export default ShippingForm


