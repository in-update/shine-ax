import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Service";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
