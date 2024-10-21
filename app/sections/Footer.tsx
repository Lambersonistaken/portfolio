"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    // CardDescription,
    // CardFooter,
    // CardHeader,
    // CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import twitterIcon from "@/app/assets/twicon.svg"
import githubIcon from "@/app/assets/githubicon.png"
import linkedinIcon from "@/app/assets/linkedinicon.png"
import discordIcon from "@/app/assets/discordicon.svg"
import whitelogo from "@/app/assets/whitelogo.svg"


const Footer = () => {
  return (
    <footer id="contact" className="mt-16">
        <div className="flex flex-col w-full">
            <div className="social-container px-2 mb-6 flex flex-col items-center justify-center gap-4">
            <a href="mailto:ismailemirr54@gmail.com"><Button size="lg" className="py-6">
                Get In Touch
            </Button></a>
            <div className="cards-container flex gap-4 mt-4">
                <Card className="cursor-pointer">
                  <a href="https://x.com/lmbrndev" target="_blank">
                  <CardContent>
                    <Image width={20} className="mx-auto" src={twitterIcon} alt="tw icon"></Image>
                  </CardContent>
                  </a>
                </Card>
                <Card className="cursor-pointer">
                  <a href="https://github.com/Lambersonistaken" target="_blank">
                  <CardContent>
                    <Image width={20} className="mx-auto" src={githubIcon} alt="tw icon"></Image>
                  </CardContent>
                  </a>
                </Card>
                <Card className="cursor-pointer">
                  <a href="https://www.linkedin.com/in/ismailemir/" target="_blank">
                  <CardContent>
                    <Image width={20} className="mx-auto" src={linkedinIcon} alt="tw icon"></Image>
                  </CardContent>
                  </a>
                </Card>
                <Card className="cursor-pointer">
                  <a href="#" target="_blank">
                  <CardContent>
                    <Image width={20} className="mx-auto" src={discordIcon} alt="tw icon"></Image>
                  </CardContent>
                  </a>
                </Card>
            </div>
            <h2 className="font-medium text-lg mt-2">You can connect with me on socials.</h2>
            </div>
            <div className="copyright flex items-center justify-between lg:justify-around px-3 bg-black ">
            <div className="flex items-center gap-2 px-4 py-4">
                <Image className="lg:w-10" src={whitelogo} alt="logo"></Image>
                <h1 className="font-extrabold tracking-tighter bg-gradient-to-b from-white to-[#d4d4d4] text-transparent bg-clip-text sm:text-xl md:text-2xl lg:text-3xl">İsmail Emir</h1>
            </div>
            <div className="flex gap-2 text-sm font-medium text-white">
                <p>@2024 by İsmail Emir</p>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
