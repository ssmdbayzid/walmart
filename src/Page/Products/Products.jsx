import React, { useState } from 'react'
import ColorFilter from './ColorFilter'
import CategoryFilter from './CategoryFilter'
import SizeFilter from './SizeFilter'

import { IoMenu } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";

import ProductList from './ProductList';
import SearchBar from './SearchBar';
import { products } from '../../assets/data/ItemsCategory';
import FilterMenu from './FilterMenu';
const Products = () => {
const [openSortMenu, setOpenSortMenu] = useState(false)
const [menuType, setMenuType] = useState("grid")


const [selectedCategory, setSelectedCategory] = useState(null);

const [query, setQuery] = useState("")

// ---------- Fiter Item as query -------------
console.log(products)

  const filteredItems = products.filter(
    (item)=> item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1    
  )
console.log(filteredItems)
const filteredData = (products, selected, query) =>{
  let filteredProducts = products;

  if(query){
    filteredProducts = filteredItems;
  }

  if(selected){
    filteredProducts = filteredProducts.filter(
      ({category, color, company, price, titile})=>{
        category === selected ||
        color === selected ||
        company === selected ||
        price === selected ||
        titile === selected      
      }
    )
  }
}

return (
    <div>

<div className="max-w-[1170px] mx-auto bg-gray-100">
  <div>
    <FilterMenu />
    

    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
        <SearchBar query={query} setQuery={setQuery} />
        <div className="flex items-center">
          <div className="relative inline-block text-left">
            <div>
              <button onClick={()=>setOpenSortMenu(!openSortMenu)} type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                Sort
                <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>

           {openSortMenu &&  <div className="absolute  right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-blue-200 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div className="py-1" role="none">
               
                <a href="#" className="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Most Popular</a>
                <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Best Rating</a>
                <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Newest</a>
                <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</a>
                <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</a>
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
          <button onClick={()=> setMenuType("fill-grid")}  type="button"
         className={`-m-2 p-2 text-gray-400 hover:text-gray-500 sm:ml-7 ${menuType == "fill-grid" && "bg-blue-200"}`}>
           <BsFillGrid3X3GapFill className='text-xl'/>           
          </button>
          <button type="button" className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
            <span className="sr-only">Filters</span>
            <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <section aria-labelledby="products-heading" className="pb-24 pt-6">
        <h2 id="products-heading" className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* <!-- Filters --> */}
          <form className="hidden lg:block space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
            
          <ColorFilter products={products}  />
           
          <CategoryFilter  products={products}  /> 
          
           <SizeFilter />
          </form>

          {/* <!-- Product grid --> */}
          <div className="lg:col-span-3">
            {/* <!-- Your content --> */}
            <ProductList />
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

    </div>
  )
}

export default Products