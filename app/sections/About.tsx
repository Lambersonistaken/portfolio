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
                <p className="mt-8 mb-4 text-zinc-600 font-medium md:text-xs lg:text-base xl:text-lg 2xl:text-xl">I am a full-stack engineer with hands-on experience building production-ready applications across frontend, backend, and AI-powered features. I work with React, Vue, TypeScript on the frontend, and Python Django, PostgreSQL, REST APIs on the backend, while managing DevOps with Docker and CI/CD pipelines. 
                    
As a founding engineer, I value honesty, teamwork, and hard work. I take ownership of end-to-end product development and thrive in agile startup environments where I can contribute to both technical architecture and cross-functional initiatives. <br /> <br /> My goal is to continuously improve and build impactful, high-performing projects that drive real value.

Beyond coding, I have a passion for sports, entrepreneurship, and exploring various topics like history and the stock market. I enjoy watching great films, listening to music, and reading books. I believe in maintaining an active lifestyle and dream of using my free time to build my own ventures while exploring the world.</p>
            </div>
        </div>
    </section>
  )
}

export default About
