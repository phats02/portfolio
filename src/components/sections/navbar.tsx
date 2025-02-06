import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatedText, MovingElement } from "../navbar";

export function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="flex justify-between items-end">
      <MovingElement change={() => router.push("/")}>
        <span className="tracking-tighter font-bold text-xl">utkarsh.</span>
      </MovingElement>

      <nav className="flex items-center gap-2">
        <ul className="flex items-center gap-2 sm:gap-0">
          {["experience", "projects"].map((link, index) => (
            <AnimatedText key={index} href={`#${link}`}>
              {link}
            </AnimatedText>
          ))}
        </ul>

        {isMounted && (
          <MovingElement
            className="rounded-full p-[10px]"
            change={
              theme === "dark"
                ? () => setTheme("light")
                : () => setTheme("dark")
            }
          >
            {theme === "dark" ? <Moon /> : <Sun />}
          </MovingElement>
        )}
      </nav>
    </header>
  );
}
