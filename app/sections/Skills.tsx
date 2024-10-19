"use client"
import Image from "next/image";
import javascriptLogo from "@/app/assets/javascripticon.png"
import typescriptLogo from "@/app/assets/typescripticon.png"
import reactLogo from "@/app/assets/reacticon.png"
import nextLogo from "@/app/assets/nextjsicon.svg"
import tailwindIcon from "@/app/assets/tailwindlogo.svg"
import nodeLogo from "@/app/assets/nodejsicon.png"

import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"

const Skills = () => {
  return (
    <section className="mt-16 px-2">
        <div className="container">
            <h2 className="font-medium text-2xl leading-snug text-center">My <span className="font-extrabold">Skills</span></h2>
            <div className="flex flex-row gap-6 items-center justify-center flex-wrap mt-6 mb-2">
                <Card className="cursor-pointer w-2/5 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto" src={javascriptLogo} alt="js icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">JavaScript</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-2/5 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto" src={typescriptLogo} alt="ts icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">TypeScript</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-2/5 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto" src={reactLogo} alt="react icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">React</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-2/5 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto" src={nextLogo} alt="next icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">NextJS</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-2/5 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50}  className="mx-auto" src={nodeLogo} alt="node icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">NodeJS</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-2/5 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto" src={tailwindIcon} alt="tailwind icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">Tailwind CSS</h3>
                     </CardFooter>
                </Card>
                
            </div>
        </div>
    </section>
  )
}

export default Skills
