"use client"
import Image from "next/image";
import javascriptLogo from "@/app/assets/javascripticon.png"
import typescriptLogo from "@/app/assets/typescripticon.png"
import reactLogo from "@/app/assets/reacticon.png"
import nextLogo from "@/app/assets/nextjsicon.svg"
import tailwindIcon from "@/app/assets/tailwindlogo.svg"
import nodeLogo from "@/app/assets/nodejsicon.png"
import htmlicon from "@/app/assets/htmlicon.png"
import cssicon from "@/app/assets/cssicon.png"
import postgresicon from "@/app/assets/postgreicon.png"
import nativeicon from "@/app/assets/nativeicon.png"

import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"

const Skills = () => {
  return (
    <section className="mt-16 px-2">
        <div className="container sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto">
            <h2 className="font-medium text-2xl leading-snug text-center py-10 xl:text-3xl">My <span className="font-extrabold">Skills</span></h2>
            <div className="flex gap-6 items-center justify-center flex-wrap mt-6 mb-2 lg:hidden xl:hidden 2xl:hidden">
                <Card className="cursor-pointer w-2/5 flex items-center flex-col py-2">
                  <CardContent>
                    <Image width={50} className="mx-auto sm:w-[70px]" src={javascriptLogo} alt="js icon"></Image>
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
                    <Image width={50} className="mx-auto sm:w-[70px]" src={reactLogo} alt="react icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">React</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-2/5 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto sm:w-[70px]" src={nextLogo} alt="next icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">NextJS</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-2/5 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50}  className="mx-auto sm:w-[70px]" src={nodeLogo} alt="node icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">NodeJS</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-2/5 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto sm:w-[70px]" src={tailwindIcon} alt="tailwind icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">Tailwind CSS</h3>
                     </CardFooter>
                </Card>
                
            </div>
            <div className="hidden lg:flex lg:gap-4 lg:flex-wrap mt-6 lg:justify-center mb-2">
                <Card className="cursor-pointer w-1/6 flex items-center flex-col sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto sm:w-[70px]" src={javascriptLogo} alt="js icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">JavaScript</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-1/6 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto sm:w-[70px]" src={typescriptLogo} alt="ts icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">TypeScript</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-1/6 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto sm:w-[70px]" src={reactLogo} alt="react icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">React</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-1/6 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto sm:w-[70px]" src={nextLogo} alt="next icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">NextJS</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-1/6 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50}  className="mx-auto sm:w-[70px]" src={nodeLogo} alt="node icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">NodeJS</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-1/6 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto sm:w-[70px]" src={htmlicon} alt="html icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">HTML</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-1/6 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto sm:w-[70px]" src={cssicon} alt="css icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">CSS</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-1/6 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto sm:w-[70px]" src={postgresicon} alt="postgres icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">PostgreSQL</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-1/6 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto sm:w-[70px]" src={tailwindIcon} alt="tailwind icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">Tailwind CSS</h3>
                     </CardFooter>
                </Card>
                <Card className="cursor-pointer w-1/6 flex items-center flex-col py-2 sm:px-2 sm:py-4">
                  <CardContent>
                    <Image width={50} className="mx-auto sm:w-[70px]" src={nativeicon} alt="react native icon"></Image>
                  </CardContent>
                    <CardFooter>
                        <h3 className="font-semibold">React Native</h3>
                     </CardFooter>
                </Card>
                
            </div>
        </div>
    </section>
  )
}

export default Skills
