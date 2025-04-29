import { ArrowUpRight } from "lucide-react";

interface IBlogData {
  DATE: string;
  TIME: string;
  LINK: string;
  DESCRIPTION: string;
}

export function Blogs({ data }: { data: Record<string, IBlogData> }) {
  return (
    <div id="blogs" className="py-10">
      <h2 className="text-base font-medium text-primary/90">
        technical blogs.
      </h2>

      <ul className="mt-4 flex flex-col gap-12 text-base font-normal text-primary/90">
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <div className="size-full border-l border-muted-foreground pl-4 transition-all duration-300 hover:border-primary">
              <p className="text-lg text-primary/90">
                {key}{" "}
                <span className="ml-2 rounded bg-secondary px-2 py-1 text-xs inline-block max-sm:mb-2">
                  {value.DATE}
                </span>
              </p>

              <p className="flex items-center gap-1 text-sm">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                  href={value.LINK}
                >
                  Read more <ArrowUpRight size={18} />
                </a>
                <span className="px-1 py-px text-xs">
                  {value.TIME} min read
                </span>
              </p>

              <p className="line-clamp-3 text-sm text-muted-foreground text-justify mt-1">
                {value.DESCRIPTION}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
