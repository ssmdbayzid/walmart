import React from 'react'
import Products from './Products'
import Promotion from './Promotion'
import Banner from './Banner'
import Brand from './Brand'
import Subscription from './Subscription'
import Footer from './Footer'
import HeroSection from './HeroSection'

import Banner2 from './Bannner2'
import HeroSection2 from './HeroSection2'

const Home = () => {
  return (
    <div className="">
      {/* <HeroSection /> */}
      <HeroSection2 />
      <Promotion />
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