"use client";

import { useState } from "react";

const About = ({ id }) => {
  const object = {
    skills: [
      "HTML",
      "CSS",
      "JacaSript",
      "TypeScript",
      "Sass",
      "Tailwind",
      "Boostrap",
      "React",
    ],
    education: ["Najot Talim"],
  };

  const list = Object.keys(object);

  const [active, setActive] = useState();

  return (
    <div
      id={id}
      className="grid-cols-2 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
    >
      <div className="col-span-2 lg:col-span-1">
        <img className="w-full" src="/about.jpg" alt="about" />
      </div>
      <div className="col-span-2 lg:col-span-1">
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          esse aliquam ullam excepturi accusantium harum deserunt eum
          temporibus. Nam dicta minima magnam, rem quos voluptatum delectus quo
          impedit neque voluptate aspernatur esse sequi eos iure cumque expedita
          libero inventore illum aliquam? Facilis aliquam reprehenderit officia
          facere sequi odio voluptate, soluta iste quae minus suscipit
          asperiores sunt illo quis voluptates culpa.
        </p>
        <div className=" mt-10">
          <ul className="flex gap-5 list-none font-bold">
            {list.map((l, index) => (
              <li className="text-xl" key={index}>
                <button
                  className={`${
                    active !== l
                      ? ""
                      : "border-b-4 border-green-500 duration-200"
                  }`}
                  onClick={() => setActive(l)}
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="mt-7 pl-3 list-disc">
            {active &&
              object[active].map((s, index) => (
                <li className="text-base" key={index}>
                  {s}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
