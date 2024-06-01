import React from 'react'
import Image from 'next/image'

import { IoTimeOutline } from "react-icons/io5";
function Beautysinglpagecard() {
  return (
    <div className="hover:drop-shadow-2xl h-[250px] w-full flex   transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-100 duration-200 cursor-pointer">
    <Image className='rounded-l-2xl' src={"/beauty.jpg"} alt='beauty' width={200} height={200}/>
    <div className="bg-white p-8 flex flex-col gap-4 rounded-r-2xl line-clamp-1 justify-end">
      <h1 className="text-xl font-bold text-black">
        Fashion id Creating your Beauty image. The new fashion starts here
      </h1>
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full bg-white"
          alt={"Profile Avatar"}
          src={"/avatar.jpg"}
          width={70}
          height={70}
        />
        <div className="text-black">
          <h3>Isablila ava</h3>
          <div className="flex gap-4 items-center">
            <span>July 13, 2024</span>
            <span className="flex items-center gap-1">
              <IoTimeOutline />1 min
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Beautysinglpagecard