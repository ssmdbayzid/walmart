import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import SearchBar from './SearchBar'
import HeaderIcons from './HeaderIcons'
import { IoMenu } from "react-icons/io5";
import ShoppingCartModal from './ShoppingCartModal';
import useAuth from '../../Hooks/useAuth';
import Menu from './Menu';

const Header = () => {
    const [showSModal, setShowSModal] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const {user} = useAuth()

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
<nav className={` bg-gradient-to-r from-slate-50 via-slate-200 to-yellow-50  `}>
    
    <div className="max-w-[1170px] flex items-center justify-between w-full mx-auto px-4 md:px-0 py-4">
    <a href="/home" className="">
            <img src={logo} className="h-12" alt="Flowbite Logo" />            
        </a>
    <div className='flex gap-3 md:w-3/5'>
    <ul className={` hidden md:flex text-gray-700 w-full h-8 items-center  font-medium mt-0 space-x-8 rtl:space-x-reverse text-md`}>
    <li>    
                    <a href="/" className="h-full  font-medium  hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/products" className="h-full  font-medium  hover:underline">Products</a>
                </li>
                <li>
                    <a href="#" className="h-full  font-medium  hover:underline">About</a>
                </li>
                <li>
                    <a href="#" className="h-full  font-medium  hover:underline">Contact</a>
                </li>
              {user &&  <li>
                    <a href="#" className="h-full  font-medium  hover:underline">Dashboard</a>
                </li>}
    </ul>
    <HeaderIcons setOpenMenu={setOpenMenu} openMenu={openMenu} setShowSModal={setShowSModal} showSModal={showSModal} />
    </div>
    </div>
</nav>

<div className={`absolute min-h-screen z-[99] bg-gray-300 w-4/5 overflow-y-auto ${openMenu ? "translate-x-0" : "-translate-x-full"} transition-transform transform ease-in-out duration-300 md:hidden`}>
  <Menu  />
</div>

{/* className={`absolute bg-gray-800 text-green-100 w-56 min-h-screen overflow-y-auto transition-transform transform
   ${openMenu ? "translate-x-0" : "-translate-x-full"} ease-in-out duration-300"
  id="sidebar`} */}


{showSModal && <ShoppingCartModal setShowSModal={setShowSModal} showSModal={showSModal} />}
</div>
  )
}

export default Header