import Image from "next/image";
import React from "react";
import Tile from "../components/organisms/Tile";
import { blogs } from "../hooks";

export default function user() {
  return (
    <div className="px-5">
      <div className="m-auto flex text-center justify-center flex-col items-center mt-9 gap-5 px-8 text-sm pb-8 border-b">
        <Image
          className="rounded-full lazy-image"
          src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          alt="user placeholder"
          width="200"
          height="200"
        />
        <h1 className="font-semibold text-base">Aaron Fernandes</h1>
        <h2>_aaron_fernandes</h2>
        <p>
          work, relationships, and death; it portrays a person's experience of
          these life events. Unlike a profile or curriculum vitae (résumé), a
          biography presents a subject's life story, highlighting various
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
