import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart, decreaseCartQty, getTotal  } from '../../app/features/cartSlice';

import { FaMinus, FaPlus, FaCross } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const cart = useSelector((state)=> state.cart)    
  const dispatch = useDispatch()
  useEffect(()=> {
      dispatch(getTotal())
  },[dispatch, cart])

  console.log(cart)
  
  return (
    <section className="max-w-[1170px] mx-auto  bg-slate-200 font-poppins  ">
     <div className="container mx-auto py-10 w-5/6  h-full ">
     <div className='py-6 bg-[url("https://media.istockphoto.com/photos/golden-shopping-bag-with-black-shopping-bags-picture-id1281319569?k=20&m=1281319569&s=612x612&w=0&h=HiPaofdFtZQFc8TVzBabuG_NW8KNvLs9xC_7JRt4U9Q=")] bg-cover object-cover bg-no-repeat mb-10'>

<h2 className="text-4xl font-bold  text-center text-white ">Your Cart</h2>
</div>
      <div className="">
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="p-3 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400 ">
            <tr className=''>
                <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Product
                </th>
                <th scope="col" className="px-6 py-3">
                    Qty
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody className=''>
         
        { cart && cart.cartItems.map((item, index)=>
            <tr key={index} className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 mb-5">
                <td className="p-1 h-24 border mt-3">
                    <img src={item.image} className="object-fill h-full w-full " alt="Apple Watch"/>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.title}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <button 
                        onClick={()=> dispatch(decreaseCartQty(item))}
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" value={item.cartQuantity} className="text-center bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={item.cartQuantity} required/>
                        </div>
                        <button 
                        onClick={()=> dispatch(addToCart(item))}
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${(item.price).toFixed(2)}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>)}
          
        </tbody>
    </table>
</div>

      

       {/*  -------  --------  Coupon Section-------  -------  */}
       <div className="flex flex-col md:flex-row gap-6 ">
       <div className="border border-slate-300 w-full md:w-5/12  rounded h-full mt-3 pb-5 bg-slate-100">
        <h1 className="text-xl bg-slate-300 py-1  font-bold ps-3">Coupon</h1>
        <p className='ps-3 pt-2'>Enter your coupon code if you have one.</p>
        <div className="flex items-center mt-5 px-3">
        <input type="text" placeholder='Coupon Code' className='border w-1/2' />
        <button className='text-sm w-1/2 px-2 md:px-5 bg-black text-slate-100 ms-3  py-2.5 font-semibold uppercase rounded-sm'>Apply coupon</button>
        </div>        
        </div> 

        {/*  -------  --------  Shopping Cart Summary -------  -------  */}    
       <div className="border border-slate-300 w-full md:w-7/12  rounded h-full mt-3 bg-slate-100">
        <h1 className="text-xl bg-slate-300 py-1  font-bold ps-3">Cart Total</h1>
        <div className="flex justify-between px-3 mt-3">
            <p>Subtotal</p>
            <p>${cart.cartTotalAmount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between  mt-3 border-b-2 pb-8">
            <p className='ps-3'>Shipping</p>
            <p className='pe-3'>${(cart.cartTotalAmount * 0).toFixed(2)}</p>
        </div>
        <div className="flex justify-between px-3 pt-3">
            <p className='font-semibold'>Total</p>
            <p className='font-bold'>${(cart.cartTotalAmount * 0 + cart.cartTotalAmount).toFixed(2)}</p>
        </div>
        <div className="flex justify-end mt-5 p-3 ">        
        <Link to={"/checkOut"} className='px-5 bg-black text-slate-100  py-2.5 font-semibold uppercase rounded-sm'>Process to checkout</Link>
        </div>        
        </div>     
        

       </div>
      </div> 

    </div>
    </section>
  )
}

export default ShoppingCart