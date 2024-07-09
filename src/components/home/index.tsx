import NextImage from "next/image";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          Utkarsh Singhal
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform">
          Full Stack Developer • React Specialist • Tech Explorer
        </h2>
        <div className="text-md will-change-opacity text-lg text-justify text-gray-300 will-change-transform">
          <p>
            I am a passionate full stack developer with a focus on creating
            responsive and user-friendly web applications.
          </p>
          <p>
            Currently pursuing my
            <span className="text-white"> BCA in Information Technology</span>,
            I'm continuously expanding my skills in modern web technologies and
            exploring new frontiers in development.
          </p>
        </div>
      </div>
      <div className="will-change-opacity relative h-40 w-40 overflow-hidden rounded-lg will-change-transform">
        <NextImage src="/U.jpg" layout="fill" alt="Utkarsh Singhal" />
      </div>
    </div>
  );
};

export default Hero;
