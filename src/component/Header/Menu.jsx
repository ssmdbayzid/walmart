import React from 'react'
import logo from '../../assets/logo.png'
import useAuth from '../../Hooks/useAuth'
import { IoHomeOutline } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
const Menu = () => {
  
  const {user} = useAuth()
  return (
    <>
    
        
          <div
            className="w-full z-40 min-h-screen  bg-gray-200 shadow flex-col justify-between sm:hidden transition duration-150 ease-in-out"
            id="mobile-nav"
          >
            
          
            <div className="px-8">
              <div className="h-16 w-full flex items-center">
                <img src={logo} alt="" className='w-44' />
              </div>
              <ul className="mt-12">
                <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                  <a
                    href="/home"
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <IoHomeOutline className='w-6 h-6' />
                    <span className="text-lg ml-2">Home</span>
                  </a>
                 
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-700 cursor-pointer items-center mb-6">
                  <a
                    href="/products"
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                  >
                   <MdProductionQuantityLimits className='h-6 w-6' />
                    <span className="text-lg ml-2">Products</span>
                  </a>
                  
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-700 cursor-pointer items-center mb-6">
                  <a
                    href="/about"
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                  >
                   <TbArrowRoundaboutRight className='w-6 h-6' />
                    <span className="text-lg ml-2">About</span>
                  </a>
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-700 cursor-pointer items-center mb-6">
                  <a
                    href="/contact"
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                  >
                  < MdOutlineContactPhone className='w-6 h-6'/>
                    <span className="text-lg ml-2">Contact</span>
                  </a>
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-700 cursor-pointer items-center mb-6">
                  <a
                    href="/dashboard"
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                  >
                  < MdOutlineSpaceDashboard className='w-6 h-6' />
                    <span className="text-lg ml-2">Dashboard</span>
                  </a>
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