import React from 'react'
import {  Outlet } from 'react-router-dom'
import Header from '../component/Header/Header'
import Footer from '../component/Footer'
import Subscription from '../component/Subscription'


const MainLayout = () => {
  
    return (
    <div>
        <Header />
        <div className="min-h-screen">
        <Outlet />
        </div>
        <Subscription />
        <Footer />
    </div>
  )
}

export default MainLayout

    