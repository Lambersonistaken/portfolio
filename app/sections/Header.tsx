"use client";
import Image from "next/image";
import headerMenu from "@/app/assets/headerMenu.svg";
import blacklogo from "@/app/assets/blacklogo.svg";
import { Button } from "@/components/ui/button";
import { PinBottomIcon } from "@radix-ui/react-icons";
import { Link } from 'react-scroll';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

const Header = () => {
  return (
    <header  className="mb-10 sticky top-0 backdrop-blur-sm z-20">
      <div className="container sm:mx-auto md:max-auto lg:mx-auto">
        <div className="flex items-center justify-between sm:justify-between lg:justify-around md:justify-around 2xl:justify-around">
          <div className="flex items-center gap-2 px-4 py-4">
            <Image className="lg:w-10" src={blacklogo} alt="logo"></Image>
            <h1 onClick={scrollToTop} className="font-extrabold tracking-tighter bg-gradient-to-b from-black to-[#515253] text-transparent bg-clip-text sm:text-xl md:text-2xl lg:text-3xl cursor-pointer">
                İsmail Emir
            </h1>
          </div>
          <div className="px-4 py-4 sm:hidden ml-auto">
            <Image src={headerMenu} alt="header menu"></Image>
          </div>
          <div className="hidden sm:block ">
            <ul className="flex items-center gap-5 font-semibold sm:text-sm lg:text-2xl">
              <Link to="about" smooth={true} duration={500} offset={-150}>
                <li className="text-orange-500 cursor-pointer transition duration-300 ease-in-out hover:text-blue-300">About Me</li>
              </Link>
              <Link to="experience" smooth={true} duration={500} offset={-50}>
                <li className="text-orange-500 cursor-pointer transition duration-300 ease-in-out hover:text-blue-300">Experience</li>
              </Link>
              <Link to="projects" smooth={true} duration={500} offset={-50}>
                <li className="text-orange-500 cursor-pointer transition duration-300 ease-in-out hover:text-blue-300">Project</li>
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-50}>
                <li className="text-orange-500 cursor-pointer transition duration-300 ease-in-out hover:text-blue-300">Contact Me</li>
              </Link>
            </ul>
          </div>
          <a href="./IsmailCV.pdf" download>
            <Button className="hidden sm:flex">
              <PinBottomIcon /> Resume
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;
