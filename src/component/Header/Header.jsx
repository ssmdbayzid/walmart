import React from 'react'
import logo from '../../assets/logo.png'
import SearchBar from './SearchBar'
import HeaderIcons from './HeaderIcons'
import { IoMenu } from "react-icons/io5";
import ShoppingCartModal from './ShoppingCartModal';

const Header = () => {
  return (
    <div className="">
    <nav className="max-w-[1170px] bg-white border-gray-200  mx-auto">
    <div className="flex flex-wrap justify-between items-center mx-auto  py-4">
        <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-12" alt="Flowbite Logo" />            
        </a>
        <SearchBar />
        <HeaderIcons />
    </div>
</nav>
<nav className="bg-[#0870CC]  ">
    <div className="flex max-w-[1170px] mx-auto">
            <div className="flex w-[20%] mr-2 items-center">
                <p className="text-white mr-3">All Categories</p>
                <IoMenu className="text-white text-2xl" />
            </div>
            <ul className="flex w-full h-8 items-center  font-medium mt-0 space-x-8 rtl:space-x-reverse text-md">
                <li>
                    <a href="#" className="h-full  font-light hover:bg-blue-300 text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" className="h-full  font-light hover:bg-blue-300 text-white hover:underline">Company</a>
                </li>
                <li>
                    <a href="#" className="h-full  font-light hover:bg-blue-300 text-white hover:underline">Team</a>
                </li>
                <li>
                    <a href="#" className="h-full  font-light hover:bg-blue-300 text-white hover:underline">Features</a>
                </li>
            </ul>
            </div>
</nav>
<ShoppingCartModal />
</div>
  )
}

export default Header