import Home from "@/components/home";
import Skills from "@/components/home/skills";
import Projects from "@/components/home/projects";

export default function Page() {
  return (
    <div className="w-[90%] lg:w-[70%] xl:w-[50%] my-8 flex flex-col items-center gap-16">
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}
