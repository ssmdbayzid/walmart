import React, { useState } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';
import useAuth from '../../Hooks/useAuth';
import { PiSignInFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';


const HeaderIcons = ({setShowSModal, showSModal}) => {  
  const cart = useSelector((state)=> state.cart)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {user, logOut, loading} = useAuth()

  
  return (
    <div className="flex gap-3 items-center">
        <div onClick={()=> setShowSModal(!showSModal)} className="relative cursor-pointer">
        <MdOutlineShoppingCart  className="text-2xl" />
        <div className="absolute -top-1 right-0 w-4 h-4  text-sm bg-blue-700 text-white rounded-full flex items-center justify-center">{cart.cartItems.length}</div>   
        </div> 

        <p 
      onClick={() => setIsDropdownOpen(true)}
    //   onMouseLeave={() => setIsDropdownOpen(false)}
      className='group flex items-center gap-2 cursor-pointer'>
        <CgProfile className='text-xl' />
      </p>
      {isDropdownOpen &&
        <div class="absolute top-10 z-[999] right-8 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div> }
            
    </div>
  )
}

export default HeaderIcons;