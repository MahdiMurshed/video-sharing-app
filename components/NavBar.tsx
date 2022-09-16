import Image from "next/image";
import Link from "next/link";
import React from "react";
import LOGO from "utils/tiktik-logo.png";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer"
            src={LOGO}
            alt="TIKTIK"
            layout="responsive"
          />
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
