import React from 'react'
import Products from './Products'
import Promotion from './Promotion'
import Banner from './Banner'
import Brand from './Brand'
import Subscription from './Subscription'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Offer from './Offer'

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <Promotion />
      <Products />
      <Banner />
      <Offer />
      <Brand />
      <Subscription />
      < Footer/>
    </div>
  )
}

export default Home