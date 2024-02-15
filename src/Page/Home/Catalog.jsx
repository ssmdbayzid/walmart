import React from 'react'
import banner from '../../assets/image/catalog.jpg'
import banner2 from '../../assets/image/catalog2.jpg'

const Catalog = () => {
  return (
    <div className='max-w-[1170px] flex md:flex-row flex-col gap-8 md:gap-5 w-full mx-auto md:px-0 px-4 my-10'>
        <div className="md:w-1/2">
            <img src={banner} alt="" />
        </div>
        <div className="md:w-1/2">
            <img src={banner2} alt="" />
        </div>
    </div>
  )
}

export default Catalog