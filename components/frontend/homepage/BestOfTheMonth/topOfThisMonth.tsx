import React from "react";
import TopOfMonthCard from "./topOfMonthCard";

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
  },
];
function TopOfThisMonth() {
  return (
    <>
      <h1 className="text-2xl font-bold">Top Pick's of this month</h1>
      <div className="flex gap-2 items-center justify-between">
        <TopOfMonthCard />
        <TopOfMonthCard />
        <TopOfMonthCard />
      </div>
    </>
  );
}

export default TopOfThisMonth;
