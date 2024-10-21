"use client"
import Image from "next/image";
import landingApp from "@/app/assets/landingapp.png"
import chatApp from "@/app/assets/chatpdfapp.png"
import spotiClone from "@/app/assets/spotifyapp.png"
import { Link2Icon } from "@radix-ui/react-icons"

const Projects = () => {
  return (
    <section className="mt-16 px-2 py-8 bg-black">
        <div className="container sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto">
        <h2 className="font-medium text-white text-2xl leading-snug text-center py-10 xl:text-3xl">My <span className="font-extrabold">Projects</span></h2>

        <div className="card-container mt-8">

            <div className="project-card mt-8 mb-6 px-2 flex flex-col items-center gap-4">
                <Image className="rounded-lg hover:scale-110 transition duration-500 ease-in-out" src={landingApp} width={350} alt="landing app"></Image>
                
                <div className="text-white flex flex-col gap-2">
                    <h1 className="font-extrabold text-lg">01</h1>
                    <h1 className="font-bold">Elegant Landing Page</h1>
                    <p className="mt-2 mb-2 text-zinc-400">This project is a beautifully crafted landing page built with cutting-edge web technologies, offering an engaging and visually appealing user experience. It leverages the power of Next.js for server-side rendering, TailwindCSS for responsive styling, Framer Motion for smooth animations, and TypeScript for robust and type-safe code.</p>
                    <Link2Icon className="cursor-pointer"></Link2Icon>
                </div>
            </div>


            <div className="project-card mt-8 mb-6 px-2 flex flex-col items-center gap-4">
                <Image className="rounded-lg hover:scale-110 transition duration-500 ease-in-out" src={chatApp} width={350} alt="landing app"></Image>
                <div className="text-white flex flex-col gap-2">
                    <h1 className="font-extrabold text-lg">02</h1>
                    <h1 className="font-bold">Chat With PDF AI Application</h1>
                    <p className="mt-2 mb-2 text-zinc-400">This project is an innovative web application that allows users to interact with PDFs in a conversational format. Built using modern web technologies, it leverages Next.js for server-side rendering, AWS S3 for file storage, React and JavaScript for a dynamic frontend experience, and integrates the ChatGPT API for intelligent conversation capabilities. Additionally, it utilizes PineconeDB and NeonDB for efficient data storage and retrieval, with Clerk providing secure user authentication and management.</p>
                    <Link2Icon className="cursor-pointer"></Link2Icon>
                </div>
            </div>

            <div className="project-card mt-8 mb-6 px-2 flex flex-col items-center gap-4">
                <Image className="rounded-lg hover:scale-110 transition duration-500 ease-in-out" src={spotiClone} width={350} alt="landing app"></Image>
                <div className="text-white flex flex-col gap-2">
                    <h1 className="font-extrabold text-lg">03</h1>
                    <h1 className="font-bold">Spotify Clone Application</h1>
                    <p className="mt-2 mb-2 text-zinc-400">This project is a beautifully crafted landing page built with cutting-edge web technologies, offering an engaging and visually appealing user experience. It leverages the power of Next.js for server-side rendering, TailwindCSS for responsive styling, Framer Motion for smooth animations, and TypeScript for robust and type-safe code.</p>
                    <Link2Icon className="cursor-pointer"></Link2Icon>
                </div>
            </div>

            <div className="project-card mt-8 mb-6 px-2 flex flex-col items-center gap-4">
                <Image className="rounded-lg hover:scale-110 transition duration-500 ease-in-out" src={landingApp} width={350} alt="landing app"></Image>
                <div className="text-white flex flex-col gap-2">
                    <h1 className="font-extrabold text-lg">01</h1>
                    <h1 className="font-bold">Elegant Landing Page</h1>
                    <p className="mt-2 mb-2 text-zinc-400">This project is a beautifully crafted landing page built with cutting-edge web technologies, offering an engaging and visually appealing user experience. It leverages the power of Next.js for server-side rendering, TailwindCSS for responsive styling, Framer Motion for smooth animations, and TypeScript for robust and type-safe code.</p>
                    <Link2Icon className="cursor-pointer"></Link2Icon>
                </div>
            </div>

        </div>

        </div>
        
    </section>
  )
}

export default Projects
