"use client"
import Image from "next/image";
import heroImage from "@/app/assets/heroImage.svg"
import twitterIcon from "@/app/assets/twicon.svg"
import githubIcon from "@/app/assets/githubicon.png"
import linkedinIcon from "@/app/assets/linkedinicon.png"
import discordIcon from "@/app/assets/discordicon.svg"
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card"

const Hero = () => {
  return (
    <section>
        <div className="container sm:mx-auto md:mx-auto lg:mx-auto">
            <div className="sm:flex sm:justify-center md:justify-center lg:justify-center sm:flex-row sm:gap-4 px-2">
            <div>
            <Image className="mx-auto mt-8 sm:w-[1400px] lg:w-[1200px]" src={heroImage} alt="hero image" ></Image>
            </div>
            <div className="mx-auto ml-2 mt-6 text-3xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug">
                <h1><span className="font-normal tracking-tight bg-gradient-to-b from-black to-[#0d0d0e] text-transparent bg-clip-text">Hello, I am</span> <span className="font-extrabold tracking-tight bg-gradient-to-b from-black to-[#0d0d0e] text-transparent bg-clip-text">İsmail Emir</span></h1>
                <h1><span className="font-extrabold tracking-tight bg-gradient-to-b from-black to-[#0d0d0e] text-transparent bg-clip-text">Software</span> <span className="font-light tracking-tight bg-gradient-to-b from-black to-[#0d0d0e] text-transparent bg-clip-text">Developer</span></h1>
                <h1>Based In <span className="font-extrabold tracking-tight bg-gradient-to-b from-black to-[#0d0d0e] text-transparent bg-clip-text">Turkey.</span></h1>
                <p className="text-zinc-500 font-normal text-base mt-6 sm:mt-3 sm:text-sm md:text-base lg:text-lg">I’m a dedicated frontend developer focused on building intuitive, responsive designs. Aspiring to become a fullstack engineer, I value honesty, teamwork, and hard work. My goal is to continuously improve and contribute to impactful, high-performing projects.</p>
                <div className="mx-auto flex items-center mt-6 gap-4">
                <Card className="cursor-pointer">
                  <CardContent>
                    <Image width={25} className="mx-auto" src={twitterIcon} alt="tw icon"></Image>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer">
                  <CardContent>
                    <Image width={25} className="mx-auto" src={githubIcon} alt="tw icon"></Image>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer">
                  <CardContent>
                    <Image width={25} className="mx-auto" src={linkedinIcon} alt="tw icon"></Image>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer">
                  <CardContent>
                    <Image width={25} className="mx-auto" src={discordIcon} alt="tw icon"></Image>
                  </CardContent>
                </Card>

                </div>
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero
