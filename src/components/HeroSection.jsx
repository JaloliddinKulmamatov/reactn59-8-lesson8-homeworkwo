"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function HeroSection() {
  return (
    <div className="grid grid-cols-12 center container mt-24 mx-auto px-12 py-4">
      <div className=" col-span-12 place-self-center text-center sm:text-left sm:col-span-8 justify-self-start ">
        <h1 className="inline-block bg-gradient-to-r from-[#99f46b] to-[#e9f84b] bg-clip-text text-transparent mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          Hello I&apos;m
        </h1>
        <br />
        <TypeAnimation
          className=" text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"
          sequence={[
            "Jaloliddin",
            1000,
            "HTML/CSS",
            1000,
            "TAILWIND",
            1000,
            "JavaScript",
            1000,
            "TypeScript",
            1000,
            "ReactJS",
            1000,
            "NextJS Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          eaque?
        </p>
        <div>
          <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-[#99f46b] to-[#e9f84b] hover:bg-slate-200 text-white">
            Hire Me
          </button>
          <a
            class="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#99f46b] to-[#e9f84b] hover:bg-slate-800 text-white mt-3"
            href="/"
          >
            <span class="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </a>
        </div>
      </div>
      <div className="col-span-4">
        <img src="/portfolio.png" alt="abc" />
      </div>
    </div>
  );
}

export default HeroSection