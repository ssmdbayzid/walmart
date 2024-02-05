import React from 'react'
import { GoChecklist } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegCommentDots } from "react-icons/fa";

const DashboardIndex = () => {
  return (
    <div className="px-2 md:px-5">
    <div className='text-center text-2xl font-bold mt-10'>Dashboard Index</div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mx-10 mt-10">
    <div className="group w-full py-8 text-center border-gray-100 border-2">
      <a href="/dashboard/orders">
    <GoChecklist className='text-center mx-auto text-gray-500 group-hover:text-gray-600 text-5xl' />    
    <p className='text-gray-600 font-semibold mt-2'>Order</p>
    </a>
    </div>
    
    <div className="group w-full py-8 text-center border-gray-100 border-2">
    <a href="/dashboard/address">
    <IoLocationOutline className='text-center mx-auto text-gray-500 group-hover:text-gray-600 text-5xl' />    
    <p className='text-gray-600 font-semibold mt-2'>Address</p>
    </a>
    </div>
    <div className="group w-full py-8 text-center border-gray-100 border-2">
    <a href="dashboard/profile">
    <CgProfile className='text-center mx-auto text-gray-500 group-hover:text-gray-600 text-5xl' />    
    <p className='text-gray-600 font-semibold mt-2'>Profile</p>
    </a>
    </div>
    <div className="group w-full py-5 text-center border-gray-100 border-2">
    <a href="/dashboard/feedack">
    <FaRegCommentDots className='text-center mx-auto text-gray-500 group-hover:text-gray-600 text-5xl' />    
    <p className='text-gray-600 font-semibold mt-2'>Comment</p>
    </a>
    </div>

    </div> {/* Grid Close */}
    </div>
  
  
  )
}

export default DashboardIndex