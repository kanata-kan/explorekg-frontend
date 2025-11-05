/**
 * Motion System — Utilities
 *
 * Helper functions for creating dynamic motion configurations.
 */

import { Transition, Variants } from "framer-motion";
import { DURATION, EASING, STAGGER } from "./constants";

/**
 * Create a custom fade variant with configurable direction
 */
export function createFadeVariant(
  direction: "up" | "down" | "left" | "right" | "none" = "up",
  distance = 30
): Variants {
  const getTransform = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
        return {};
    }
  };

  return {
    initial: { opacity: 0, ...getTransform() },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: DURATION.smooth, ease: EASING.easeOut },
    },
    exit: {
      opacity: 0,
      ...getTransform(),
      transition: { duration: DURATION.quick, ease: EASING.easeIn },
    },
  };
}

/**
 * Create a staggered animation with custom delay multiplier
 */
export function createStaggerVariant(
  baseDelay: number = STAGGER.normal,
  baseDuration: number = DURATION.normal
): Variants {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * baseDelay,
        duration: baseDuration,
        ease: EASING.easeOut,
      },
    }),
  };
}

/**
 * Create a viewport-triggered animation
 * Note: viewport property should be applied separately as a prop
 */
export function createViewportVariant(
  threshold: number = 0.3,
  once: boolean = true
): { variants: Variants; viewport: { once: boolean; amount: number } } {
  return {
    variants: {
      initial: { opacity: 0, y: 30 },
      whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: DURATION.smooth, ease: EASING.easeOut },
      },
    },
    viewport: { once, amount: threshold },
  };
}

/**
 * Merge multiple transition configs
 */
export function mergeTransitions(...transitions: Transition[]): Transition {
  return Object.assign({}, ...transitions);
}

/**
 * Create a spring transition with custom config
 */
export function createSpringTransition(
  stiffness: number = 280,
  damping: number = 16
): Transition {
  return {
    type: "spring",
    stiffness,
    damping,
  };
}

/**
 * Create a delayed transition
 */
export function withDelay(transition: Transition, delay: number): Transition {
  return {
    ...transition,
    delay,
  };
}

/**
 * Create a transition with custom duration
 */
export function withDuration(
  transition: Transition,
  duration: number
): Transition {
  return {
    ...transition,
    duration,
  };
}

/**
 * Create an orchestrated animation (parent controls children)
 */
export function createOrchestration(
  staggerDelay: number = STAGGER.normal,
  delayChildren: number = 0
): Transition {
  return {
    staggerChildren: staggerDelay,
    delayChildren,
  };
}

/**
 * Create a repeating animation
 */
export function createRepeating(
  transition: Transition,
  repeatCount: number = Infinity,
  repeatType: "loop" | "reverse" | "mirror" = "loop"
): Transition {
  return {
    ...transition,
    repeat: repeatCount,
    repeatType,
  };
}

/**
 * Safe motion wrapper - respects reduced motion preferences
 */
export function safeMotion(
  shouldAnimate: boolean,
  animatedProps: any,
  staticProps: any = {}
) {
  return shouldAnimate ? animatedProps : staticProps;
}
