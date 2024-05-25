import Category from "@/components/frontend/homepage/category";
import Footer from "@/components/frontend/homepage/footer";
import LifeStyle from "@/components/frontend/homepage/lifeStyle";
import NewsLetter from "@/components/frontend/homepage/newsLetter";
import TopOfThisMonth from "@/components/frontend/homepage/topOfThisMonth";
import Slideshow from "@/components/frontend/homepage/slideshow";
import FoodAndWellness from "@/components/frontend/homepage/foodAndWellness";
import Beauty from "@/components/frontend/homepage/beauty";

export default function Home() {
  return (
    <main className="mx-auto w-3/4 flex flex-col gap-8 mt-10">
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
