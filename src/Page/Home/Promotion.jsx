import React from 'react'
import { GoRocket } from "react-icons/go"
import { RiCustomerService2Line } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
const Promotion = () => {
  return (
    <div className="max-w-[1170px] mx-auto my-10">        
        <div className="flex  md:flex-row flex-col items-center border rounded-lg py-3 md:gap-16">
            <div className="group w-full justify-center flex items-center py-3 md:py-0 md:pl-2 md:pr-6 border-b md:border-b-0 md:border-r">
            <GoRocket className="group-hover:text-slate-700 text-slate-300  text-4xl mr-3 duration-400 transition-all" />
            <div className="">
                <p className="group-hover:text-blue-500 text-lg font-semibold">Free Delivery & Return</p>
                <p className="text-md text-slate-400">Free Delivery on Whole Country</p>
            </div>
            </div>
            <div className="group w-full justify-center flex items-center  py-3 md:py-0 md:pl-2 md:pr-6 border-b  md:border-b-0 md:border-r">
            <GrMoney className="group-hover:text-slate-700 text-slate-300  text-4xl mr-3 duration-400 transition-all" />
            <div className="">
                <p className="group-hover:text-blue-500 text-lg font-semibold">Money Guarantee</p>
                <p className="text-md text-slate-400">30 days money back guarantee</p>
            </div>
            </div>
            <div className="group w-full justify-center flex items-center  py-3 md:py-0 md:pl-2 md:pr-6  ">
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