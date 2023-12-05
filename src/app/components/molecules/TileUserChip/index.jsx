import Image from "next/image";
import Link from "next/link";

export default function TileUserChip() {
  return (
    <Link href='/user' className="flex gap-2 text-sm items-center">
        <Image className="rounded-full aspect-square" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/03/10/18/mona-lisa.jpg?quality=75&width=1200&auto=webp" alt="user placeholder" width="25" height="25"/>
        <p>username</p>
    </Link>
  )
}
