import React, { useState } from 'react'
import SideBar from './SideBar'
import { RiMenu3Fill } from "react-icons/ri";
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
const Dashboard = () => {
    const [showSideBar, setShowSideBar] = useState(false)
  return (
    <div className="">
      <div className="bg-[url('https://cdn.pixabay.com/photo/2018/01/11/21/27/desk-3076954_1280.jpg')] py-3 bg-cover bg-no-repeat w-full">
    <h1 className='text-center text-2xl font-bold'>Account Details</h1>
      </div>
    <div className="relative flex  ">
    <div>
        <button 
        onClick={()=> setShowSideBar(!showSideBar)}
        className=' p-1 ml-5 mt-5 md:hidden'>
    <RiMenu3Fill className=' text-2xl text-slate-400' />
        </button>
  
    {showSideBar && <SideBar className="ease-in-out transition-all duration-300" setShowSideBar={setShowSideBar} showSideBar={showSideBar} />}
    <SideBar className="hidden md:block " />
    </div>
    <div className=" sm:ml-64 w-full">
      <Outlet />
      </div>    
    </div>
    </div>
  )
}

export default Dashboard