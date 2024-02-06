import React from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const HeroSection2 = () => {
  return (
    <div className='relative '>            
        <img src="https://static.wixstatic.com/media/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png/v1/fill/w_1349,h_565,al_r,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png" alt="" className='h-full' />      
        <div className='left-[10%] absolute top-24'>
        <p className='text-white bg-red-600 inline-block px-5 py-1 mb-6'>Best Prices </p>

        <h1 className='text-6xl leading-[70px]  font-bold'>Incredible Prices <br /> <span>on All Your </span> <br />
        <span>Favorite Items</span>
        </h1>
        <p className='text-2xl mt-6 text-gray-700 '>Get more for less on selected brands</p>
        <button className='py-2.5 px-14 mt-8 bg-blue-600 rounded-full text-white'>Shop Now</button>
        </div>  
    </div>
  )
}

export default HeroSection2