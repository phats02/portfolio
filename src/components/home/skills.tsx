import { skills } from "@/assets/data/skills";

const Skills = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold font-josefin">Skills</h2>
      <div className="w-full flex flex-col gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center gap-4">
            <h2 className="text-xl w-full bg-gradient-to-br from-[#9ebd13] to-[#008552] bg-clip-text font-bold text-transparent">
              {skill.title}
            </h2>
            <div className="grid grid-cols-6 gap-4 w-full">
              {skill.children.map((item, index) => (
                <div
                  key={`${item.id}`}
                  data-tip={item.title}
                  className={`rounded-xl border-[1px] border-tertiary bg-secondary/50 transition duration-200 hover:border-accent flex flex-col gap-2 items-center justify-center p-4 cursor-pointer ${
                    skill.title === "Development Tools" &&
                    index === skill.children.length - 1
                      ? "col-span-2"
                      : ""
                  }`}
                >
                  {item.icon}
                  <span className="text-center">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
