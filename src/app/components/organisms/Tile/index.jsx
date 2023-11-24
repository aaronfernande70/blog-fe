import Image from "next/image";
import TileUserChip from "../../molecules/TileUserChip";
import TimeChip from "../../molecules/TimeChip";
import Link from "next/link";

export default function Tile({ blog }) {
  return (
    <div className="w-full bg-white mb-3">
      <Link href="/blog">
        <Image
          className="mx-auto rounded-sm lazy-image"
          src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
          alt="placeholder"
          height="175"
          width="350"
        />
      </Link>

      <div className="px-4 pb-3">
        <TimeChip />
        <Link className="w-auto" href="/blog">
          <h2 className="py-2 font-medium capitalize">{blog?.blogTitle}</h2>
        </Link>
        <div className="flex justify-between">
          <TileUserChip />
          <div>
            <svg
              width="24"
              height="24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              data-v-481ddfc4=""
            >
              <path d="M8.25 2.5A3.262 3.262 0 0 0 5 5.75v15a.75.75 0 0 0 1.188.608L12 17.174l5.811 4.184A.75.75 0 0 0 19 20.75v-15a3.262 3.262 0 0 0-3.25-3.25h-7.5Zm0 1.5h7.5c.975 0 1.75.775 1.75 1.75v13.536l-5.062-3.644a.75.75 0 0 0-.877 0L6.5 19.286V5.75C6.5 4.775 7.275 4 8.25 4Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}