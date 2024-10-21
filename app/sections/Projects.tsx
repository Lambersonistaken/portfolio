"use client"
import { Link2Icon } from "@radix-ui/react-icons"

const Projects = () => {
  return (
    <section id="projects" className="mt-16 px-2 py-8 bg-black">
        <div className="container sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto">
        <h2 className="font-medium text-white text-2xl leading-snug text-center py-10 xl:text-3xl">My <span className="font-extrabold">Projects</span></h2>

        <div className="card-container mt-8 flex flex-col gap-10 px-4">

            <div className="project-card mt-8 lg:mt-12 lg:mb-10 mb-6 px-2 flex flex-col lg:flex-row lg:gap-12 items-center gap-4">
                <div className="rounded-lg border-2 border-zinc-300 hover:scale-110 transition duration-500 ease-in-out bg-landing bg-cover bg-no-repeat w-[350px] lg:w-2/5 h-[380px]" >
                </div>
                <div className="text-white flex flex-col gap-2 lg:gap-4 lg:w-3/5">
                    <h1 className="font-extrabold text-lg lg:text-xl">01</h1>
                    <h1 className="font-bold lg:text-xl">Elegant Landing Page</h1>
                    <p className="mt-2 mb-2 text-zinc-400 lg:text-lg">This project is a beautifully crafted landing page built with cutting-edge web technologies, offering an engaging and visually appealing user experience. It leverages the power of Next.js for server-side rendering, TailwindCSS for responsive styling, Framer Motion for smooth animations, and TypeScript for robust and type-safe code.</p>
                    <a href="https://light-mode-landing.vercel.app/" target="_blank"><Link2Icon className="cursor-pointer"></Link2Icon></a>
                </div>
            </div>


            <div className="project-card mt-8 lg:mt-12 lg:mb-10 mb-6 px-2 flex flex-col lg:flex-row-reverse lg:gap-12 items-center gap-4">
            <div className="rounded-lg border-2 border-zinc-300 hover:scale-110 transition duration-500 ease-in-out bg-chat bg-cover bg-no-repeat bg-right-top w-[350px] lg:w-2/5 h-[380px]" >
            </div>
                <div className="text-white flex flex-col gap-2 lg:gap-4 lg:w-3/5">
                    <h1 className="font-extrabold text-lg lg:text-xl">02</h1>
                    <h1 className="font-bold lg:text-xl">Chat With PDF AI Application</h1>
                    <p className="mt-2 mb-2 text-zinc-400 lg:text-lg">This project is an innovative web application that allows users to interact with PDFs in a conversational format. Built using modern web technologies, it leverages Next.js for server-side rendering, AWS S3 for file storage, React and JavaScript for a dynamic frontend experience, and integrates the ChatGPT API for intelligent conversation capabilities. Additionally, it utilizes PineconeDB and NeonDB for efficient data storage and retrieval, with Clerk providing secure user authentication and management.</p>
                    <a href="https://github.com/Lambersonistaken/chat-pdf-ai-image" target="_blank"><Link2Icon className="cursor-pointer"></Link2Icon></a>
                </div>
            </div>

            <div className="project-card mt-8 lg:mt-12 lg:mb-10 mb-6 px-2 flex flex-col lg:flex-row lg:gap-12 items-center gap-4">
            <div className="rounded-lg border-2 border-zinc-300 hover:scale-110 transition duration-500 ease-in-out bg-spotify bg-cover bg-no-repeat w-[350px] lg:w-2/5 h-[380px]" >
            </div>
                <div className="text-white flex flex-col gap-2 lg:gap-4 lg:w-3/5">
                    <h1 className="font-extrabold text-lg lg:text-xl">03</h1>
                    <h1 className="font-bold lg:text-xl">Spotify Clone Application</h1>
                    <p className="mt-2 mb-2 text-zinc-400 lg:text-lg">This project is a responsive Spotify Clone website developed with React, offering a seamless and interactive user experience. It includes features such as user authentication, integration with the Spotify API for real-time music data, and a clean, modern design powered by Material UI. The app is fully responsive, ensuring it looks great on any device. React Context API and Hooks are used for efficient state management, making the app both dynamic and easy to maintain.</p>
                    <a href="https://spotify-clone-psi-henna.vercel.app/" target="_blank"><Link2Icon className="cursor-pointer"></Link2Icon></a>
                </div>
            </div>

            <div className="project-card mt-8  lg:mt-16 lg:mb-10 mb-6 px-2 flex flex-col lg:flex-row-reverse lg:gap-12 items-center gap-4">
            <div className="rounded-lg border-2 border-zinc-300 hover:scale-110 transition duration-500 ease-in-out bg-notes bg-cover bg-no-repeat bg-center w-[350px] lg:w-2/5 h-[380px]" >
            </div>
                <div className="text-white flex flex-col gap-2 lg:gap-4 lg:w-3/5">
                    <h1 className="font-extrabold text-lg lg:text-xl">04</h1>
                    <h1 className="font-bold lg:text-xl">Notes Application</h1>
                    <p className="mt-2 mb-2 text-zinc-400 lg:text-lg">This project is a straightforward notes app built with HTML, CSS, and vanilla JavaScript. It allows users to create, edit, and delete notes, with all data stored locally using the browsers localStorage feature. The app is simple yet functional, providing a clean interface and smooth user experience for managing notes directly in the browser.</p>
                    <a href="https://js-notes-app-taupe.vercel.app/" target="_blank"><Link2Icon className="cursor-pointer"></Link2Icon></a>
                </div>
            </div>

        </div>

        </div>
        
    </section>
  )
}

export default Projects
