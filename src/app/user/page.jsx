import Image from "next/image";
import React from "react";

export default function user() {
  return (
    <div className="m-auto flex text-center justify-center flex-col items-center mt-9 gap-3">
      <Image
        className="rounded-full "
        src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
        alt="user placeholder"
        width="200"
        height="200"
      />
      <div className="font-semibold text-base">
        Aaron Fernandes
      </div>
    </div>
  );
}
