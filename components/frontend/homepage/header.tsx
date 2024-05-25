import React from 'react'
import Link from 'next/link'
import { IoNewspaperOutline, IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";



function Header() {
  return (
   <div className='bg-white mt-6 w-full'>
    <div className='flex justify-between items-center mx-auto p-4 w-3/4'>
      <Link href={"/"} className='flex gap-2 items-center cursor-pointer'>
      <IoNewspaperOutline className='text-4xl' />
      <span className='text-3xl font-bold'>BlogPost</span>
      </Link>  
      <div className='bg-[#F4F4F4] p-2 rounded-full flex items-center justify-between gap-2 w-2/6'>
        <input type="text" placeholder='Search' className='rounded-full bg-[#F4F4F4] w-full focus:outline-none'/>
        <IoSearch className='text-2xl text-gray-500 cursor-pointer'/>
      </div>
      <div className='flex gap-3'>
        <nav className='flex gap-2'>
          <Link href={"/"} className='font-bold'>Home</Link>
          <span className='font-bold flex items-center'>
            More
            <MdOutlineKeyboardArrowDown />
            </span>
          <Link href={"/contact"} className='font-bold'>Contact</Link>
        </nav>
        <MdOutlineDarkMode className='cursor-pointer text-2xl'/>
      </div>
    </div>
   </div>
  )
}

export default Header