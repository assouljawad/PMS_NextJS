import React from 'react'
import BeautyCard from './beautyCard'

function Beauty() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>Beauty</h1>
        <button className='rounded-2xl py-2 px-5 bg-gray-500 text-white'>View More</button>
      </div>
      <div className='flex justify-between'>
        <BeautyCard/>
        <BeautyCard/>
        <BeautyCard/>
      </div>
    </div>
  )
}

export default Beauty