import Category from "@/components/frontend/homepage/category/category";
import LifeStyle from "@/components/frontend/homepage/lifestyle/lifeStyle";
import NewsLetter from "@/components/frontend/homepage/newsLetter/newsLetter";
import TopOfThisMonth from "@/components/frontend/homepage/BestOfTheMonth/topOfThisMonth";
import Slideshow from "@/components/frontend/homepage/slidshow/slideshow";
import FoodAndWellness from "@/components/frontend/homepage/foodandwellness/foodAndWellness";
import Beauty from "@/components/frontend/homepage/beauty/beauty";

export default function Home() {
  return (
    <main className="mx-auto w-4/6 flex flex-col gap-12 mt-10">
      <Category/>
      <Slideshow/>
      <TopOfThisMonth/>
      <LifeStyle/>
      <FoodAndWellness/>
      <Beauty/>
      <NewsLetter/>
    </main>
  );
}
