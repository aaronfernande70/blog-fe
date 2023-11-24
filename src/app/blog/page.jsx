import React from "react";
import TileUserChip from "../components/molecules/TileUserChip";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="px-8 pt-5">
      <div className="blog">
        <TileUserChip />
        <div className="flex flex-col py-5 mb-5 gap-9 ">
          <div className="text-xl text-center">Title of the Blog</div>
          <Image
            className="mx-auto rounded-md lazy-image"
            src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
            alt="placeholder"
            height="175"
            width="350"
          />
          <div className="text-center leading-loose text-sm text-neutral-800">
            lly of a small group, and often covered a single subject or topic.
            In the 2010s, multi-author  (MABs) emerged, featuring the
            writing of multiple authors and sometimes professionally edited.
            MABs from newspapers, other media outlets, universities, think
            tanks, advocacy groups, and similar institutions account for an
            increasing quantity of blog traffic. The rise of Twitter and other
             systems helps integrate MABs and single-author blogs
            into the news media. Blog can also be used as a verb, meaning to
            maintain or add content to a blog. The emergence and growth of blogs
            in the late 1990s coincided with the advent of web publishing tools
            that facilitated the posting of content by non-technical users who
            did not have much experience with HTML or computer programming.
            Previously, knowledge of such technologies as HTML and File Transfer
            Protocol had been required to publish content on the Web, and early
            Web users therefore tended to be hackers and computer enthusiasts.
            As of the 2010s, the majority are interactive Web 2.0 websites,
            allowing visitors to leave online comments, and it is this
            interactivity that distinguishes them from other static websites.[2]
            In that sense, blogging can be seen as a form of social networking
            service. Indeed, bloggers not only produce content to post on their
            blogs but also often build social relations with their readers and
            other bloggers.[3] Blog owners or authors often moderat
          </div>
        </div>
        <div className="comments mb-5">
          <div className="mb-4 font-semibold">comment section</div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <TileUserChip />
              <div>------ users comment added -------</div>
              <div className="flex gap-2">
                <span>Like</span>
                <span>Reply</span>
                <span>Reply</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <TileUserChip />
              <div>------ users comment added -------</div>
              <div className="flex gap-2">
                <span>Like</span>
                <span>Reply</span>
                <span>Reply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
