import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="w-full flex justify-between fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div class="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div>
          <h1 className=" text-5xl font-bold ">LOGO</h1>
        </div>
        <div className=" flex gap-10 ">
          <Link className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white" href="#about">About</Link>
          <Link className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white" href="#projects">Projects</Link>
          <Link className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white" href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
