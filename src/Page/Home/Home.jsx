import React from 'react'
import Products from './Products'
import Promotion from './Promotion'
import Banner from './Banner'
import Brand from './Brand'
import Subscription from './Subscription'
import Footer from './Footer'


import Banner2 from './Bannner2'
import HeroSection2 from './HeroSection2'
import Catalog from './Catalog'

const Home = () => {
  return (
    <div className="">
      
      <HeroSection2 />
      <Promotion />
      <Catalog />
      <Products />      
      <Banner2 />
      <Banner />
      <Brand />
      <Subscription />
      < Footer/>
    </div>
  )
}

export default Home