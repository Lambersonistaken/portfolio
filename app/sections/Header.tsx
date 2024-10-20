"use client"
import Image from "next/image";
import headerMenu from "@/app/assets/headerMenu.svg"
import blacklogo from "@/app/assets/blacklogo.svg"
import { Button } from "@/components/ui/button"
import { PinBottomIcon } from "@radix-ui/react-icons"


const Header = () => {
  return (
    <header className="mb-10 sticky top-0 backdrop-blur-sm z-20">
        <div className="container sm:mx-auto md:max-auto lg:mx-auto">
            <div className="flex items-center justify-between sm:justify-between lg:justify-around md:justify-around 2xl:justify-around">
            <div className="flex items-center gap-2 px-4 py-4">
                <Image className="lg:w-10" src={blacklogo} alt="logo"></Image>
                <h1 className="font-extrabold tracking-tighter bg-gradient-to-b from-black to-[#515253] text-transparent bg-clip-text sm:text-xl md:text-2xl lg:text-3xl">İsmail Emir</h1>
            </div>
            <div className="px-4 py-4 sm:hidden">
                <Image src={headerMenu} alt="header menu"></Image>
            </div>
            <div className="hidden sm:block">
                  <ul className="flex items-center cursor-pointer gap-5 font-semibold lg:text-2xl">
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Project</li>
                    <li>Contact Me</li>
                  </ul>
            </div>
            <Button>
              <PinBottomIcon /> Resume
            </Button>
            </div>
        </div>
    </header>
  )
}

export default Header
