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
            <div className="sm:flex sm:justify-center md:justify-center lg:justify-center sm:flex-row sm:gap-4 xl:gap-12 px-2 xl:px-12">
            <div>
            <Image className="mx-auto mt-8 sm:w-[1400px] lg:w-[1200px] xl:w-[1000px] 2xl:w-[1400px]" src={heroImage} alt="hero image" ></Image>
            </div>
            <div className="mx-auto ml-2 mt-6 text-3xl sm:text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl leading-snug xl:mt-12">
                <h1><span className="font-normal tracking-tight bg-gradient-to-b from-black to-[#0d0d0e] text-transparent bg-clip-text">Hello, I am</span> <span className="font-extrabold tracking-tight bg-gradient-to-b from-black to-[#0d0d0e] text-transparent bg-clip-text">İsmail Emir</span></h1>
                <h1><span className="font-extrabold tracking-tight bg-gradient-to-b from-black to-[#0d0d0e] text-transparent bg-clip-text">Software</span> <span className="font-light tracking-tight bg-gradient-to-b from-black to-[#0d0d0e] text-transparent bg-clip-text">Developer</span></h1>
                <h1>Based In <span className="font-extrabold tracking-tight bg-gradient-to-b from-black to-[#0d0d0e] text-transparent bg-clip-text">Turkey.</span></h1>
                <p className="text-zinc-500 font-normal text-base mt-6 sm:mt-3 xl:mt-5 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">I’m a dedicated frontend developer focused on building intuitive, responsive designs. Aspiring to become a fullstack engineer, I value honesty, teamwork, and hard work. My goal is to continuously improve and contribute to impactful, high-performing projects.</p>
                <div className="mx-auto flex items-center mt-6 gap-4 xl:mt-8 2xl:mt-12">
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
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero
