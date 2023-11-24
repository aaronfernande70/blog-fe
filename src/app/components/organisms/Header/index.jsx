"use client";
import Image from "next/image";
import logo from "../../../../../assets/logo.png";
import SearchBar from "../../molecules/SearchBar";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showSearchBar, setShowSearch] = useState(false);

  return (
    <div>
      <div className="py-3 flex justify-evenly px-5">
        <Link className="text-2xl font-extrabold font-serif" href="/">
          <h1 id="logo" className="logo">
            Blob.
          </h1>
        </Link>
       </div>
    </div>
  );
}
