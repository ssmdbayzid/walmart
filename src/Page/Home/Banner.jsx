import React, { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../../app/features/productAPISlice'
import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules

const Banner = () => {

const {data, isLoading, isError} = useGetProductsQuery()
const [products, setProducts] = useState(null)

    const img = "http://ps.magentech.com/themes/sp_destino/modules/spbanner/images/banner02.jpg"
    const img2 = "http://ps.magentech.com/themes/sp_destino/modules/spbanner/images/banner01.jpg"
    useEffect(()=>{
      setProducts(data?.data.filter(item=> item.category.toLowerCase() === "mobile"))
    }, [data])
  return (
    <div className="max-w-[1170px] mx-auto my-20">      
      <div className='min-w-[70%]'>
        <div className="flex justify-between mx-8 mb-4">
          <h2 className="text-2xl font-bold font-mono">Smart Phones</h2>
          <a href='/products?category=mobile' className="px-6 py-1 -skew-y-[10deg] bg-blue-600 text-white cursor-pointer">View All</a>
        </div>
      
      </div>
     
    
      <Swiper
        modules={[Autoplay, Pagination]}        
        slidesPerView={2}
        spaceBetween={30}
        // grabCursor={true}
        // slidesPerGroup={4}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className=""
       
        breakpoints={{
          640: {
              slidesPerView: 2,
              spaceBetween: 10,
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 30,
          },
      }}
      >
        <div>

          {products && products.map((item, index)=> 
         <SwiperSlide key={index} className="">
         <div className="h-60">
           <img src={item.image} alt="" className='h-full w-full' />
         </div>
           <div className="px-1">
               {/* --------- Product Content ---------- */}
           <div className="">
               <p className="text-slate-400 mt-auto">{item.category}</p>
               {/* <p className="text-md font-semibold">{item.title}</p> */}
               <div className="flex justify-between">
               <p className="text-md font-bold text-wrap">{item.title}</p>
               <p>$ {item.price}</p>
               </div>
               <div className="flex justify-between mt-2">
             
               <div className="flex items-center justify-center">                   
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-400 mr-1">
               <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
               </svg>
               <span>4.5 (5)</span>
               </div>  
               <Link to={`/product/${item._id}`} className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 rounded w-10 h-7 text-white cursor-pointer">                   
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
               </svg>
           
               </Link>   
               </div>

           </div>
               
           </div>
       </SwiperSlide>
       )}
        </div>
       
      </Swiper>
      
        </div>
  )
}

export default Banner