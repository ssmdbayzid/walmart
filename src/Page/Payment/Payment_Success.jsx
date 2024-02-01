import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Payment_Success = () => {
 
  return (
    <div className='max-w-[1170px] min-h-[90vh] mx-auto flex items-center justify-center'>
      <div className="flex flex-col  items-center justify-center  ">
      {/* Animation SVG - Replace with your vector image animation */}
      <svg
        className="w-24 h-24 mb-4 text-green-500 animate"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>

      <h1 className="text-3xl whitespace-nowrap font-semibold text-green-700 mb-2">
        Payment Successful
      </h1>

      <p className="text-gray-600 mb-6">Thank you for your purchase!</p>

      <Link to={"/"} className="text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded whitespace-nowrap">
        Continue Shopping
      </Link>
    </div>
    </div>
  )
}

export default Payment_Success