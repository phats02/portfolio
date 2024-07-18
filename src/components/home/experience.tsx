const Experience = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-3xl font-bold font-josefin">Experience</h2>
      <div className="grid grid-cols-3 rounded-xl border-[1px] border-tertiary bg-secondary/50 p-4 transition duration-200 hover:border-accent md:hover:scale-[1.01]">
        <div className="col-span-2 flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            Full Stack Intern
          </h3>
          <p className="text-md text-gray-300 italic">
            Website Development and Maintenance Cell, VIPS-TC
          </p>
        </div>
        <p className="text-md text-gray-300 text-right">04 / 2024 - Present</p>
      </div>
    </div>
  );
};

export default Experience;
