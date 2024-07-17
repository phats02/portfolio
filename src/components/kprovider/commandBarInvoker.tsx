"use client";
import { useKBar } from "kbar";
import { FiCommand } from "react-icons/fi";

const CommandBarInvoker = (): JSX.Element => {
  const { query } = useKBar();

  return (
    <button
      className="fixed z-50 right-8 bottom-8 rounded-md p-1 transition duration-200 hover:shadow-commandButton focus:outline-none focus-visible:shadow-commandButton"
      onClick={() => query.toggle()}
      aria-label="Command Bar"
    >
      <FiCommand size={28} />
    </button>
  );
};

export default CommandBarInvoker;
