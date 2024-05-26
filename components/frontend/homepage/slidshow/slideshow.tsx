'use client'
import React,{useState,useEffect}  from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

interface Post {
  id: number;
  category: string;
  title: string;
  text: string;
  image: string;
}
const posts: Post[] = [
  {
    id: 1,
    category: "Technology",
    title: "Latest Tech Trends",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elitarum errorprovident quibusdam tenetur. Ut fermentum leo quis sapienet faucibus, atscelerisque sem feugiat. Nulla in eros purus.",
    image: "/food.jpg",
  },
  {
    id: 2,
    category: "Health",
    title: "Healthy Living Tips",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elitarum errorprovident quibusdam tenetur. Ut fermentum leo quis sapienet faucibus, atscelerisque sem feugiat. Nulla in eros purus.",
    image: "/lifestyle.jpg",
  },
  {
    id: 3,
    category: "Travel",
    title: "Top 10 Destinations",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elitarum errorprovident quibusdam tenetur. Ut fermentum leo quis sapienet faucibus, atscelerisque sem feugiat. Nulla in eros purus.",
    image: "/fashion.jpg",
  },
  {
    id: 4,
    category: "IT",
    title: "Top 10 Destinations",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elitarum errorprovident quibusdam tenetur. Ut fermentum leo quis sapienet faucibus, atscelerisque sem feugiat. Nulla in eros purus.",
    image: "/beauty.jpg",
  }
];

function Slideshow() {
  const [currIndex, setcurrIndex] = useState(0)
  useEffect(()=>{

setInterval(()=>{
},3000)

  },[])
        return (
          <div key={posts[currIndex].id} className="flex gap-4">
            <div className="w-4/6 flex flex-col justify-between">
              <div className="flex flex-col gap-8">
                <span className="bg-[#ECEDF3] py-2 px-4 text-[#5A67D8] cursor-pointer font-bold rounded-full w-2/12 text-center">
                  {posts[currIndex].category}
                </span>
                <h1 className="text-6xl font-bold">{posts[currIndex].title}</h1>
                <p className="text-2xl text-[#79879C] font-semibold">
                  {posts[currIndex].text}
                </p>
              </div>
              <div className="flex gap-1 justify-center">
                {posts.map((post, index)=>{
                  return <GoDotFill key={index} onClick={()=>{
                    setcurrIndex(index)
                  }} className="text-6xl text-[#79879C] hover:text-[#5A67D8] cursor-pointer" />
                })}
              </div>
            </div>
            <div className="w-2/6">
              <Image
                className="rounded-2xl h-full"
                priority={true}
                alt={"slide image"}
                src={posts[currIndex].image}
                width={600}
                height={600}
              />
            </div>
          </div>
  );
}

export default Slideshow;
