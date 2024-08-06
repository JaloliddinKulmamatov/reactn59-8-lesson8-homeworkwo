"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

function MyProjects({ id }) {
  const object = {
    web: [
      {
        imgscr:
          "https://img.freepik.com/premium-vector/headphone-website-header-hero-area-design-template_123247-34.jpg?w=1480",
        title: "Headphones e-commerce",
        linkGit: "https://github.com/JaloliddinKulmamatov/reactn59-exam-7",
        linkVercel: "https://reactn59-exam-7.vercel.app/",
      },
      {
        imgscr:
          "https://cdn.dribbble.com/users/276065/screenshots/3775219/media/8873548df0058ff4dbb07263a308d69a.png",
        title: "To-do app",
        linkGit: "https://github.com/JaloliddinKulmamatov/real-to-do",
        linkVercel: "https://real-to-do.vercel.app/",
      },
    ],
    mobile: [
      {
        imgscr:
          "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?t=st=1722818095~exp=1722821695~hmac=4b4b08df35d029c505ab981d5e85561942d0fbe716100e91ecf3013eebfd9044&w=1480",
        title: "Room builder",
        linkVercel: "https://reactn59-7-lesson4-homework.vercel.app/",
        linkGit:
          "https://github.com/JaloliddinKulmamatov/reactn59-7-lesson4-homework",
      },
    ],
  };

  const list = Object.keys(object);
  const [active, setActive] = useState(list[0]);

  const combinedProjects =
    active === "all"
      ? list.flatMap((key) => object[key])
      : object[active] || [];

  return (
    <div id={id}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul className="text-white flex-row justify-center items-center gap-2 py-6 flex list-none font-bold">
        <li>
          <button
            className={`text-white border-primary-500 rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
              active === "all" ? "border-4 border-green-500 duration-200" : ""
            }`}
            onClick={() => setActive("all")}
          >
            All
          </button>
        </li>
        {list.map((l, index) => (
          <li className="text-xl list-none" key={index}>
            <button
              className={`text-white border-primary-500 rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
                active !== l ? "" : "border-4 border-green-500 duration-200"
              }`}
              onClick={() => setActive(l)}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>
      <ul className="project grid  sm:grid-cols-2 lg:grid-cols-3 mt-7 pl-3 list-disc gap-10">
        {combinedProjects.length > 0 ? (
          combinedProjects.map((s, index) => (
            <li
              className="text-base list-none sm:grid-cols-1 lg:col-span-1 relative group"
              key={index}
            >
              <Image
                className="rounded-xl w-full h-[280px] cursor-pointer hover:opacity-75"
                src={s.imgscr}
                alt={s.title}
                width={300}
                height={200}
              />
              <div className="absolute inset-0 flex gap-8 items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={s.linkVercel}
                  className="text-white font-bold cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEye className="h-20" />
                </a>
                <a
                  href={s.linkGit}
                  className="text-white font-bold cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode className="h-20" />
                </a>
              </div>
              <h3>{s.title}</h3>
            </li>
          ))
        ) : (
          <li className="text-center text-white col-span-3">
            No projects available
          </li>
        )}
      </ul>
    </div>
  );
}

export default MyProjects;
