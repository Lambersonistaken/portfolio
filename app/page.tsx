// import Image from "next/image";

import About from "./sections/About";
import Experience from "./sections/Experience";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Projects />
    </div>
  );
}
