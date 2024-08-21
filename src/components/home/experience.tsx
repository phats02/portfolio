import { experience } from "@/assets/data/experience";

const Experience = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-3xl font-bold font-josefin">Experience</h2>
      <div className="flex flex-col gap-4">
        {experience.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 rounded-xl border-[1px] border-tertiary bg-secondary/50 p-4 transition duration-200 hover:border-accent md:hover:scale-[1.01]"
          >
            <div className="col-span-2 flex flex-col">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-md text-gray-300 italic">{item.company}</p>
            </div>
            <p className="text-md text-gray-300 text-right">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
