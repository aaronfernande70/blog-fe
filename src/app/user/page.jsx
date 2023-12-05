import Image from "next/image";
import React from "react";
import Tile from "../components/organisms/Tile";
import { blogs } from "../hooks";

export default function user() {
  return (
    <div className="px-5">
      <div className="m-auto flex text-center justify-center flex-col items-center mt-9 gap-5 px-8 text-sm pb-8 border-b">
        <Image
          className="rounded-full lazy-image aspect-square"
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/03/10/18/mona-lisa.jpg?width=1200&height=900&fit=crop"
          alt="user placeholder"
          width="200"
          height="200"
        />
        <h1 className="font-semibold text-base">Aaron Fernandes</h1>
        <h2>_aaron_fernandes</h2>
        <p>
          work, relationships, and death; it portrays a persons experience of
          these life events. Unlike a profile or curriculum vi, a
          biography presents a subjects life story, highlighting various
          aspects of their life, including intimate details of experience, and
          may include an analysis
        </p>
      </div>

      <div className="mt-10 text-">
        {blogs?.map((item) => (
          <Tile key={item.blogId} blog={item} />
        ))}
      </div>
    </div>
  );
}
