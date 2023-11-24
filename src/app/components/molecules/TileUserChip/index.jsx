import Image from "next/image";
import Link from "next/link";

export default function TileUserChip() {
  return (
    <Link href='/user' className="flex gap-2 text-sm items-center">
        <Image className="rounded-full" src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="user placeholder" width="25" height="25"/>
        <p>username</p>
    </Link>
  )
}
