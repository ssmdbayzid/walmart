import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.png'
import useAuth from '../../Hooks/useAuth';
import { FaSignOutAlt } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { HiMiniUsers } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";

const SideBar = ({showSideBar, setShowSideBar}) => {

const {user, logOut} = useAuth()

console.log(user)
  return (
    <aside
  id="sidebar-multi-level-sidebar"
  className={`absolute top-0 left-0 z-40 w-64 md:h-[81vh] transition-transform ${!showSideBar ?"-translate-x-full" : "translate-x-0"} sm:translate-x-0 bg-white`}
  aria-label="Sidebar"
>
  <div className=" relative border h-full px-3 py-4 overflow-y-auto bg-gray-150 dark:bg-gray-800">
  <div 
  onClick={()=>setShowSideBar(!showSideBar)}
  className='absolute right-2 bg-blue-500 cursor-pointer md:hidden'>
        <IoIosArrowBack className='text-3xl text-white'/>
</div>
    <div className="">
      <div className="mb-6">
        <img src={avatar} alt="" className='w-20 mx-auto'/>
        <p className='text-center font-semibold'>{user?.email}</p>
      </div>
    </div>
    <ul className="space-y-2  font-medium">
    <li>
        <a
          href="/dashboard"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <MdDashboard className='w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 '/>
     
          <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
        </a>
      </li>
      {user?.role ==="admin" ? 
       <>  <li>
       <a
         href="/dashboard/createProduct"
         className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
       >
         <svg
           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="currentColor"
           viewBox="0 0 18 20"
         >
           <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
         </svg>
         <span className="flex-1 ms-3 whitespace-nowrap">Create Product</span>
       </a>
     </li>
    
     <li>
       <a
         href="/dashboard/allOrder"
         className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
       >
        < GoChecklist className='h-6 w-6 text-gray-500 group-hover:text-gray-700' />
         <span className="flex-1 ms-3 whitespace-nowrap">All Orders</span>
       </a>
     </li>
     <li>
       <a
         href="/dashboard/allProducts"
         className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
       >
         <svg
           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="currentColor"
           viewBox="0 0 18 20"
         >
           <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
         </svg>
         <span className="flex-1 ms-3 whitespace-nowrap">All Products</span>
       </a>
     </li>
     <li>
       <a
         href="/dashboard/allUsers"
         className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
       >
         <HiMiniUsers className='w-6 h-6 text-gray-500 group-hover:text-gray-700' />
         <span className="flex-1 ms-3 whitespace-nowrap">All Users</span>
       </a>
     </li>
     </>
     :
      <>
        {user?.role ==="user" &&
        <>
     <li>
        <a
          href="/dashboard/address"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
          </svg>
          <span className="flex-1 ms-3 whitespace-nowrap">Address</span>
        </a>
      </li>
      <li>
        <a
          href="/dashboard/orders"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
          </svg>
          <span className="flex-1 ms-3 whitespace-nowrap">Order</span>
        </a>
      </li></>}
     </>}    
      
   
      <li>
        <p
        onClick={()=>logOut()}
          className="flex items-center p-2 group cursor-pointer"
        >
        <FaSignOutAlt className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
          <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
        </p>
      </li>
    </ul>
   
  </div>
    
</aside>

  )
}

export default SideBar