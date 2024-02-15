import React from 'react'
import logo from '../../assets/logo.png'
import useAuth from '../../Hooks/useAuth'
import { IoHomeOutline } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrLogout } from "react-icons/gr";



const Menu = () => {
  
  const {user, logOut} = useAuth()
  return (
    <>
    
        
          <div
            className="w-full z-40 min-h-screen  bg-gray-200 shadow flex-col justify-between sm:hidden transition duration-150 ease-in-out"
            id="mobile-nav"
          >
            
          
            <div className="relative">
              <div className="h-16 ps-8 w-full flex items-center">
                <img src={logo} alt="" className='w-44' />
              </div>
              <ul className="mt-12">
                <li className="flex w-full justify-between group cursor-pointer items-center mb-4 hover:bg-gray-300 py-2 rounded-md px-8">
                  <a
                    href="/home"
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white text-gray-500 transition duration-75 group-hover:text-gray-900"
                  >
                    <IoHomeOutline className='w-6 h-6' />
                    <span className="text-lg ml-2">Home</span>
                  </a>
                 
                </li>
                <li className="flex w-full justify-between group cursor-pointer items-center mb-4 hover:bg-gray-300 py-2 rounded-md px-8">
                  <a
                    href="/products"
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white text-gray-500 transition duration-75 group-hover:text-gray-900"
                  >
                   <MdProductionQuantityLimits className='h-6 w-6' />
                    <span className="text-lg ml-2">Products</span>
                  </a>
                  
                </li>
                <li className="flex w-full justify-between group cursor-pointer items-center mb-4 hover:bg-gray-300 py-2 rounded-md px-8">
                  <a
                    href="/about"
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white text-gray-500 transition duration-75 group-hover:text-gray-900"
                  >
                   <TbArrowRoundaboutRight className='w-6 h-6' />
                    <span className="text-lg ml-2">About</span>
                  </a>
                </li>
                <li className="flex w-full justify-between group cursor-pointer items-center mb-4 hover:bg-gray-300 py-2 rounded-md px-8">
                  <a
                    href="/contact"
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white text-gray-500 transition duration-75 group-hover:text-gray-900"
                  >
                  < MdOutlineContactPhone className='w-6 h-6'/>
                    <span className="text-lg ml-2">Contact</span>
                  </a>
                </li>
                <li className="flex w-full justify-between group cursor-pointer items-center mb-8 hover:bg-gray-300 py-2 rounded-md px-8">
                  <a
                    href="/dashboard"
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white text-gray-500 transition duration-75 group-hover:text-gray-900"
                  >
                  < MdOutlineSpaceDashboard className='w-6 h-6' />
                    <span className="text-lg ml-2">Dashboard</span>
                  </a>
                </li>             
                <li 
                onClick={()=>logOut()}
                className="flex w-4/5 ml-8 justify-between group cursor-pointer items-center mb-4 bg-blue-500 text-white  hover:bg-blue-600 py-2 rounded-md px-8">
                  <button                    
                    className="flex items-center focus:outline-none focus:ring-2  focus:ring-white"
                  >
                  < GrLogout className='w-6 h-6' />
                    <span className="text-lg ml-2">Log Out</span>
                  </button>
                </li>             
              </ul>              
            </div> 

          </div>
          {/* Sidebar ends */}
          {/* Remove class [ h-64 ] when adding a card block */}
          
        
  </>
  
  )
}

export default Menu