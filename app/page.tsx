import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/floation-navbar";
import { navItems } from "@/data";
import { Experience } from "./components/Experience";
import { Approach } from "./components/Approach";
import TechnicalSkills from "./components/TechnicalSkills";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import CarouselPage from "./components/CarouselPage";

export default function Home() {
  
  return (
    <main className="dark dark:bg-black xl:px-40 lg:px-30 md:px-20 px-10 min-w-[320px]">
      <FloatingNav 
          navItems={navItems}/>
      <Profile />
      <Experience />
      <TechnicalSkills />
      <Approach />
      <Contact />
      <CarouselPage />
    </main>
  );
}
