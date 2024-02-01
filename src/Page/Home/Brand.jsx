import React from 'react'

const Brand = () => {
  return (
    <div
    className=" py-8 border-t mt-10 relative overflow-hidden">
        <div className="max-w-[1170px] mx-auto ">
        <div className="grid grid-cols-3 md:grid-cols-6">
            <img src="https://landing.engotheme.com/html/ecome/demo/img/brand/brandlogo1.png"
            className="opacity-25 hover:opacity-80" alt="" />
            <img src="https://landing.engotheme.com/html/ecome/demo/img/brand/brandlogo2.png"
            className="opacity-25 hover:opacity-80 animate-pulse" alt="" />
            <img src="https://landing.engotheme.com/html/ecome/demo/img/brand/brandlogo3.png"
            className="opacity-25 hover:opacity-80" alt="" />
            <img src="https://landing.engotheme.com/html/ecome/demo/img/brand/brandlogo4.png"
            className="opacity-25 hover:opacity-80 animate-pulse" alt="" />
            <img src="https://landing.engotheme.com/html/ecome/demo/img/brand/brandlogo5.png"
            className="opacity-25 hover:opacity-80" alt="" />
            <img src="https://landing.engotheme.com/html/ecome/demo/img/brand/brandlogo6.png"
            className="opacity-25 hover:opacity-80  animate-pulse" alt="" />
        </div>
        </div>
        <div>
            <span className="w-16 h-16 rounded-full animate bg-slate-300 absolute -top-[25%] left-6 delay-100 duration-500"></span>
            <span className="w-16 h-16 rounded-full animate bg-slate-300 absolute -top-[25%] right-6 delay-100 duration-500"></span>
            <span className="w-16 h-16 rounded-full animate- bg-slate-300 absolute -bottom-[30%] left-1/2 delay-100 duration-500"></span>

            <span className="w-6 h-6  bg-slate-700 absolute -right-2 top-1/2 delay-500 duration-500 border border-x-green-300 "></span>
            <span className="w-6 h-6  bg-slate-700 absolute -left-2 top-1/2 delay-500 duration-500 border border-x-green-300 "></span>
            {/* <span className="w-16 h-16 rounded-full animate-bounce bg-slate-300 absolute -top-[25%] left-6 delay-100 duration-500"></span> */}
          
        </div>
    </div>
  )
}

export default Brand