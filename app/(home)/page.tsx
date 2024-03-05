import Footer from "@/components/footer";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero className="md:pb-32 pt-12 md:pt-8" />
      <Projects className="pt-16"/>
      <Footer className="pt-4"/>
    </div>
  );
}
