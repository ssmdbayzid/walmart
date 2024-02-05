import React, {useEffect, useState} from 'react'


import { FaUser } from "react-icons/fa";

// Import Swiper React components

import './home.css'
import {HiStar} from 'react-icons/hi'
import { ItemsCategory } from '../../assets/data/ItemsCategory'


import axios from 'axios';
import Carousel from './Carousel';

// import banner from '../../assets/image/banner'

// import required modules


const HeroSection = () => {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);

    
    const [products, setProducts] = useState(null)
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products")
      .then(res=> {
        setProducts(res.data.slice(0, 10))
      })  
      .catch(error=>console.log(error))
    },[])
    
    return (
        <div className='flex w-full md:max-w-[1170px] mx-auto my-4 '>
            
                <div className="itemsList md:w-1/3 mr-2">
                    {ItemsCategory.map((item, index) =>
                        <div key={index}>
                            <ul className='px-2 py-3 border '>
                                <li ><a href={`/products?category=${item.name}`} className='flex gap-3 items-center'>
                                    <span>{React.createElement(item.icon)}</span>
                                    <h2>{item.name}</h2>
                                </a></li>
                            </ul>

                        </div>
                        
                        )}
                </div>                
            <div className='w-full md:w-2/3'>
             <Carousel  products={products}/>
            </div>

            </div>
        
    )
}

export default HeroSection