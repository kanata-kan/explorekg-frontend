/**
 * Motion System — Main Export
 *
 * Centralized motion system for consistent, performant animations across the app.
 *
 * @example Basic usage
 * ```tsx
 * import { motion, variants, interactions } from '@/lib/motion';
 *
 * <motion.div
 *   variants={variants.fadeInUpStagger}
 *   initial="hidden"
 *   animate="visible"
 *   whileHover={interactions.hoverScale}
 * >
 *   Content
 * </motion.div>
 * ```
 *
 * @example With accessibility
 * ```tsx
 * import { motion, variants, usePrefersReducedMotion } from '@/lib/motion';
 *
 * function MyComponent() {
 *   const shouldReduceMotion = usePrefersReducedMotion();
 *
 *   return (
 *     <motion.div
 *       variants={shouldReduceMotion ? {} : variants.slideUp}
 *       {...}
 *     />
 *   );
 * }
 * ```
 */

// Re-export motion primitives (for backward compatibility)
export {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
export type { Variants, Transition } from "framer-motion";

// Re-export the legacy motion components (for gradual migration)
export { m } from "./motion";
export { MotionLink } from "./motion-link";

// Export all constants
export * from "./constants";

// Export all hooks
export * from "./hooks";

// Export all utilities
export * from "./utils";

// Named exports for variants and interactions
import * as variants from "./variants";
import * as interactions from "./interactions";

export { variants, interactions };
