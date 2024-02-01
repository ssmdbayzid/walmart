import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import SearchBar from './SearchBar'
import HeaderIcons from './HeaderIcons'
import { IoMenu } from "react-icons/io5";
import ShoppingCartModal from './ShoppingCartModal';

const Header = () => {
    const [showSModal, setShowSModal] = useState(false)
  return (
    <div className="">   
<nav className=" py-2 bg-gradient-to-r from-yellow-200 via-slate-500 to-blue-500 backdrop-blur-xl">
    <div className="max-w-[1170px] flex items-center justify-between w-full mx-auto">
    <a href="https://flowbite.com" className="">
            <img src={logo} className="h-12" alt="Flowbite Logo" />            
        </a>
    <div className='flex gap-3 w-3/5'>
    <ul className="flex w-full h-8 items-center  font-medium mt-0 space-x-8 rtl:space-x-reverse text-md">
    <li>    
                    <a href="/" className="h-full  font-medium text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/products" className="h-full  font-medium text-white hover:underline">Products</a>
                </li>
                <li>
                    <a href="#" className="h-full  font-medium text-white hover:underline">Team</a>
                </li>
                <li>
                    <a href="#" className="h-full  font-medium text-white hover:underline">Features</a>
                </li>
    </ul>
    <HeaderIcons setShowSModal={setShowSModal} showSModal={showSModal} />
    </div>
    </div>
</nav>
{showSModal && <ShoppingCartModal setShowSModal={setShowSModal} showSModal={showSModal} />}
</div>
  )
}

export default Header