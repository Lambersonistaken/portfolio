"use client"
import Image from "next/image";
import headerMenu from "@/app/assets/headerMenu.svg"
import blacklogo from "@/app/assets/blacklogo.svg"

const Header = () => {
  return (
    <section className="mb-10">
        <div className="container sm:mx-auto md:max-auto lg:mx-auto">
            <div className="flex items-center justify-between sm:justify-evenly lg:justify-evenly md:justify-evenly">
            <div className="flex items-center gap-2 px-4 py-4">
                <Image className="lg:w-10" src={blacklogo} alt="logo"></Image>
                <h1 className="font-extrabold tracking-tighter bg-gradient-to-b from-black to-[#515253] text-transparent bg-clip-text sm:text-xl md:text-2xl lg:text-3xl">İsmail Emir</h1>
            </div>
            <div className="px-4 py-4 sm:hidden">
                <Image src={headerMenu} alt="header menu"></Image>
            </div>
            <div className="hidden sm:block">
                  <ul className="flex items-center gap-5 font-semibold lg:text-2xl">
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Project</li>
                    <li>Contact Me</li>
                  </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header
