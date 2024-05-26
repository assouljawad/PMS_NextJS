import Category from "@/components/frontend/homepage/category";
import Footer from "@/components/frontend/homepage/footer";
import LifeStyle from "@/components/frontend/homepage/lifeStyle";
import NewsLetter from "@/components/frontend/homepage/newsLetter";
import TopOfThisMonth from "@/components/frontend/homepage/topOfThisMonth";
import Slideshow from "@/components/frontend/homepage/slidshow/slideshow";
import FoodAndWellness from "@/components/frontend/homepage/foodAndWellness";
import Beauty from "@/components/frontend/homepage/beauty";

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
      <Footer/>
    </main>
  );
}
