import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegTrashAlt } from "react-icons/fa";
import Image_Upload from '../../../utls/image_upload';
import { useCreateProductMutation } from '../../../app/features/productAPISlice';
import { toast } from 'react-toastify';



const CreateProduct = () => {
    const {register, reset, handleSubmit, formState: { errors },} = useForm()
    const [inputFiles, setInputFiles] = useState(null)
    const [inputFilesError, setInputFilesError] = useState("")
    const [createProduct, {isloading}] = useCreateProductMutation()

    const onSubmit = async d => {
      if (!inputFiles?.length) return   setInputFilesError("Photo is required")


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
      
      // console.log(data)
      alert(data.error)
   
      // --- post data to database ----

      const result = await createProduct({...d, image: data?.url})

    if(result.data){
        console.log(result.data)
        toast.success("Created product successfully")
        reset()
        setInputFiles(null)
    }
    if(result.error){
        // toast.error(`${result.error?.data}`,)
        console.log(result.error)
    }
    }
  return (
    <section className="bg-slate-100 dark:bg-gray-900">
  <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
    <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
      Create product
    </h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
        <div className="sm:col-span-2">
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"            
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"            
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
        <div className="sm:col-span-2">
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
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
        {!inputFiles?.length && <p className='text-red-400 text-md ps-3 py-1'>{inputFilesError}</p>}
        </div>
        <div className="col-span-2 flex items-center justify-center w-full">
  
</div>

      </div>
      <div className="flex items-center space-x-4">
        <button
          type="submit"
          className="text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          {isloading ? "Loading ..." : "Create product"}
        </button>
        <p          
          onClick={()=>{reset(); setInputFiles(null)}}
          className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          <FaRegTrashAlt className='h-6 w-6 mr-3' />
          Reset
        </p>
      </div>
    </form>
  </div>
</section>

  )
}

export default CreateProduct