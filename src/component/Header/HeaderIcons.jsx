import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
const HeaderIcons = () => {
  return (
    <div className="flex gap-3 items-center">
        <div className="relative">
        <MdOutlineShoppingCart className="text-2xl" />
        <div className="absolute -top-1 right-0 w-4 h-4  text-sm bg-blue-700 text-white rounded-full flex items-center justify-center">1</div>   
        </div>
        
            <button
            className="text-white hover:text-blue-700 hover:font-light bg-blue-700 hover:bg-transparent hover:border-2 hover:border-blue-700 px-4 py-1 rounded-md"
            >Log In</button>
            <button
            className="  border-2 bg-yellow-500 text-white px-4 py-1 rounded-md"
            >Sign Up</button>
            {/* <button
            className="hover:text-white hover:font-light border-2 border-blue-700 text-blue-700 font-light hover:bg-blue-700 px-4 py-1 rounded-md"
            >Sign Up</button> */}
        
    </div>
  )
}

export default HeaderIcons