import React from 'react'
// import { products } from '../../assets/data/ItemsCategory'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { products } from '../../assets/data/ItemsCategory';


const ProductList = () => {
    
  return (
    <div>
        <div>
        <p className="text-xl font-bold">Recommanded</p>
        <div className="flex gap-4 mb-3 my-2">
        {products && products.map((item, index)=> <button key={index} className='border-2 hover:bg-blue-300 text-blue-600 font-semibold px-3 py-1 rounded-sm'>
                {item.company}
            </button> )}
        </div>
        </div>
        
          <div class="grid md:grid-cols-3 gap-3 ">
                    {products && products.map((item, index)=>
                        <div key={index} class="border border-gray-800 dark:border-gray-700">
                            <div class="relative bg-gray-200 ">      
                            <div className='h-60 '>
                            <img src={item.category.image} alt=""
                            class=" w-full h-full mx-auto " />                              
                            </div>                        
                            </div>
                            <div class="p-3 ">
                                <div class="flex items-center justify-between gap-2 mb-2">
                                    <h3 class="text-xl font-medium dark:text-gray-400">
                                        {item.title}
                                    </h3>
                                    <ul class="flex">
                                        <li>
                                            <a href=" #">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    class="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star "
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    class="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    class="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    class="w-4 mr-1 text-gray-700 dark:text-gray-400 bi bi-star"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <p class="text-lg ">
                                    <span class="text-green-600 dark:text-green-600">${item.price}.00</span>
                                </p>
                            </div>
                            <div class="flex justify-between border-t border-gray-300 dark:border-gray-700 cursor-pointer">
                                <div  class="w-1/2 bg-blue-200 px-2 py-1 cursor-pointer">
                                <MdOutlineShoppingCart className='text-blue-700 text-xl  mx-auto' />
                                </div>

                                <Link to={`/product/${item.id}`} className='bg-yellow-200 w-1/2 pt-1'>
                               <FaRegEye className='text-blue-700 text-xl mx-auto ' />
                                </Link>
                                
                            </div>
                        </div>)}
                    
                </div>
                <div class="flex justify-end mt-6">
                    <nav aria-label="page-navigation">
                        <ul class="flex list-style-none">
                            <li class="page-item disabled ">
                                <a href="#"
                                    class="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md dark:text-gray-400 hover:text-gray-100 hover:bg-blue-600">Previous
                                </a>
                            </li>
                            <li class="page-item ">
                                <a href="#"
                                    class="relative block px-3 py-1.5 mr-3 text-base hover:text-blue-700 transition-all duration-300 hover:bg-blue-200 dark:hover:text-gray-400 dark:hover:bg-gray-700 rounded-md text-gray-100 bg-blue-400">1
                                </a>
                            </li>
                            <li class="page-item ">
                                <a href="#"
                                    class="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3  ">2
                                </a>
                            </li>
                            <li class="page-item ">
                                <a href="#"
                                    class="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3 ">3
                                </a>
                            </li>
                            <li class="page-item ">
                                <a href="#"
                                    class="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md ">Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
    </div>
  )
}

export default ProductList