import React from 'react'

const SearchBar = ({setQuery}) => {
  
  return (
    <div className="mx-auto   "> 
  <form className="relative mx-auto flex w-full  items-center justify-between rounded-md border shadow-sm"> 
    <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" className=""></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
    </svg>
    <input 
    type="name" 
    name="search"
    onChange={(e)=>setQuery(e.target.value)}
    className="h-12 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2" placeholder="Search Products" />
    <button type="submit" className="absolute right-0 mr-1 inline-flex h-10 items-center justify-center rounded-lg bg-gray-900 px-6 font-medium text-white focus:ring-4 hover:bg-gray-700">Search</button>
  </form>
</div>

  )
}

export default SearchBar