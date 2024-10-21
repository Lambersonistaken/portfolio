"use client"
import Image from "next/image";
import aboutImage from "@/app/assets/aboutmeimg.svg"

const About = () => {
  return (
    <section id="about" className="mt-16 px-2 mb-8">
        <div className="container flex flex-col items-center md:flex-row gap-4 md:justify-center mx-auto">
            <Image className=" md:w-[380px] xl:w-[500px]" src={aboutImage} alt="about-me"></Image>
            <div className="flex flex-col px-8 mt-6 xl:w-[600px] 2xl:w-[700px]">
                <h1 className="text-2xl xl:text-4xl 2xl:text-5xl">About <span className="font-extrabold">Me</span></h1>
                <p className="mt-8 mb-4 text-zinc-600 font-medium md:text-xs lg:text-base xl:text-lg 2xl:text-xl">I am a dedicated frontend developer with a strong focus on creating intuitive, user-friendly interfaces and responsive designs. 
                    Aspiring to become a fullstack engineer specializing in both web and mobile development, I am honest, respectful, hardworking, and team-oriented. <br /> <br /> My goal is to continuously improve and contribute to high-performing projects that drive success.

Beyond coding, I have a passion for sports, entrepreneurship, and exploring various topics like history and the stock market. I enjoy watching great films, listening to music, and reading books. I believe in maintaining an active lifestyle and dream of using my free time to build my own ventures while exploring the world.</p>
            </div>
        </div>
    </section>
  )
}

export default About
