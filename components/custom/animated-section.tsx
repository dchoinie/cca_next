"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getInitialY = () => {
    switch (direction) {
      case "up":
        return 50;
      case "down":
        return -50;
      default:
        return 50;
    }
  };

  const getInitialX = () => {
    switch (direction) {
      case "left":
        return 50;
      case "right":
        return -50;
      default:
        return 0;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: getInitialY(),
        x: getInitialX(),
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
            }
          : {
              opacity: 0,
              y: getInitialY(),
              x: getInitialX(),
            }
      }
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
