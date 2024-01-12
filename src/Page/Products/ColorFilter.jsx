import React, { useState } from 'react'

const ColorFilter = ({products, handleChange}) => {
    const [openColorMenu, setOpenColorMenu] = useState(true)
    
  return (    
     <div className="border-b border-gray-200 py-6">
              <div onClick={()=> setOpenColorMenu(!openColorMenu)} className="">
                {/* <!-- Expand/collapse section button --> */}
                <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500 px-2" aria-controls="filter-section-0" aria-expanded="false">
                  <span className="font-medium text-gray-900">Color</span>
                  <span className="ml-6 flex items-center">
                    
                    {!openColorMenu ? <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg> :                    
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                    </svg>}
                  </span>
                </button>
              </div>
              {/* <!-- Filter section, show/hide based on section state. --> */}
             {openColorMenu && <div className="pt-6" id="filter-section-0">
                <div className="space-y-4">
                 {products && products.map((item)=>
                 <div key={item.id} className="flex items-center">
                    <input 
                    id={item.color}
                    name={item.color} 
                    value={item.color.toLowerCase()} 
                    onChange={handleChange}
                    type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label htmlFor={item.color} className="ml-3 text-sm text-gray-600">{item.color}</label>
                  </div>)}
                
                </div>
              </div>}
            </div>    
  )
}

export default ColorFilter