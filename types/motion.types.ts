/**
 * Motion Types — Animation and Motion-related Types
 *
 * This file contains types for Framer Motion animations and motion configurations.
 */

import { Variants, Transition } from "framer-motion";

/**
 * Motion direction
 */
export type MotionDirection = "up" | "down" | "left" | "right" | "none";

/**
 * Motion variant config
 */
export type MotionVariantConfig = {
  direction?: MotionDirection;
  distance?: number;
  duration?: number;
  delay?: number;
};

/**
 * Stagger config
 */
export type StaggerConfig = {
  delayMultiplier?: number;
  duration?: number;
  ease?: string | number[];
};

/**
 * Motion-safe props
 */
export type MotionSafeProps<T = any> = {
  animatedProps: T;
  staticProps?: Partial<T>;
};

/**
 * Animation preset names
 */
export type AnimationPreset =
  | "fadeIn"
  | "fadeOut"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleIn"
  | "scaleOut"
  | "rotateIn"
  | "rotateOut";

/**
 * Motion hook return type
 */
export type UseMotionReturn = {
  variants: Variants;
  transition: Transition;
  isMotionDisabled: boolean;
};

/**
 * Motion preferences
 */
export type MotionPreferences = {
  prefersReducedMotion: boolean;
  enableAnimations: boolean;
};

/**
 * Re-export Framer Motion types for convenience
 */
export type { Variants, Transition } from "framer-motion";
