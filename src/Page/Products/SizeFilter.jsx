import React, { useState } from 'react'

const SizeFilter = () => {
    const [openSizeMenu, setOpenSizeMenu] = useState(false)
  return (
    <div className="border-b border-gray-200 py-6">
    <h3 onClick={()=> setOpenSizeMenu(!openSizeMenu)} className="-my-3 flow-root">
      {/* <!-- Expand/collapse section button --> */}
      <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
        <span className="font-medium text-gray-900">Size</span>
        <span className="ml-6 flex items-center">
        
          {!openSizeMenu ? <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
            :
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
          </svg>}
        </span>
      </button>
    </h3>
    {/* <!-- Filter section, show/hide based on section state. --> */}
    {openSizeMenu && <div className="pt-6" id="filter-section-2">
      <div className="space-y-4">
        <div className="flex items-center">
          <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label for="filter-size-0" className="ml-3 text-sm text-gray-600">2L</label>
        </div>
        <div className="flex items-center">
          <input id="filter-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label for="filter-size-1" className="ml-3 text-sm text-gray-600">6L</label>
        </div>
        <div className="flex items-center">
          <input id="filter-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label for="filter-size-2" className="ml-3 text-sm text-gray-600">12L</label>
        </div>
        <div className="flex items-center">
          <input id="filter-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label for="filter-size-3" className="ml-3 text-sm text-gray-600">18L</label>
        </div>
        <div className="flex items-center">
          <input id="filter-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label for="filter-size-4" className="ml-3 text-sm text-gray-600">20L</label>
        </div>
        <div className="flex items-center">
          <input id="filter-size-5" name="size[]" value="40l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label for="filter-size-5" className="ml-3 text-sm text-gray-600">40L</label>
        </div>
      </div>
    </div>}
  </div>
  )
}

export default SizeFilter