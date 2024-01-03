import React from 'react'
import Products from '../Products/Products'
import Promotion from './Promotion'
import Banner from './Banner'
import Brand from './Brand'
import Subscription from './Subscription'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="">
      <Promotion />
      <Products />
      <Brand />
      <Banner />
      <Subscription />
      < Footer/>
    </div>
  )
}

export default Home