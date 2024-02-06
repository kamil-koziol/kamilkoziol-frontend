import Footer from "@/components/footer";
import About from "./_components/about";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero className="pb-32" />
      <Projects />
      <About />
      <Footer className="pt-16"/>
    </div>
  );
}
