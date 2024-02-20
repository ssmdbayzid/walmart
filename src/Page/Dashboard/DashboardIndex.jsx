import React from 'react'
import { GoChecklist } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { LuMenuSquare } from "react-icons/lu";
import useAuth from '../../Hooks/useAuth';
import Loader from '../../component/Loader';
import { Link } from 'react-router-dom';


const DashboardIndex = () => {

  const {user, loading} = useAuth()

  if(loading) return <Loader />
  const userContent = [
    {
    display: "Orders",
    path: "/dashboard/orders",
    icon: <GoChecklist className='mr-[35%] text-gray-500 group-hover:text-gray-600 text-5xl' />
  },
    {
    display: "Address",
    path: "/dashboard/address",
    icon: < IoLocationOutline className='mr-[35%] text-gray-500 group-hover:text-gray-600 text-5xl' />
  },
    {
    display: "Profile",
    path: "/dashboard/profile",
    icon: <CgProfile className='mr-[35%] text-gray-500 group-hover:text-gray-600 text-5xl' />
  },
]

const adminContent = [
  {
  display: "Create Product",
  path: "/dashboard/createProduct",
  icon: <MdOutlineProductionQuantityLimits className='mr-[35%] text-gray-500 group-hover:text-gray-600 text-5xl' />
},
  {
  display: "All Products",
  path: "/dashboard/allproducts",
  icon: <MdOutlineProductionQuantityLimits className='mr-[35%] text-gray-500 group-hover:text-gray-600 text-5xl' />
},
  {
  display: "All Users",
  path: "/dashboard/allusers",
  icon: <LuUsers className='mr-[35%] text-gray-500 group-hover:text-gray-600 text-5xl' />
},
  {
  display: "All Orders",
  path: "/dashboard/allorder",
  icon: <LuMenuSquare className='mr-[35%] text-gray-500 group-hover:text-gray-600 text-5xl'/>
},
]
  return (
    <div className="px-2 md:px-5">
    {
      loading ? <Loader /> :
      <>
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mx-10 mt-10">

      { user && user?.role  === "user" ? userContent.map((link) =>
      <div key={link.display} className="group w-full py-8 text-center border-gray-100 border-2">
      <a href={link.path}>

      <p className='text-center mx-auto text-gray-500 group-hover:text-gray-600 text-5xl'>{link.icon}</p>
    {/* <GoChecklist className='' />     */}
    <p className='text-gray-600 font-semibold mt-2'>{link.icon}</p>
    </a>
    </div>) : <>
      {user.role === "admin" && adminContent.map((link) =>
      <Link to={link.path} key={link.display} className="group w-full py-8 text-center border-gray-100 border-2">
      <div className='flex flex-col justify-center'>
     <p className='ps-[35%]'>{link.icon}</p> 
    <p className='text-gray-600 font-semibold mt-2'>{link.display}</p>
      </div>

      
    
    </Link>)}
    </>}
      
    
    
    </div>
{/*     
    <div className="group w-full py-8 text-center border-gray-100 border-2">
    <a href="/dashboard/address">
    <IoLocationOutline className='text-center mx-auto text-gray-500 group-hover:text-gray-600 text-5xl' /> 

    <p className='text-gray-600 font-semibold mt-2'>Address</p>
    </a>
    </div>
    <div className="group w-full py-8 text-center border-gray-100 border-2">
    <a href="dashboard/profile">
    <CgProfile className='text-center mx-auto text-gray-500 group-hover:text-gray-600 text-5xl' />    
    <p className='text-gray-600 font-semibold mt-2'>Profile</p>
    </a>
    </div>
    <div className="group w-full py-5 text-center border-gray-100 border-2">
    <a href="/dashboard/feedack">
    <FaRegCommentDots className='text-center mx-auto text-gray-500 group-hover:text-gray-600 text-5xl' />    
    <p className='text-gray-600 font-semibold mt-2'>Comment</p>
    </a>
    </div> */}

    </>
    }
     {/* Grid Close */}
    </div>
  
  
  )
}

export default DashboardIndex