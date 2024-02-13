import React, { useState } from 'react'

const PriceFilter = ({handlePriceChange}) => {
    const [openSizeMenu, setOpenSizeMenu] = useState(false)
  return (
    <div className="border-b border-gray-200 py-6">
    <div onClick={()=> setOpenSizeMenu(!openSizeMenu)} className="-my-3 flow-root">
      {/* <!-- Expand/collapse section button --> */}
      <button type="button" className="flex w-full items-center justify-between bg-white py-3 px-2 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
        <span className="font-medium text-gray-900">Price 001</span>
        <span className="ml-6 flex items-center">
        
          {!openSizeMenu ? <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
    {openSizeMenu && <div className="pt-6" id="filter-section-2">
      <div className="space-y-4">
        <div className="flex items-center">
          <input
          onChange={handlePriceChange}          
           id="filter-size-0" name="size[]" value="1" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">0 to 100</label>
        </div>
        <div className="flex items-center">
          <input
          onChange={handlePriceChange}
           id="filter-size-1" name="size[]" value="2" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600">101 to 200</label>
        </div>
        <div className="flex items-center">
          <input
          onChange={handlePriceChange}
           id="filter-size-2" name="size[]" value="3" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-600">201 to 300</label>
        </div>
        <div className="flex items-center">
          <input
          onChange={handlePriceChange}
           id="filter-size-3" name="size[]" value="4" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-600">Avobe 301</label>
        </div>        
      </div>
    </div>}
  </div>
  )
}

export default PriceFilter