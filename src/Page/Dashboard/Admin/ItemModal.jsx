import React from 'react'

const ItemModal = ({ openModal, setOpenModal, order }) => {
    
    console.log(order)
    return (
        <div id="popup-modal" tabindex="-1" class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/40 flex ">
            <div class="relative w-full px-3 md:px-0 md:w-3/5 max-h-full  ">
                <div class="relative  rounded-lg shadow  dark:bg-gray-700">
                    
                    <div className="relative  bg-white overflow-x-auto rounded-3xl">
                        <h1 className='text-center text-2xl text-blue-500 font-bold py-5'>Order Items</h1>
                    <button
                        onClick={() => setOpenModal(!openModal)}
                        type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-red-600 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                        <table className="w-full border text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 text-center py-3">
                                        Image
                                    </th>
                                    <th scope="col" className="px-3   py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-3  py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-3  py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-3  py-3">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {order && order.cartItems.map((item, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="py-2 px-2">
                                            <div className=' h-20'>
                                                <img src={item.image} className="object-fill h-full w-[95%] mx-auto" alt="Apple Watch" />

                                            </div>
                                        </td>
                                        <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
                                            {item.title}
                                        </th>
                                        <td className="px-3 ">
                                            {item.price}
                                        </td>
                                        <td className="px-3 text-center ">
                                            {item.cartQuantity}
                                        </td>
                                        <td className="px-3 ">
                                            $ {item.price * item.cartQuantity.toFixed(2)}
                                        </td>
                                    </tr>)}                                    
                            </tbody>
                        </table>
                        <div className="mt-4 border-t-2 border-b py-2 px-10">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Subtotal</p>
          <p className="font-semibold text-gray-900">${order?.total_price.toFixed(2)}</p>
        </div>
     
      </div>

                    </div>
                    
                  
                    
                </div>
            </div>
        </div>
    )
}

export default ItemModal