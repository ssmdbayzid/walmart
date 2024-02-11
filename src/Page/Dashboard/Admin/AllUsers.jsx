import React, { useEffect, useState } from 'react'
import { useGetAllUsersQuery } from '../../../app/features/userApiSlice'
import avatar from '../../../assets/avatar.png'

const AllUsers = () => {
  const {data, isLoading} = useGetAllUsersQuery()
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState(null)
  useEffect(()=>{
    setLoading(true)
    if(data){
      setUsers(data)  
      setLoading(false)    
    }
  },[data])

  
  console.log(users)
  return (
    <div>      
      <h2 className='text-2xl py-2 bg-blue-200  text-center'>All Users</h2>
      <div className="overflow-y-hidden rounded-lg border">
  {loading ? <p>Loading .. </p> :<> <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
          <th className="px-5 py-3">Sl No</th>
          <th className="px-5 py-3">User Email</th>
          <th className="px-5 py-3">User Role</th>
          <th className="px-5 py-3">Action</th>
          <th className="px-5 py-3">Delete</th>
        </tr>
      </thead>
      <tbody className="text-gray-500">
        {users && users.data.map((user, index)=>
        <tr key={index}>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <p className="whitespace-no-wrap">{index + 1}</p>
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
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
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <p className="whitespace-no-wrap">{user.role}</p>
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <button disabled={user.role === "admin"} className="whitespace-no-wrap bg-green-400 px-2 py-2 rounded-lg text-white">{user.role === "admin" ? "admin" : "Make Admin"}</button>
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <button className=" bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold ">
              Delete
            </button>
          </td>
        </tr>)}
      
      </tbody>
    </table>
  </div></>}
  <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
    <span className="text-xs text-gray-600 sm:text-sm">
      {" "}
      Showing 1 to 5 of 12 Entries{" "}
    </span>
    <div className="mt-2 inline-flex sm:mt-0">
      <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
        Prev
      </button>
      <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
        Next
      </button>
    </div>
  </div>
</div>

      </div>
  )
}

export default AllUsers