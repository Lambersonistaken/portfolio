"use client"
import Image from "next/image";
import jotformLogo from "@/app/assets/jotformlogo.png"
import alfatekLogo from "@/app/assets/alfateklogo.png"
import ttLogo from "@/app/assets/ttlogo.png"
import mobvenLogo from "@/app/assets/mobvenlogo.png"

const Experience = () => {
  return (
    <section className="mt-16 px-2 bg-black">
        <div className="container sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto">
        <h2 className="font-medium text-white text-2xl leading-snug text-center py-10">My <span className="font-extrabold">Experience</span></h2>
        <div className="card-container flex flex-col items-center justify-center gap-4">
          <div className="card border-2 flex flex-col rounded-lg border-zinc-700 px-6 w-[340px] py-8 mb-2 lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]">
            <div className="role flex items-start flex-col">
              <div className="flex flex-row gap-4 items-center">
                <Image src={jotformLogo} width={32} alt="company logo"></Image>
                <h3 className="text-white font-semibold">Frontend Developer Intern at JotForm</h3>
              </div>
              <div>
                <p className="text-zinc-400 mt-6">Aug 2024 - Sep 2024</p>
              </div>
            </div>
            <div className="desc text-white mt-6">
                <p>Developed new features for JotForm e-signature product using React 
                   and TypeScript by improving platform functionality.
                   Gained hands-on experience with SaaS products, contributing to 
                   JotForms frontend team.
                   Collaborated in a dynamic environment to deliver scalable, high-quality 
                   solutions for JotForms applications.</p>
            </div>
          </div>

          <div className="card border-2 flex flex-col bg-zinc-800 rounded-lg border-zinc-700 px-6 w-[340px] py-8 mb-2 lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]">
            <div className="role flex items-start flex-col">
              <div className="flex flex-row gap-4 items-center">
                <Image src={mobvenLogo} width={32} alt="company logo"></Image>
                <h3 className="text-white font-semibold">Frontend Developer Intern at Mobven</h3>
              </div>
              <div>
                <p className="text-zinc-400 mt-6">Aug 2024 - Sep 2024</p>
              </div>
            </div>
            <div className="desc text-white mt-6">
                <p> I worked hands-on with SCSS, Vue.js, JavaScript, and React to build 
                    high-performing and adaptable applications.
                    I collaborated with peers during my internship to develop a practical AI 
                    project, leveraging modern frontend technologies.</p>
            </div>
          </div>

          <div className="card border-2 flex flex-col rounded-lg border-zinc-700 px-6 w-[340px] py-8 mb-2 lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]">
            <div className="role flex items-start flex-col">
              <div className="flex flex-row gap-4 items-center">
                <Image src={ttLogo} width={32} alt="company logo"></Image>
                <h3 className="text-white font-semibold">Frontend Developer Intern at Türk Telekom</h3>
              </div>
              <div>
                <p className="text-zinc-400 mt-6">Aug 2024 - Sep 2024</p>
              </div>
            </div>
            <div className="desc text-white mt-6">
                <p>Created detailed documentation for Tivibu web and mobile apps, 
                    improving team communication and collaboration.
                    Enhanced system performance by monitoring API calls and contributed 
                    to developing a web based testing tool with the team.</p>
            </div>
          </div>

          <div className="card border-2 flex flex-col rounded-lg border-zinc-700 px-6 w-[340px] py-8 mb-2 lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]">
            <div className="role flex items-start flex-col">
              <div className="flex flex-row gap-4 items-center">
                <Image src={alfatekLogo} width={32} alt="company logo"></Image>
                <h3 className="text-white font-semibold">Frontend Developer Intern at Alfatek</h3>
              </div>
              <div>
                <p className="text-zinc-400 mt-6">Aug 2024 - Sep 2024</p>
              </div>
            </div>
            <div className="desc text-white mt-6">
                <p> Developed real-world applications with Vue.js and GitLab as a Frontend 
                    Engineer Intern.
                    Gained valuable experience and  an in-depth understanding of modern 
                    web development.</p>
            </div>
          </div>
          
        </div>

        </div>
    </section>
  )
}

export default Experience
