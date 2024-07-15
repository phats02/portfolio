import Home from "@/components/home";
import Skills from "@/components/home/skills";

export default function Page() {
  return (
    <div className="w-[50%] my-8 flex flex-col items-center gap-16">
      <Home />
      <Skills />
    </div>
  );
}
