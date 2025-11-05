// components/ui_v2/blocks/ResponsiveGallery/motionVariants.ts
import { Variants } from "framer-motion";

export const cardVariants: Variants = {
  initial: {
    opacity: 0,
    x: 30,
    scale: 0.98,
    filter: "blur(2px)",
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1], // easeOut cubic-bezier
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    scale: 0.98,
    transition: {
      duration: 0.35,
      ease: [0.42, 0, 0.58, 1], // easeInOut
    },
  },
};
