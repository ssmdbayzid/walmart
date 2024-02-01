
import React, { useEffect, useState } from 'react'
// import { products } from '../../assets/data/ItemsCategory'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { products } from '../../assets/data/ItemsCategory';


const ProductsGrid = ({ result, handleClick}) => {
    const [pageNo, setPageNo] = useState(1)
    const [data, setData] = useState(null)
    const [companies, setCompanies] = useState(null)
    const pageSize = 12

    useEffect(()=>{
        const startIndex = (pageNo - 1) * pageSize;
        const endIndex = (startIndex + pageSize)
        const filterProduct =(result.slice(startIndex, endIndex))
        setData(filterProduct)     
    },[pageNo, result])

    useEffect(()=>{
        if(data){
            const uniqueCategories = [...new Set(data.map(product => product.company))];
            console.log(uniqueCategories)
            setCompanies(uniqueCategories)
        }
    },[data])
  
    

  return (
    <div>
        <div>
        <p className="text-xl font-bold">Recommanded</p>
        <div className=" grid grid-cols-6 gap-4 mb-3 my-2 mx-auto">
        <button 
        value=""
        onClick={handleClick}
        className='border-2  font-semibold px-3 py-1 rounded-sm'>
            All
        </button>
        {companies && companies.map((company, index)=> 
        <button 
        key={index} 
        value={company.toLowerCase()}
        onClick={handleClick}
        className='border-2   font-semibold px-3 py-1 rounded-sm'>
                {company}
            </button> )}
        </div>
        </div>
        
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 ">
                    {data && data.map((item, index)=>
                        <div key={index} className="relative border border-gray-800 dark:border-gray-700 ">
                               
                            <div className='h-60 '>
                            <img src={item.image} alt=""
                            className=" w-full h-full mx-auto " />                              
                            </div>                        
                            
                            <div className="p-2">
                                
                                    <h3 className="whitespace-nowrap overflow-hidden text-ellipsis text-xl font-medium dark:text-gray-400">
                                        {item.title}
                                    </h3>
                                    <ul className="flex py-1">
                                    {[...Array(5).keys()].map((_, index)=>
                                        <svg  key={index} xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                        fill="currentColor"
                                        className="w-4  text-gray-700 dark:text-gray-400 bi bi-star "
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                        </path>
                                    </svg>    
                                    )}                                  
                                        
                                    </ul>
                                
                                <p className="text-lg ">
                                    <span className="text-green-600 dark:text-green-600">${item.price}.00</span>
                                </p>
                            </div>
                            <div className="flex justify-between border-t border-gray-300 dark:border-gray-700 cursor-pointer e-full">
                                <div  className="w-1/2 bg-blue-200 px-2 py-1 cursor-pointer">
                                <MdOutlineShoppingCart className='text-blue-700 text-xl  mx-auto' />
                                </div>

                                <Link to={`/product/${item._id}`} className='bg-yellow-200 w-1/2 pt-1'>
                               <FaRegEye className='text-blue-700 text-xl mx-auto ' />
                                </Link>
                                
                            </div>
                            
                            
                        </div>)}
                    
                </div>
                <div className="flex justify-end mt-6">
                    <nav aria-label="page-navigation">
                        <ul className="flex list-style-none">
                            <li className="page-item ">
                                <a 
                                    onClick={()=> {
                                        if(pageNo > 1){
                                            setPageNo(pageNo - 1)
                                        }
                                    }}
                                    className={`cursor-pointer relative block ${pageNo === 1 && "pointer-events-none"} px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300 rounded-md dark:text-gray-400 hover:text-gray-100 hover:bg-blue-600`}>Previous
                                </a>
                            </li>
                            
                            <li 
                            onClick={()=>setPageNo(1)}
                            className={`cursor-pointer page-item relative block px-3 py-1.5 mr-3 text-blue-700 transition-all duration-300 bg-blue-200  dark:hover:bg-gray-700 rounded-md  ${pageNo === 1 && "bg-blue-400"}`}>
                                1
                            </li>
                            <li                             
                            onClick={()=>setPageNo(2)}
                            className={` ${result.length < 13 && "pointer-events-none"} cursor-pointer page-item relative block px-3 py-1.5 mr-3 text-blue-700 transition-all duration-300 bg-blue-200  dark:hover:bg-gray-700 rounded-md  ${pageNo === 2 && "bg-blue-400"}`}>
                                2
                            </li>                                                                               
                            <li 
                            onClick={()=>setPageNo(3)}
                            className={`${result.length < 25 && "pointer-events-none"}  cursor-pointer page-item relative block px-3 py-1.5 mr-3 text-blue-700 transition-all duration-300 bg-blue-200  dark:hover:bg-gray-700 rounded-md  ${pageNo === 3 && "bg-blue-400"}`}>
                                3
                            </li>
                            <li 
                            onClick={()=>setPageNo(4)}
                            className={`${result.length < 37 && "pointer-events-none"}  cursor-pointer page-item relative block px-3 py-1.5 mr-3 text-blue-700 transition-all duration-300 bg-blue-200  dark:hover:bg-gray-700 rounded-md  ${pageNo === 4 && "bg-blue-400"}`}>
                                4
                            </li>
                                                                               
                            <li 
                            onClick={()=> {
                                if(pageNo < 4 ){
                                    setPageNo(pageNo + 1)
                                }
                            }}
                            className="page-item disabled">
                                <a
                                    className="cursor-pointer relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md ">Next
                                </a>
                            </li>
                        </ul >
                    </nav>
                </div>
    </div>
  )
}

export default ProductsGrid