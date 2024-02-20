import React from 'react'
import { CircleLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='flex items-center justify-center'>
   <CircleLoader
  color="#36d7b7"
  size={50}
  speedMultiplier={1}
/> 
    </div>
  )
}

export default Loader