import React, { useState } from 'react'

const FilterMenu = ({products, handleChange, handlePriceChange, setMobileFilter, openMobileFilter}) => {
const [openCategoryList, setOpenCategoryList] = useState(true)
const [openPriceRange, setOpenPriceRange] = useState(true)

const uniqueCategories = [...new Set(products.map(item=> item.category))]
  return (
    <div className="relative  z-40 " role="dialog" aria-modal="true">
      
      <div className="fixed inset-0 z-[99] bg-black bg-opacity-25"></div>

      <div className="fixed inset-0 z-[999]  flex">
     
        <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <button
            onClick={()=> setMobileFilter(!openMobileFilter)}
            type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* <!-- Filters --> */}
          <form className="mt-4 border-t border-gray-200 ">          
            <div className="border-t border-gray-200 px-4 py-6">
              <h3
              onClick={()=>setOpenCategoryList(!openCategoryList)}
              className=" -mx-2 -my-3 flow-root">
                {/* <!-- Expand/collapse section button --> */}
                <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                  <span className="font-medium text-gray-900">Category</span>
                  <span className="ml-6 flex items-center">
                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                  {!openCategoryList ? <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    : <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                  </svg>}                                        
                  </span>
                </button>
              </h3>
              {/* <!-- Filter section, show/hide based on section state. --> */}
            {(openCategoryList && uniqueCategories) &&   uniqueCategories.map((category)=>
             <div key={category} className="pt-3" id="filter-section-mobile-1">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input
                    onChange={handleChange}
                    value={category.toLowerCase()}
                    id="filter-mobile-category-0" name="category[]"  type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label htmlFor="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">{category}</label>
                  </div>
                  
                </div>
              </div>)}
            </div>
            <div className="border-t border-gray-200 px-4 py-6">
              <h3 
              onClick={()=> setOpenPriceRange(!openPriceRange)}
              className="-mx-2 -my-3 flow-root">
                {/* <!-- Expand/collapse section button --> */}
                <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                  <span className="font-medium text-gray-900">Price</span>
                  <span className="ml-6 flex items-center">
                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                  {!openPriceRange ?  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                   :
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                    </svg>}
                  </span>
                </button>
              </h3>
              {/* <!-- Filter section, show/hide based on section state. --> */}
              <div className="pt-6" id="filter-section-mobile-2">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input 
                     onChange={handlePriceChange}
                    value="1"
                    id="filter-mobile-size-0" name="size[]"  type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-gray-500">0 to 100</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                     onChange={handlePriceChange}
                    value="2"
                    id="filter-mobile-size-0" name="size[]"  type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-gray-500">101 to 200</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                     onChange={handlePriceChange}
                    value="3"
                    id="filter-mobile-size-0" name="size[]"  type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-gray-500">201 to 300</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                     onChange={handlePriceChange}
                    value="4"
                    id="filter-mobile-size-0" name="size[]"  type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-gray-500">Avobe 301</label>
                  </div>
                 
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FilterMenu