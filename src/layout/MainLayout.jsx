import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Header from '../component/Header/Header'
import Home from '../Page/Home/Home'
import Products from '../Page/Products/Products'
import ProductDetails from '../Page/Products/ProductDetails'
import ShoppingCart from '../Page/ShoppingCart/ShoppingCart'
// import RequiredAuth from '../Routes/RequiredAuth'
import Dashboard from '../Page/Dashboard/Dashboard'

import CheckOut from '../Page/ShoppingCart/CheckOut'
import Payment_Success from '../Page/Payment/Payment_Success'
import Payment_Cancel from '../Page/Payment/Payment_Cancel'
import Login from '../Page/Auth/Login'
import SignUp from '../Page/Auth/SignUp'
import DashboardIndex from '../Page/Dashboard/DashboardIndex'
import Address from '../Page/Dashboard/User/Address'
import Orders from '../Page/Dashboard/Orders'
import Contact from '../Page/Contact/Contact'
import CreateProduct from '../Page/Dashboard/Admin/CreateProduct'
import AllOrder from '../Page/Dashboard/Admin/AllOrder'
import AllUsers from '../Page/Dashboard/Admin/AllUsers'
import AllProducts from '../Page/Dashboard/Admin/AllProducts'

Routes, Route, Link

const MainLayout = () => {
  
    return (
    <div>
        <Header />
    <Outlet />
    </div>
  )
}

export default MainLayout

   /*
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/shoppingCart' element={<RequiredAuth> <ShoppingCart /></RequiredAuth>}/>
     
        <Route path='/payment-success' element={<RequiredAuth> <Payment_Success /></RequiredAuth>}/>
        <Route path='/payment-cancel' element={<RequiredAuth> <Payment_Cancel /></RequiredAuth>}/>
        <Route path='/checkout' element={<RequiredAuth> <CheckOut /></RequiredAuth>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/contact' element={<Contact />}/>

        <Route path='/dashboard' element={
        <RequiredAuth>
          <Dashboard />
        </RequiredAuth>}>
          <Route path="/dashboard/orders"  element={<Orders />} />
          <Route path="/dashboard/address"  element={<Address />} />
          <Route path="/dashboard/createProduct"  element={<CreateProduct />} />
          <Route path="/dashboard/allOrder"  element={<AllOrder />} />
          <Route path="/dashboard/allUsers"  element={<AllUsers />} />
          <Route path="/dashboard/allProducts"  element={<AllProducts />} />
          <Route  index  element={<DashboardIndex />} />
        </Route>

        </Routes>
        */