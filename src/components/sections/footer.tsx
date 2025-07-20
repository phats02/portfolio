import { ArrowUp } from "lucide-react";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className="flex flex-col items-center gap-0 mx-auto py-10 w-fit text-muted-foreground cursor-pointer"
      onClick={scrollToTop}
    >
      <p className="flex items-center gap-1">
        Elevate to the top
        <ArrowUp size={20} />
      </p>
    </button>
  );
}
