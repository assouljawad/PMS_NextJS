import React from 'react'
import Image from 'next/image'
import { IoTimeOutline } from "react-icons/io5";

function FoodandwellnessCard() {
  return (
    <div className="hover:drop-shadow-2xl bg-[url('/food1.jpg')] bg-cover h-[500px] w-[380px] rounded-xl transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-100 duration-200 cursor-pointer">
    <div className="bg-black/60 p-8 h-full flex flex-col gap-4 line-clamp-1 rounded-xl justify-end">
      <h1 className="text-xl font-bold text-white">
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
        <div className="text-white">
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

export default FoodandwellnessCard