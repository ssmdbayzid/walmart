import React from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CategorySidebar from './CategorySidebar';

const HeroSection2 = () => {
  return (
    <div className="flex max-w-[1170px] mx-auto mt-5 ">
      <div className='md:block hidden w-1/5 mr-5'>

      <CategorySidebar />
      </div>
    <div className="w-full md:w-4/5 mx-auto overflow-hidden shadow">
      <Swiper 
      modules={[Autoplay, Pagination, Navigation]}  
      rewind={true}    
      slidesPerView={1}         
      speed={2000}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      >
        <div>
        
        <SwiperSlide  className="w-full">
 <div className=' bg-[url("https://static.wixstatic.com/media/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png/v1/fill/w_1349,h_565,al_r,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png")] w-full flex items-center justify-start mx-auto bg-center md:bg-cover bg-no-repeat  '>            
        {/* <img src="" alt="" className='h-full' />       */}
        <div className="p-5 w-full flex flex-col justify-start items-start ">
        <div className='  md:text-left text-center ps-5 md:ps-0'>
        <p className='text-white bg-red-600 mx-auto inline-block px-5 py-1 mb-6'>Best Prices </p>

        <h1 className='text-3xl text-center md:text-start leading-[40px] md:text-6xl md:leading-[70px]  font-bold'>Incredible Prices <br /> <span>on All Your </span> <br />
        <span className='text-purple-600'>Favorite Items</span>
        </h1>
        <p className='text-xl md:text-2xl mt-6 text-gray-700 '>Get more for less on selected brands</p>
        <button className='py-2.5 px-14 mt-8 bg-blue-600 rounded-full text-white'>Shop Now</button>
        </div>  
        </div>
      
    </div>
    </SwiperSlide>
        <SwiperSlide  className="">
 <div className=' bg-[url("https://static.wixstatic.com/media/c837a6_9c1280daaeb0481abc58e6e236efdf59~mv2.png/v1/fill/w_1349,h_595,al_br,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_9c1280daaeb0481abc58e6e236efdf59~mv2.png")] flex items-center justify-start bg-center md:bg-cover bg-no-repeat   '>            
        {/* <img src="" alt="" className='h-full' />       */}
        <div className="p-5 w-full flex flex-col justify-start items-start ">
        <div className=' md:text-start text-center ps-5 md:ps-0'>
        <p className='text-white bg-red-600 mx-auto inline-block px-5 py-1 mb-6'>Best Prices </p>

        <h1 className='text-3xl text-center md:text-start leading-[40px] md:text-6xl md:leading-[70px]  font-bold'>Incredible Prices <br /> <span>on All Your </span> <br />
        <span className='text-purple-600'>Favorite Items</span>
        </h1>
        <p className='text-xl md:text-2xl mt-6 text-gray-700 '>Get more for less on selected brands</p>
        <button className='py-2.5 px-14 mt-8 bg-blue-600 rounded-full text-white'>Shop Now</button>
        </div>  
        </div>
      
    </div>
    </SwiperSlide>
        <SwiperSlide  className="">
 <div className=' bg-[url("https://static.wixstatic.com/media/c837a6_837f9cd4f59146c3ad47a2bd882fedfd~mv2.png/v1/fill/w_1349,h_595,al_r,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_837f9cd4f59146c3ad47a2bd882fedfd~mv2.png")] flex items-center justify-start bg-center md:bg-cover bg-no-repeat '>            
        {/* <img src="" alt="" className='h-full' />       */}
        <div className="p-5 w-full flex flex-col justify-start items-start ">
        <div className=' md:text-start text-center ps-5 md:ps-0'>
        <p className='text-white bg-red-600 mx-auto inline-block px-5 py-1 mb-6'>Best Prices </p>

        <h1 className='text-3xl text-center md:text-start leading-[40px] md:text-6xl md:leading-[70px]  font-bold'>Incredible Prices <br /> <span>on All Your </span> <br />
        <span className='text-purple-600'>Favorite Items</span>
        </h1>
        <p className='text-xl md:text-2xl mt-6 text-gray-700 '>Get more for less on selected brands</p>
        <button className='py-2.5 px-14 mt-8 bg-blue-600 rounded-full text-white'>Shop Now</button>
        </div>  
        </div>
      
    </div>
    </SwiperSlide>
       
        {/* <SwiperSlide  className="">
      <div className='relative h-[90vh]'>            
        <img src="https://static.wixstatic.com/media/c837a6_837f9cd4f59146c3ad47a2bd882fedfd~mv2.png/v1/fill/w_1349,h_595,al_r,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_837f9cd4f59146c3ad47a2bd882fedfd~mv2.png" alt="" className='h-full' />      
        <div className='left-[10%] absolute top-24'>
        <p className='text-white bg-red-600 inline-block px-5 py-1 mb-6'>Best Prices </p>

        <h1 className='text-6xl leading-[70px]  font-bold'>Incredible Prices <br /> <span>on All Your </span> <br />
        <span>Favorite Items</span>
        </h1>
        <p className='text-2xl mt-6 text-gray-700 '>Get more for less on selected brands</p>
        <button className='py-2.5 px-14 mt-8 bg-blue-600 rounded-full text-white'>Shop Now</button>
        </div>  
    </div>
    </SwiperSlide>
        <SwiperSlide  className="">
      <div className='relative h-[90vh]'>            
        <img src="https://static.wixstatic.com/media/c837a6_9c1280daaeb0481abc58e6e236efdf59~mv2.png/v1/fill/w_1349,h_595,al_br,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_9c1280daaeb0481abc58e6e236efdf59~mv2.png" alt="" className='h-full' />      
        <div className='left-[10%] absolute top-24'>
        <p className='text-white bg-red-600 inline-block px-5 py-1 mb-6'>Best Prices </p>

        <h1 className='text-6xl leading-[70px]  font-bold'>Incredible Prices <br /> <span>on All Your </span> <br />
        <span>Favorite Items</span>
        </h1>
        <p className='text-2xl mt-6 text-gray-700 '>Get more for less on selected brands</p>
        <button className='py-2.5 px-14 mt-8 bg-blue-600 rounded-full text-white'>Shop Now</button>
        </div>  
    </div>
    </SwiperSlide> */}
    </div>
    </Swiper>
    </div>
    </div>
  )
}

export default HeroSection2