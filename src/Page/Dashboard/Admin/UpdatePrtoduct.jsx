import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Image_Upload from '../../../utls/image_upload'
import { FaCross, FaRegTrashAlt } from 'react-icons/fa'
import { RxCross1 } from "react-icons/rx";
import { useUpdateProductMutation } from '../../../app/features/productAPISlice';
import { toast } from 'react-toastify';


const UpdatePrtoduct = ({setOpenEditModal, openEditModal, product}) => {
    const  [updateProduct, {isLoading}] = useUpdateProductMutation()
    const {register, reset, handleSubmit, setValue, formState: { errors },} = useForm()
    const [inputFiles, setInputFiles] = useState(null)
    
    

    useEffect(()=>{
      if(product){
        Object.keys(product).forEach((key)=> {
          setValue(key, product[key])
        })
      }
    },[product, setValue])    
    const onSubmit = async d => {
            
      // -------- Update product data with image ----
      if(inputFiles.length > 0){
        const formData = new FormData()
        // Append each file individually
        inputFiles.forEach(file => formData.append("file", file))      
       formData.append("cloud_name", "dxspmmowc")
       formData.append("upload_preset", "walmart")
   
       const url = "https://api.cloudinary.com/v1_1/dxspmmowc/image/upload"
   
       const data = await fetch(url, {
         method: "POST",
         body: formData,
       })
       .then(res => res.json())
       alert(data.error)
       
       // console.log(data)
    
       // --- post data to database ----
 
       const result = await updateProduct({...d, id: product._id, image: data?.url})
     if(result.data){
         console.log(result.data)
         setOpenEditModal(!openEditModal)
         toast.success("Updated product successfully")         
         setInputFiles(null)
     }
     if(result.error){
         // toast.error(`${result.error?.data}`,)
         console.log(result.error)
     }
      }else{
        // -------- Update product data without image ----

        const result = await updateProduct({...d, id: product._id,})
        if(result.data){
            console.log(result.data)
            setOpenEditModal(!openEditModal)
            toast.success("Updated product successfully")            
        }
        if(result.error){
            // toast.error(`${result.error?.data}`,)
            console.log(result.error)
        }
      }      
    }
  return (
    <div id="popup-modal" tabindex="-1" class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[999] justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/40 flex ">
    <div class="relative w-full px-4 md:px-0 md:w-2/5 max-h-full  ">
    <section className="bg-slate-100 dark:bg-gray-900 rounded-2xl p-4">
  <div className=" px-4  mx-auto ">
  <section className="bg-slate-100 dark:bg-gray-900">
  <div className=" px-4  mx-auto py-1">
    <div className="flex justify-end items-center">
    <h2 className="capitalize mr-[30%] text-center text-2xl font-bold text-gray-900 dark:text-white">
      Update product
    </h2>
    <div onClick={()=>setOpenEditModal(!openEditModal)} className="flex justify-end cursor-pointer ms-1/2 text-red-600 hover:text-red-800">
        <p><RxCross1 className='h-6 w-6' /> </p>
    </div>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid mt-2 sm:grid-cols-2 gap-1 md:gap-2 ">
        <div className="col-span-2">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
           {...register("title", {required: true})}           
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"            
            placeholder="Type product title"            
          />
          {errors.title && errors.title.type === "required" && (
        <p className='text-red-400 text-md ps-3 py-1'>Title is required</p>
      )}      
        </div>
        <div className="w-full">
          <label
            htmlFor="brand"
            
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Brand
          </label>
          <input
            type="text"
            {...register("brand", {required: true})}          
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"            
            placeholder="Product brand"            
          />
          {errors.brand && errors.brand.type === "required" && (
        <p className='text-red-400 text-md ps-3 py-1'>Brand is required</p>
      )}  
        </div>
        <div className="w-full">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="number"
            {...register("price", {required: true})}            
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"            
            placeholder="Price"            
          />
          {errors.price && errors.price.type === "required" && (
          <p className='text-red-400 text-md ps-3 py-1'>Price is required</p>
      )}  
        </div>
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <select
            id="category"
            {...register("category", {required: true})}            
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >          
        <option value="">Select</option>
        <option value="Mobile">Mobile</option>
        <option value="Watch">Watch</option>
        <option value="Laptop">Laptop</option>
        <option value="Camera">Camera</option>
        <option value="PC">PC</option>
        <option value="Microphone">Microphone</option>
        <option value="Headphone">Headphone</option>
        <option value="Printer">Printer</option>
        <option value="Keyboard">Keyboard</option>
        <option value="electronics">Electronics</option>
          </select>
          {errors.category && errors.category.type === "required" && (
        <p className='text-red-400 text-md ps-3 py-1'>Category is required</p>

      )}  
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company
          </label>
          <input
            type="text"
            {...register("company", {required: true})}
            id="company"            
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"            
            placeholder="Company"            
          />
          {errors.company && errors.company.type === "required" && (
        <p className='text-red-400 text-md ps-3 py-1'>Category is required</p>
      )}  
        </div>
        <div className="col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {required: true, minLength: 100})}            
            rows={3}
            className="block text-justify p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Write a product description here..."           
          />
          {errors.description && errors.description.type === "required" && (
          <p className='text-red-400 text-md ps-3 py-1'>Description is required</p>
      )}  
          {errors.description && errors.description.type === "minLength" && (
          <p className='text-red-400 text-md ps-3 py-1'>Description must be at least 100 characters long</p>
        )}
        </div>
        <div className="col-span-2 ">
        <Image_Upload  inputFiles={inputFiles} setInputFiles={setInputFiles} />        
        </div>
        <div className="col-span-2 flex items-center justify-center w-full">
  
</div>

      </div>
      <div className="flex items-center space-x-4">
        <button
          type="submit"
          className="text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Update product
        </button>
        <p          
          onClick={()=>setOpenEditModal(!openEditModal)}
          className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >          
          Cancel
        </p>
      </div>
    </form>
  </div>
</section>
  </div>
</section>
    </div>
</div>
  )
}

export default UpdatePrtoduct