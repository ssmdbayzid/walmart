import React from 'react'
import banner from '../../assets/image/banner final.png'
const Banner2 = () => {
  return (
    <div className='max-w-[1170px] my-10 mx-auto'>
        <div className='h-[200px] md:h-[300px]'>
        <a href="/">
        <img src={banner} alt="" className='h-full w-full' />
        </a>
        </div>

    </div>
  )
}

export default Banner2