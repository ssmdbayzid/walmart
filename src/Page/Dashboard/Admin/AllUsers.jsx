import React, { useEffect, useState } from 'react'
import { useDeleteUserMutation, useGetAllUsersQuery, useUpdateUserMutation } from '../../../app/features/userApiSlice'
import avatar from '../../../assets/avatar.png'
import { toast } from 'react-toastify'

const AllUsers = () => {
  const {data} = useGetAllUsersQuery()
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState(null)
  const [updateUser] = useUpdateUserMutation()
  const [deleteUser] = useDeleteUserMutation()
  useEffect(()=>{
    setLoading(true)
    if(data){
      setUsers(data)  
      setLoading(false)    
    }
  },[data])

  // --------- Make User as Admin ----
  const handleMakeAdmin = async (id) => {
    try {    
      await updateUser({id, role: "admin"})
      toast.success("Update Successfull")
    } catch (error) {
      console.log(first.message)
      toast.error("Something wents wrong")
    }
  }

const handleDeleteUser = async (id) =>{
  console.log(id)
  try {
    await deleteUser(id)
    toast.success("Deleted user successfully")
  } catch (error) {
    console.log(error)
    toast.error("Something wents wrong")
  }
}
  return (
    <div className='px-2 '>      
      <h2 className='text-center text-2xl font-bold pt-2'>All Users</h2>
    <hr className='mb-4 h-1 bg-gradient-to-r from-yellow-300 via-blue-100 to-blue-500
        w-1/4 m-auto mt-2' /> 
      <div className="overflow-y-auto rounded-lg border h-[calc(100%-1rem)]  ">
  {loading ? <p>Loading .. </p> :<> 
  <div className=" overflow-x-auto  ">
  
    <table className="w-full text-gray-500">
      <thead>
        <tr className="bg-gray-100 text-gray-700 text-left text-xs font-semibold uppercase tracking-widest ">
          <th className="px-5 py-3">Sl No</th>
          <th className="px-5 py-3">User Email</th>
          <th className="px-5 py-3">User Role</th>
          <th className="px-5 py-3">Action</th>
          <th className="px-5 py-3">Delete</th>
        </tr>
      </thead>
      <tbody className="">
        {users && users.data.map((user, index)=>
        <tr key={index} className=''>
          <td className="border-b border-gray-200 bg-white px-5  text-sm">
            <p className="whitespace-no-wrap">{index + 1}</p>
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-2  text-sm">
            <div className="flex items-center">
              <div className="h-10 w-10 flex-shrink-0">
                <img
                  className="h-full w-full rounded-full"
                  src={avatar}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="whitespace-no-wrap">{user.email}</p>
              </div>
            </div>
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-2  text-sm">
            <p className="whitespace-no-wrap">{user.role}</p>
          </td>
          <td  className="border-b border-gray-200  px-5 py-2  text-sm">
            <button onClick={()=> handleMakeAdmin(user._id)} disabled={user.role === "admin"} className="bg-green-400 whitespace-no-wrap px-2 py-2 rounded-lg text-white">{user.role === "admin" ? "admin" : "Make Admin"}</button>
          </td>
          <td  className="border-b border-gray-200 bg-white px-5 py-2 text-sm">
            <button onClick={()=> handleDeleteUser(user._id)} disabled={user?.role === "admin"} className=" bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold ">
              Delete
            </button>
          </td>
        </tr>)}
      
      </tbody>
    </table>
    <div className="flex flex-col items-center border-t  px-5 py-2  sm:flex-row sm:justify-between">
    <span className="text-xs text-gray-600 sm:text-sm">
      {" "}
      Showing 1 page to 1 
    </span>
    <div className="mt-2 inline-flex sm:mt-0">
      <button className="mr-2 h-12 w-12 rounded-lg border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
        Prev
      </button>
      <button className="h-12 w-12 rounded-lg border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
        Next
      </button>
    </div>
  </div>
  </div></>}
  
</div>

      </div>
  )
}

export default AllUsers