import React from 'react'
import  {Autoplay,Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import banner from '../../assets/image/banner.jpg'

import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = ({products}) => {
  return (
    <div>
    <Swiper className='carousel w-full '
                        modules={[ Pagination ]}                        
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        // autoplay={{
                        //     delay: 3000,
                        //     disableOnInteraction: false,
                        // }}
                        navigation={{ // Add navigation arrows
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                          }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                        }}>
                {products && products.map((item)=>
                <SwiperSlide key={item.title}>
                  
    <div className="flex  px-4 py-8 mx-auto flex-row  bg-slate-200">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
        </div>
              
    </div>
                  </SwiperSlide>)}
                
            </Swiper> 
            <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  )
}

export default Carousel