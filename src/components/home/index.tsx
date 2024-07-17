import NextImage from "next/image";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-5xl font-bold font-josefin">Utkarsh Singhal</h1>
        <h2 className="text-lg font-medium text-gray-400">
          Full Stack Developer • React Specialist • Tech Explorer
        </h2>
        <div className="text-md text-lg text-justify text-gray-300">
          <p>
            I am a passionate full stack developer with a focus on creating
            responsive and user-friendly web applications.
          </p>
          <p>
            Currently pursuing my
            <span className="text-white"> BCA in Information Technology</span>,
            I&apos;m continuously expanding my skills in modern web technologies
            and exploring new frontiers in development.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-12">
        <div className="relative h-44 w-44 overflow-hidden rounded-lg">
          <NextImage src="/U.jpg" layout="fill" alt="Utkarsh Singhal" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
