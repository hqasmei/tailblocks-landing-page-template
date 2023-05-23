import Image from "next/image";

import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Feature from "@/components/feature";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Content />
      <Feature />
      <Contact />
    </main>
  );
}
