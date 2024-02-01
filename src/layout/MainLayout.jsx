import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header/Header'
import Head from '../component/Head'


const MainLayout = () => {
  
    return (
    <div>
        <Header />
        {/* <Head /> */}
        <Outlet />
    </div>
  )
}

export default MainLayout