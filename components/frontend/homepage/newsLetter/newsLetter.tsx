import React from 'react'

function NewsLetter() {
  return (
    <div className='bg-white p-8 flex flex-col gap-8 items-center justify-center rounded-2xl h-[300px]'>
      <div className='flex flex-col justify-center items-center gap-2'>
      <h1 className='font-bold text-3xl'>Subscribe to our newsletter!</h1>
      <h1>We'll send you the best of our blog just once a month. We promise.</h1>
      </div>
      <div className='flex gap-4 rounded w-full justify-center'>
      <input className='bg-[#F4F4F4] px-8 w-2/6 focus:outline-none rounded' type="search" name="email_address" placeholder='Email Address' 
       />
       <button className='bg-violet-600 text-white font-bold p-2 rounded'>
          Subscribe
       </button>
      </div>
    </div>
  )
}

export default NewsLetter