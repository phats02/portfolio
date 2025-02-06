import { Github, Linkedin, Mail } from "lucide-react";
import { MovingElement } from "../navbar";

export function Header() {
  const handleChange = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="pt-12">
      <div className="space-y-2">
        <p className="text-base font-normal text-muted-foreground">
          hi there👋, I'm
        </p>

        <div>
          <h1 className="text-4xl font-bold tracking-tight text-primary/90">
            Utkarsh Singhal
          </h1>
          <h3 className="flex flex-col gap-0 text-base font-normal text-primary/90">
            <p>20, he/him</p>
            <p>
              Passionate about building high-performance and scalable web
              applications.
            </p>
          </h3>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MovingElement
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow betterhover:hover:bg-primary/90 h-9 px-4 py-2"
            change={() =>
              handleChange(
                "https://drive.google.com/file/d/16Sbx3QX7xbEZN-bdxdPp3w0gPzRbwVsa/view?usp=sharing"
              )
            }
            toChange={false}
          >
            Resume
          </MovingElement>
          <div className="flex gap-2">
            <MovingElement
              change={() => window.open("mailto:singhalutkarsh26@gmail.com")}
            >
              <Mail />
            </MovingElement>
            <MovingElement
              change={() =>
                handleChange("https://github.com/Utkarsh-Singhal-26")
              }
            >
              <Github />
            </MovingElement>
            <MovingElement
              change={() =>
                handleChange("https://www.linkedin.com/in/singhalutkarsh26")
              }
            >
              <Linkedin />
            </MovingElement>
          </div>
        </div>
      </div>
    </section>
  );
}
