"use client"
import Image from "next/image";
import headerMenu from "@/app/assets/headerMenu.svg"
import blacklogo from "@/app/assets/blacklogo.svg"

const Header = () => {
  return (
    <section>
        <div className="container">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 px-4 py-4">
                <Image src={blacklogo} alt="logo"></Image>
                <h1 className="font-extrabold tracking-tighter bg-gradient-to-b from-black to-[#515253] text-transparent bg-clip-text">İsmail Emir</h1>
            </div>
            <div className="px-4 py-4">
                <Image src={headerMenu} alt="header menu"></Image>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Header
