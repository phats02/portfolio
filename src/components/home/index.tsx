import NextImage from "next/image";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex flex-col justify-center gap-2 text-lg text-justify text-gray-300">
        <h1 className="text-5xl font-bold font-josefin mb-2">
          Utkarsh Singhal
        </h1>
        <p>
          Hello, I&apos;m a{" "}
          <span className="text-white text-xl">Full - Stack Developer</span> who
          converts late-night inspiration into robust code and intricate
          challenges into user-friendly features.
        </p>
        <p>
          Passionate about transforming intricate ideas into smooth,
          user-friendly experiences.
        </p>
        <p>
          I find joy in learning new skills and finding creative solutions to
          complex problems.
        </p>
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
