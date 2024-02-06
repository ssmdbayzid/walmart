import React, { useState } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';
import useAuth from '../../Hooks/useAuth';
import { PiSignInFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { CgMenu, CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';


const HeaderIcons = ({setOpenMenu,openMenu, setShowSModal, showSModal}) => {  
  const cart = useSelector((state)=> state.cart)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {user, logOut, loading} = useAuth()

  
  return (
    <div className="flex gap-3 items-center ">
        <div onClick={()=> setShowSModal(!showSModal)} className="relative cursor-pointer">
        <MdOutlineShoppingCart  className="text-2xl text-gray-600" />
        <div className="absolute -top-1 right-0 w-4 h-4  text-sm bg-blue-700 text-white rounded-full flex items-center justify-center">{cart.cartItems.length}</div>   
        </div> 

        <p 
      // onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      className='group flex items-center gap-2 cursor-pointer'>
        <CgProfile className='text-xl text-gray-600' />
      </p>
      {/* // Menu Icon */}
        <p 
      onClick={() => setOpenMenu(!openMenu)}      
      className='group flex items-center gap-2 cursor-pointer'>
        <CgMenu className='text-2xl text-gray-600' />
      </p>

      {/* ----  Drop Down Mmenu -----*/}
      {isDropdownOpen &&
        
       <div className="fixed z-[999] max-w-48 w-full bg-slate-100 right-6 top-14 rounded-lg ">
        <div className="px-4 py-3">
       
    {user &&  <span className="block text-sm  text-center text-gray-500 truncate dark:text-gray-400">{user.email}</span>}
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
         {user ? <> <li onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
          className='cursor-pointer'
          >
            <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          
          <li onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
          >
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li></>
          : <> <li onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
          className='cursor-pointer'
          >
            <a href="/login" className="block text-center hover:bg-blue-300 px-4 py-2 text-sm text-gray-700 bg-gray-200 mb-4 mx-2 rounded-md">Log In</a>
          </li>
          
          <li onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
          >
            <a href="/signup" className="block text-center hover:bg-blue-300 px-4 py-2 text-sm text-gray-700 bg-gray-200  mx-2 rounded-md">Sign up</a>
          </li></>}
         
        </ul>
      </div>}
            
    </div>
  )
}

export default HeaderIcons;