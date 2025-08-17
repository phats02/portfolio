import { extractDomain } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface IEducationData {
  WEBSITE: string;
  DEGREE: string;
  LOCATION: string;
  DURATION: string;
  GPA: string;
}

export function Education({
  data,
}: {
  data: Record<string, IEducationData>;
}) {
  return (
    <div id="education" className="py-10">
      <h2 className="font-medium text-primary/90 text-base">education 📚.</h2>

      <ul className="flex flex-col gap-12 mt-4 font-normal text-primary/90 text-base">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="cursor-target">
            <div className="pl-4 border-muted-foreground hover:border-primary border-l size-full transition-all duration-300">
              <div className="flex sm:flex-row flex-col justify-between items-start">
                <div>
                  <p className="text-primary/90 text-lg">
                    {key}{" "}
                    <span className="inline-block bg-secondary max-sm:mb-2 ml-2 px-2 py-1 rounded text-xs">
                      {value.LOCATION}
                    </span>
                  </p>
                  <p className="flex items-center text-sm">
                    at,{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 ml-1"
                      href={value.WEBSITE}
                    >
                      {extractDomain(value.WEBSITE)} <ArrowUpRight size={18} />
                    </a>
                  </p>
                </div>
                <p className="text-muted-foreground text-sm">
                  {value.DURATION}
                </p>
              </div>

              <p className="text-muted-foreground text-sm">
                {value.DEGREE}
              </p>
              <p className="text-muted-foreground text-sm">
                GPA: {value.GPA}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
