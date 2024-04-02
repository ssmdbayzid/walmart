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
    icon: <GoChecklist className=' mx-auto text-gray-500 group-hover:text-gray-600 text-5xl' />
  },
    {
    display: "Address",
    path: "/dashboard/address",
    icon: < IoLocationOutline className='mx-auto text-center text-gray-500 group-hover:text-gray-600 text-5xl' />
  },
    {
    display: "Profile",
    path: "/dashboard/profile",
    icon: <CgProfile className=' mx-auto text-gray-500 group-hover:text-gray-600 text-5xl' />
  },
]

const adminContent = [
  {
  display: "Create Product",
  path: "/dashboard/createProduct",
  icon: <MdOutlineProductionQuantityLimits className='mx-auto text-gray-500 group-hover:text-gray-600 text-5xl' />
},
  {
  display: "All Products",
  path: "/dashboard/allproducts",
  icon: <MdOutlineProductionQuantityLimits className='mx-auto text-gray-500 group-hover:text-gray-600 text-5xl' />
},
  {
  display: "All Users",
  path: "/dashboard/allusers",
  icon: <LuUsers className='mx-auto text-gray-500 group-hover:text-gray-600 text-5xl' />
},
  {
  display: "All Orders",
  path: "/dashboard/allorder",
  icon: <LuMenuSquare className='mx-auto text-gray-500 group-hover:text-gray-600 text-5xl'/>
},
]
  return (
    <div className="px-2 md:px-5">
    {
      loading ? <Loader /> :
      <>
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mx-10 mt-10">

      { user && user?.role  === "user" ? userContent.map((link) =>
      <Link to={link.path} key={link.display} className="group flex flex-col justify-center w-full text-center py-8 border-gray-100 border-2">      
      {link.icon}
    
    <p className='text-gray-600 font-semibold mt-2'>{link.display}</p>
    
    </Link>) : <>
      {user?.role === "admin" && adminContent.map((link) =>
      <Link to={link.path} key={link.display} className="group flex flex-col justify-center w-full py-8 text-center border-gray-100 border-2">
      <div className='flex flex-col justify-center'>
      {link.icon}
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