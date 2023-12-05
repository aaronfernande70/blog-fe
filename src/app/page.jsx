"use client";
import { useDispatch, useSelector } from "react-redux";
// import Categories from "./components/organisms/Categories";
import Tile from "./components/organisms/Tile";
// import { blogs, categories } from "./hooks";
import { getBlogs } from "@/redux/action/blogs.action";
import { useEffect, useLayoutEffect, useState } from "react";
import Categories from "./components/organisms/Categories";
// import { useEffect } from "react";
import * as pageData from '../../assets/json/blogs.json'


export default function Home() {
  // let dispatch = useDispatch()

  // let pageData = useSelector((state) => state.blogs.pageData);
  // useEffect(() => {
  //   dispatch(getBlogs());

  // }, [])
  
  // console.log(pageData?.categories)
 


  return (
    <div className="px-5">
      <Categories categories={pageData?.categories} />
      <div className="gap-7 grid lg:grid-cols-3 place-items-center md:grid-cols-2">
        {pageData?.blogs?.map((item) => (
          <Tile key={item.blogId} blog={item} />
        ))}
      </div>
    </div>
  );
}
