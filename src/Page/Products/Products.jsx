import React, { useEffect, useState } from 'react'
import CategoryFilter from './CategoryFilter'
import PriceFilter from './PriceFilter'

import { IoMenu } from "react-icons/io5";
import { IoGrid } from "react-icons/io5";

import ProductList from './ProductList';
import SearchBar from './SearchBar';

import FilterMenu from './FilterMenu';
import ProductsGrid from './ProductsGrid';
import { useGetProductsQuery } from '../../app/features/productAPISlice';



const Products = () => {
const [openSortMenu, setOpenSortMenu] = useState(false)
const [menuType, setMenuType] = useState("grid")
const [selectedCategory, setSelectedCategory] = useState(null);
const [query, setQuery] = useState("")
const [products, setproducts] = useState(null)
const {data} = useGetProductsQuery()
const [loading, setLoading]  = useState(false)
const [range, setRange] = useState(null)
const [openMobileFilter, setMobileFilter] = useState(false)




useEffect(() => {
  setLoading(true);
  if (data) {
    setLoading(false);    
    setproducts(data?.data);
  } else {
    setLoading(false);
  }
}, [data]);




// ---------- Ratio Filtering -------------

const handleChange = event => {
  if(event.target.checked){
    setSelectedCategory(event.target.value)
  }else{
    setSelectedCategory(null)
  }
}
// ---------- Ratio Filtering -------------

const handlePriceChange = event => {
  if(event.target.checked){
    setRange(event.target.value)
  }else{
    setRange(null)
  }
}


// ---------------- Button Filtering --------------
const handleClick = event => {
  setSelectedCategory(event.target.value.toLowerCase())
  
}

let filteredItems;

if(products){
  filteredItems = products?.filter(
    (item)=> item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1    
  )
}  

const filteredData = (products, selected, query, range) =>{
  
  let filteredProducts = products;

  if(query){
    filteredProducts = filteredItems
  }
  
  
  
    if(selected){      
      filteredProducts  = filteredProducts.filter(({category,  company}) =>
        category.toLowerCase() === selected ||        
        company.toLowerCase() === selected
       
      )          
    } 
    if(range){
      filteredProducts  = filteredProducts.filter(({price})=>
      range == 1 && price >= 0 && price <= 100 ||       
      range == 2 && price >= 101 && price <= 200 ||       
      range == 3 && price >= 201 && price <= 300 ||       
      range == 4 && price >= 301       
      )}     
      return filteredProducts;  
}

const result = filteredData(products, selectedCategory, query, range)

//------------- - Sort By High To Low ------
  const sortByHighToLow = (products) =>{
    const sorted = [...products].sort((a, b)=> b.price - a.price)
    setproducts(sorted)
    setOpenSortMenu(!openSortMenu)
  }

//------------- - Sort By Low To High ------

  const sortByLowToHigh = (products) =>{
    const sorted = [...products].sort((a, b)=> a.price - b.price)
    setproducts(sorted)
    setOpenSortMenu(!openSortMenu)
  }

return (
    <div>
  <div className="max-w-[1170px] mx-auto bg-gray-100">
 <> <div>
   {openMobileFilter && <FilterMenu handlePriceChange={handlePriceChange} products={products} handleChange={handleChange} setMobileFilter={setMobileFilter} openMobileFilter={setMobileFilter} />}

   { loading ? <div className='flex items-center justify-center h-screen'>
   <p>Loading ...</p>
</div>  :
  <>
  {products && <main className="mx-auto  px-4 sm:px-6 lg:px-8 ">
  <SearchBar query={query} setQuery={setQuery} />

      <div className="flex  justify-between items-center border-b border-gray-200 pb-6 pt-10">
        <div className="">
        <h1 className="md:text-4xl text-3xl font-semibold text-center 0 ">Our Products</h1>                
        </div>
        
        <div className=" ms-2 flex md:mt-0 mt-2 gap-5  justify-end md:gap-0 items-center">
          <div className="relative  text-left">
            <div>
              <button onClick={()=>setOpenSortMenu(!openSortMenu)} type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                Sort
                <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

           {openSortMenu &&  <div className="absolute  right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-blue-200 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div className="py-1" role="none">                                               
                <p 
                onClick={()=>(sortByLowToHigh(products))}
                className="cursor-pointer text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</p>
                <p
                onClick={()=>(sortByHighToLow(products))}                
                className="cursor-pointer text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</p>
              </div>
            </div>}
          </div>

          <button onClick={()=> setMenuType("grid")} type="button"
          className={`-m-2 p-2 text-gray-400 hover:text-gray-500 sm:ml-7 ${menuType == "grid" && "bg-blue-200"}`}>
            <span className="sr-only">View grid</span>
             <IoGrid className='text-xl'/>
          </button>
          <button onClick={()=> setMenuType("menu")} type="button" className={`-m-2 p-2 ${menuType == "menu" && "bg-blue-200"} text-gray-400 hover:text-gray-500 sm:ml-7`}>
           <IoMenu className='text-2xl'/>           
          </button>

          {/* ---------- Filter Icon --------- */}
          <button
          onClick={()=> setMobileFilter(!openMobileFilter)}
          type="button" className="  p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
            <span className="sr-only">Filters</span>
            <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <section aria-labelledby="products-heading" className="pb-24 pt-6">
        <h2 id="products-heading" className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-5">
          {/* <!-- Filters --> */}
          <form className="hidden lg:block space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                               
          <CategoryFilter  products={products} handleChange={handleChange}  /> 
          
           <PriceFilter handlePriceChange={handlePriceChange}  />
          </form>

         {menuType === "grid" ?
          <>{/* <!-- Product List --> */}
         <div className="md:col-span-3 lg:col-span-4">
         <ProductsGrid result={result} handleClick={handleClick}  />
         </div></>
         : <>{/* <!-- Product grid --> */}
         <div className="md:col-span-3 lg:col-span-4">
           {/* <!-- Your content --> */}
           <ProductList result={result} handleClick={handleClick} />
         </div></>
         }

          
        </div>
      </section>
    </main>}</> }
  </div> </> 
  </div>
 </div>
  )
}

export default Products