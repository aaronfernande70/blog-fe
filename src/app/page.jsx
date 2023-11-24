"use client"
import Categories from "./components/organisms/Categories";
import Tile from "./components/organisms/Tile";
import { blogs, categories } from "./hooks";

export default function Home() {
  return (
    <div className="px-5">
      <Categories categories={categories} />
      <div className="flex flex-col gap-7 ">
        {blogs?.map((item)=> (<Tile key={item.blogId} blog={item}/>))}
      </div>
    </div>
  );
}
