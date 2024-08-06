"use client"

import Link from "next/link";
import React, {useState} from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


function NavBar() {
  const [open,setOpen] = useState(false)
  return (
    <nav className="w-full flex justify-between fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div>
          <h1 className=" text-5xl font-bold ">LOGO</h1>
        </div>
        <div className=" hidden sm:flex gap-10 ">
          <Link
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            href="#about"
          >
            About
          </Link>
          <Link
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            href="#contact"
          >
            Contact
          </Link>
        </div>
        <Menu as="div" className="relative inline-block text-left sm:hidden">
          <div>
            <MenuButton
              className=" bg-[#121212] inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <IoClose className="text-white" />
              ) : (
                <FaBars className="  text-white " />
              )}
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56  rounded-md bg-[#121212] shadow-lg ring-1 ring-white ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                  href="#about"
                >
                  About
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                  href="#projects"
                >
                  Projects
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                  href="#contact"
                >
                  Contact
                </Link>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
}

export default NavBar;
