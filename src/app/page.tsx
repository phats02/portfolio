import Home from "@/components/home";
import Experience from "@/components/home/experience";
import Skills from "@/components/home/skills";
import Projects from "@/components/home/projects";
import Contact from "@/components/home/contact";

export default function Page() {
  return (
    <div className="w-[90%] lg:w-[70%] xl:w-[50%] my-8 flex flex-col items-center gap-16">
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
