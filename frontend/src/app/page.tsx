import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Court } from "@/components/sections/Court";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Profile } from "@/components/sections/Profile";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Profile />
      <Court />
      <Gallery />
      <Contact />
    </main>
  );
}
