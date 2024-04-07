import React, { useContext, useEffect, useState } from 'react'

import Loader from '../../component/Loader'
import { Link } from 'react-router-dom'
import { ItemsCategory } from '../../assets/data/ItemsCategory';



const CategorySidebar = () => {
    
   return (
    <div className='border-2 shadow-lg'>
        <ul className='px-2 py-3'>
            {ItemsCategory && ItemsCategory.map(category=>
            <Link to={`/products?category=${category.name}`} className='font-semibold  hover:bg-slate-300 px-2 py-2 text-lg flex items-center gap-4' key={name}>
            
              
              {React.createElement(category.icon)}
            
             {category.name}
            </Link>)}
            
        </ul>
    </div>
  )
}

export default CategorySidebar