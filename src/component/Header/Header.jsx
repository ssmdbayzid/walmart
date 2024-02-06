import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import SearchBar from './SearchBar'
import HeaderIcons from './HeaderIcons'
import { IoMenu } from "react-icons/io5";
import ShoppingCartModal from './ShoppingCartModal';

const Header = () => {
    const [showSModal, setShowSModal] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleOnchage = () =>{
        if(window.scrollY >= 60){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    window.addEventListener("scroll", handleOnchage)

  return (
    <div className={`${scroll ? "fixed z-[999] shadow-lg" : "relative"} top-0 w-full `}>   
<nav className={` bg-white  `}>
    
    <div className="max-w-[1170px] flex items-center justify-between w-full mx-auto py-4">
    <a href="/home" className="">
            <img src={logo} className="h-12" alt="Flowbite Logo" />            
        </a>
    <div className='flex gap-3 w-3/5'>
    <ul className={`flex  text-gray-700 w-full h-8 items-center  font-medium mt-0 space-x-8 rtl:space-x-reverse text-md`}>
    <li>    
                    <a href="/" className="h-full  font-medium  hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/products" className="h-full  font-medium  hover:underline">Products</a>
                </li>
                <li>
                    <a href="#" className="h-full  font-medium  hover:underline">Team</a>
                </li>
                <li>
                    <a href="#" className="h-full  font-medium  hover:underline">Features</a>
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