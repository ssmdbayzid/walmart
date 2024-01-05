import React from 'react'
import { GoRocket } from "react-icons/go"
import { RiCustomerService2Line } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
const Promotion = () => {
  return (
    <div className="max-w-[1170px] mx-auto my-10">        
        <div className="flex items-center justify-center border rounded-lg py-3 gap-16">
            <div className="group flex items-center pl-2 pr-6 border-r">
            <GoRocket className="group-hover:text-slate-700 text-slate-300  text-4xl mr-3 duration-400 transition-all" />
            <div className="">
                <p className="group-hover:text-blue-500 text-lg font-semibold">Free Delivery & Return</p>
                <p className="text-md text-slate-400">Free Delivery on Whole Country</p>
            </div>
            </div>
            <div className="group flex items-center pl-2 pr-6 border-r">
            <GrMoney className="group-hover:text-slate-700 text-slate-300  text-4xl mr-3 duration-400 transition-all" />
            <div className="">
                <p className="group-hover:text-blue-500 text-lg font-semibold">Money Guarantee</p>
                <p className="text-md text-slate-400">30 days money back guarantee</p>
            </div>
            </div>
            <div className="group flex items-center pl-2 pr-6 ">
            <RiCustomerService2Line className="group-hover:text-slate-700 text-slate-300  text-4xl mr-3 duration-400 transition-all" />
            <div className="">
                <p className="group-hover:text-blue-500 text-lg font-semibold">Online Support</p>
                <p className="text-md text-slate-400">We support online 24/24 on day</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Promotion