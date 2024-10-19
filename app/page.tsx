// import Image from "next/image";

import Header from "./sections/Header";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />
    </div>
  );
}
