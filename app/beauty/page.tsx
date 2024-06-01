import React from "react";
import Beautysinglpagecard from "@/components/frontend/homepage/beauty/beautysinglpagecard";

function Page() {
  return (
    <div className="mx-auto w-4/6 flex flex-col gap-4 mt-10">
      <h1 className="text-3xl font-bold uppercase">beauty</h1>
      <p className="text-xl font-bold">
        Lorem ipsum dolor sit amet elit. Id quaerat amet ipsum sunt et quos
        dolorum.
      </p>
      <div className="grid grid-cols-2 gap-4 place-items-center ">
        <Beautysinglpagecard />
        <Beautysinglpagecard />
        <Beautysinglpagecard />
        <Beautysinglpagecard />
        <Beautysinglpagecard />
        <Beautysinglpagecard />
        <Beautysinglpagecard />
        <Beautysinglpagecard />
      </div>
      <div className="flex gap-4 justify-center items-center">
        <button className="p-2 font-bold rounded-lg bg-[#5A67D8] text-white">Prev</button>
        <button className="p-2 px-4 font-bold rounded-lg bg-[#5A67D8] text-white">1</button>
        <button className="p-2 px-4 font-bold rounded-lg bg-[#5A67D8] text-white">2</button>
        <button className="p-2 px-4 font-bold rounded-lg bg-[#5A67D8] text-white">3</button>
        <button className="p-2 px-4 font-bold rounded-lg bg-[#5A67D8] text-white">...</button>
        <button className="p-2 font-bold rounded-lg bg-[#5A67D8] text-white">Next</button>
      </div>
    </div>
  );
}

export default Page;
