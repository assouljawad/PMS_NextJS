import React from "react";
import { FaBath } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import { MdOutlineAssistant } from "react-icons/md";
import { IoWomanSharp } from "react-icons/io5";




import Link from "next/link"

function Category() {
  return (
    <div className="flex justify-between">
      <Link href={"/beauty"} className="flex flex-col items-center bg-white w-1/5 rounded-xl py-4 gap-3">
        <FaBath className="text-[#5A67D8] text-3xl"/>
        <span className="font-bold text-[#718096]">Beauty</span>
      </Link>
      <Link href={"/fashionandstyle"} className="flex flex-col items-center bg-white w-1/5 rounded-xl py-4 gap-3">
        <IoWomanSharp className="text-[#5A67D8] text-3xl"/>
        <span className="font-bold text-[#718096]">Fashion and Style</span>
      </Link>
      <Link href={"/foodandwellness"} className="flex flex-col items-center bg-white w-1/5 rounded-xl py-4 gap-3">
        <MdOutlineRestaurant className="text-[#5A67D8] text-3xl"/>
        <span className="font-bold text-[#718096]">Food and wellness</span>
      </Link>
      <Link href={"/lifestyle"} className="flex flex-col items-center bg-white w-1/5 rounded-xl py-4 gap-3">
        <MdOutlineAssistant className="text-[#5A67D8] text-3xl"/>
        <span className="font-bold text-[#718096]">Lifestyle</span>
      </Link>
    </div>
  );
}

export default Category;
