"use client";

import React, { useState } from "react";
import Image from "next/image";

function MyProjects({ id }) {
  const object = {
    all: [
      {
        imgscr:
          "https://img.freepik.com/premium-vector/headphone-website-header-hero-area-design-template_123247-34.jpg?w=1480",
        title: "Headphones e-commerce",
      },
      {
        imgscr:
          "https://img.freepik.com/premium-vector/headphone-website-header-hero-area-design-template_123247-34.jpg?w=1480",
        title: "Headphones e-commerce",
      },
      {
        imgscr:
          "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?t=st=1722818095~exp=1722821695~hmac=4b4b08df35d029c505ab981d5e85561942d0fbe716100e91ecf3013eebfd9044&w=1480",
        title: "Room builder",
      },
    ],
    web: [
      {
        imgscr:
          "https://img.freepik.com/premium-vector/headphone-website-header-hero-area-design-template_123247-34.jpg?w=1480",
        title: "Headphones e-commerce",
      },
    ],

    mobile: [
      {
        imgscr:
          "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?t=st=1722818095~exp=1722821695~hmac=4b4b08df35d029c505ab981d5e85561942d0fbe716100e91ecf3013eebfd9044&w=1480",
        title: "Room builder",
      },
    ],
  };

  const list = Object.keys(object);
  const [active, setActive] = useState(list[0]); // Initialize with the first category

  return (
    <div id={id}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul className=" text-white  flex-row justify-center items-center gap-2 py-6 flex  list-none font-bold ">

        {list.map((l, index) => (
          <li className="text-xl list-none" key={index}>
            <button
              className={` text-white border-primary-500 rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
                active !== l ? "" : "border-4 border-green-500 duration-200"
              }`}
              onClick={() => setActive(l)}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>
      <ul className="grid grid-cols-3 mt-7 pl-3 list-disc gap-10">
        {active &&
          object[active].map((s, index) => (
            <li className="text-base list-none col-span-1" key={index}>
              <Image className=" rounded-xl w-full h-[280px]" src={s.imgscr} alt={s.title} width={300} height={200} />
              <h3>{s.title}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MyProjects;
