import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";
import type React from "react";
import { Button } from "../ui/button";

interface MovingElementProps {
  children: React.ReactNode;
  className?: string;
  change?: () => void;
  toChange?: boolean;
}

export const MovingElement: React.FC<MovingElementProps> = ({
  children,
  className = "",
  change,
  toChange = true,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const textX = useTransform(x, (latest) => latest * 2);
  const textY = useTransform(y, (latest) => latest * 2);

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);

    x.set(xRange * 5);
    y.set(yRange * 5);
  };

  return (
    <motion.div
      onPointerMove={(event) => {
        const item = event.currentTarget;
        setTransform(item, event, x, y);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
    >
      <Button
        variant={toChange ? "ghost" : undefined}
        onMouseEnter={(e) =>
          toChange && e.currentTarget.setAttribute("variant", "secondary")
        }
        onMouseLeave={(e) =>
          toChange && e.currentTarget.setAttribute("variant", "ghost")
        }
        onClick={change}
        className={className}
      >
        <motion.span style={{ x: textX, y: textY }}>{children}</motion.span>
      </Button>
    </motion.div>
  );
};
