/**
 * Motion System — Interaction Presets
 *
 * Common interaction states (hover, tap, focus) for consistent micro-interactions.
 * Use these with whileHover, whileTap, whileFocus props.
 */

import { DURATION, SPRING, TRANSFORM } from "./constants";

// ============================================
// HOVER INTERACTIONS
// ============================================

/**
 * Subtle scale up (for cards, buttons)
 */
export const hoverScale = {
  scale: 1.02,
  transition: { duration: DURATION.fast },
};

/**
 * Medium scale up (for emphasized elements)
 */
export const hoverScaleMedium = {
  scale: 1.05,
  transition: { duration: DURATION.fast },
};

/**
 * Large scale up (for icons, small interactive elements)
 */
export const hoverScaleLarge = {
  scale: 1.08,
  transition: { duration: DURATION.fast },
};

/**
 * Lift effect (scale + translateY)
 */
export const hoverLift = {
  scale: 1.02,
  y: -4,
  transition: { duration: DURATION.fast },
};

/**
 * Icon rotate on hover
 */
export const hoverRotate = {
  rotate: 15,
  transition: { duration: DURATION.quick },
};

/**
 * Translate right (for arrows, links)
 */
export const hoverTranslateRight = {
  x: 6,
  transition: { duration: DURATION.fast },
};

// ============================================
// TAP/PRESS INTERACTIONS
// ============================================

/**
 * Scale down on tap (standard button feedback)
 */
export const tapScale = {
  scale: 0.97,
  transition: { duration: DURATION.instant },
};

/**
 * Medium scale down
 */
export const tapScaleMedium = {
  scale: 0.94,
  transition: { duration: DURATION.instant },
};

/**
 * Large scale down (for emphasized buttons)
 */
export const tapScaleLarge = {
  scale: 0.9,
  transition: { duration: DURATION.instant },
};

/**
 * Tap with rotation (for playful interactions)
 */
export const tapRotate = {
  scale: 0.9,
  rotate: 20,
  transition: { duration: DURATION.instant },
};

// ============================================
// FOCUS INTERACTIONS
// ============================================

/**
 * Focus ring with spring animation
 */
export const focusRing = {
  ...SPRING.snappy,
  scale: 1.05,
};

// ============================================
// COMBINED PRESETS
// ============================================

/**
 * Standard button interaction
 */
export const buttonInteraction = {
  hover: hoverScaleMedium,
  tap: tapScale,
};

/**
 * Card interaction
 */
export const cardInteraction = {
  hover: hoverScale,
  tap: { scale: 0.98 },
};

/**
 * Icon button interaction
 */
export const iconButtonInteraction = {
  hover: { scale: 1.1, rotate: 5 },
  tap: tapScaleMedium,
};

/**
 * Link interaction (with arrow)
 */
export const linkInteraction = {
  hover: hoverTranslateRight,
  tap: { x: 3 },
};

/**
 * Toggle/Switch interaction
 */
export const toggleInteraction = {
  hover: { scale: 1.08 },
  tap: tapScaleLarge,
};
