import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type Variant = "fade-up" | "fade" | "slide-left" | "slide-right" | "scale" | "blur";

const variantsMap: Record<Variant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    show: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(14px)", y: 30 },
    show: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

interface SectionRevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}

export const SectionReveal = ({
  children,
  variant = "fade-up",
  delay = 0,
  className,
}: SectionRevealProps) => {
  const reduce = useReducedMotion();
  const variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : variantsMap[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
