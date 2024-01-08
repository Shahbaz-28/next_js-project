"use client";
import Image from "next/image";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import deved from "../Assets/dev-ed-wave.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const linkedinProfileUrl = "https://www.linkedin.com/in/shahbaz-khan28/";
  const twitterLink =
    "https://x.com/shahbaz_khan28?t=cYQe2-OM8jNSnyBql8LkLA&s=09";
  const githubProfileUrl = "https://github.com/Shahbaz-28?tab=repositories";

  return (
    <div className={darkMode ? "dark" : ""}>
    <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <h1 className="font-burtons text-xl">developedbysk</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl"
              />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="Shahbaz Resume.pdf" download="Shahbaz Resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Shahbaz Khan
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Front-End Developer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          Hi there, I'm Shahbaz Khan, a passionate Front End Developer dedicated to crafting seamless and engaging user experiences on the web.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a
            href={linkedinProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
          </a>
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <AiFillTwitterCircle />
          </a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>

        <Hero />
        {/* <Footer /> */}
      </main>
    </div>
  );
}
