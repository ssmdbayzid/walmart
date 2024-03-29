import React, { useState } from 'react'

const CategoryFilter = ({products, handleChange}) => {
    const [openCategoryMenu, setOpenCategoryMenu] = useState(true)

    const uniqueCategories = [...new Set(products.map(item => item.category))];    
    
  return (
    <div className="border-b border-gray-200 py-6 ">
    <div onClick={()=> setOpenCategoryMenu(!openCategoryMenu)} className="-my-3 mb-3">
      {/* <!-- Expand/collapse section button --> */}
      <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500 px-2" aria-controls="filter-section-1" aria-expanded="false">
        <span className="font-medium text-gray-900">Category</span>
        <span className="ml-6 flex items-center">
        
         {!openCategoryMenu ? <svg className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
          :
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
          </svg>}
        </span>
      </button>
    </div>
    {/* <!-- Filter section, show/hide based on section state. --> */}
    { openCategoryMenu && uniqueCategories && 
    uniqueCategories.map((category)=> 
    <div key={category} className="py-1" id="filter-section-1">
      <div className="space-y-4">
        <div className="flex items-center">
          <input 
          onChange={handleChange}
          value={category.toLowerCase()}
          title={category}
          id={category} 
          type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label htmlFor={category} className="ml-3 text-sm text-gray-600">{category}</label>
        </div>      
      </div>
    </div>)}
  </div>
  )
}

export default CategoryFilter