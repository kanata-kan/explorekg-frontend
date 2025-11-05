/**
 * Motion System — Animation Variants
 *
 * Reusable framer-motion variant presets for common animation patterns.
 * All variants follow the structure: { initial, animate, exit }
 */

import { Variants } from "framer-motion";
import { DURATION, EASING, STAGGER } from "./constants";

// ============================================
// FADE ANIMATIONS
// ============================================

/**
 * Simple fade in/out
 */
export const fade: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASING.easeOut },
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATION.fast, ease: EASING.easeIn },
  },
};

/**
 * Fade with scale (zoom effect)
 */
export const fadeScale: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.smooth, ease: EASING.easeOut },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: DURATION.quick, ease: EASING.easeIn },
  },
};

/**
 * Fade with blur (glass morphism effect)
 */
export const fadeBlur: Variants = {
  initial: { opacity: 0, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: DURATION.smooth, ease: EASING.easeOut },
  },
  exit: {
    opacity: 0,
    filter: "blur(4px)",
    transition: { duration: DURATION.quick, ease: EASING.easeIn },
  },
};

// ============================================
// SLIDE ANIMATIONS
// ============================================

/**
 * Slide up (most common for page content)
 */
export const slideUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.smooth, ease: EASING.easeOut },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: DURATION.normal, ease: EASING.easeIn },
  },
};

/**
 * Slide down
 */
export const slideDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.smooth, ease: EASING.easeOut },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: DURATION.normal, ease: EASING.easeIn },
  },
};

/**
 * Slide from right (common for drawers/modals)
 */
export const slideRight: Variants = {
  initial: { x: "100%" },
  animate: {
    x: 0,
    transition: { duration: DURATION.normal, ease: EASING.easeInOut },
  },
  exit: {
    x: "100%",
    transition: { duration: DURATION.normal, ease: EASING.easeInOut },
  },
};

/**
 * Slide from left
 */
export const slideLeft: Variants = {
  initial: { x: "-100%" },
  animate: {
    x: 0,
    transition: { duration: DURATION.normal, ease: EASING.easeInOut },
  },
  exit: {
    x: "-100%",
    transition: { duration: DURATION.normal, ease: EASING.easeInOut },
  },
};

// ============================================
// STAGGER ANIMATIONS (FOR LISTS)
// ============================================

/**
 * Fade + slide up with stagger (for lists/grids)
 */
export const fadeInUpStagger: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * STAGGER.relaxed,
      duration: DURATION.relaxed,
      ease: EASING.easeOut,
    },
  }),
};

/**
 * Container variant for staggered children
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: DURATION.fast,
    },
  },
};

/**
 * Child items for stagger container
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASING.easeOut },
  },
};

// ============================================
// CARD ANIMATIONS
// ============================================

/**
 * Card entrance with subtle slide and blur
 */
export const cardEntrance: Variants = {
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
      duration: DURATION.moderate,
      ease: EASING.easeOut,
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    scale: 0.98,
    transition: {
      duration: DURATION.quick,
      ease: EASING.easeInOut,
    },
  },
};

// ============================================
// HERO / PAGE TRANSITIONS
// ============================================

/**
 * Hero section entrance animation
 */
export const heroEntrance: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASING.easeOut },
  },
};

/**
 * Details page entrance with zoom
 */
export const detailsPageEntrance: Variants = {
  initial: { opacity: 0, scale: 1.02, y: 10 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATION.relaxed, ease: EASING.easeOut },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -10,
    transition: { duration: DURATION.normal },
  },
};

// ============================================
// NAVBAR / NAVIGATION
// ============================================

/**
 * Navbar entrance from top
 */
export const navbarEntrance: Variants = {
  initial: { y: -50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASING.easeOut },
  },
};

/**
 * Mobile drawer slide
 */
export const drawerSlide: Variants = {
  initial: { x: "100%" },
  animate: {
    x: 0,
    transition: { duration: DURATION.normal, ease: EASING.easeInOut },
  },
  exit: {
    x: "100%",
    transition: { duration: DURATION.normal, ease: EASING.easeInOut },
  },
};

/**
 * Overlay fade (for modals/drawers)
 */
export const overlayFade: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 0.5,
    transition: { duration: DURATION.quick },
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATION.quick },
  },
};

// ============================================
// LIGHTBOX / MODAL
// ============================================

/**
 * Lightbox content scale + fade
 */
export const lightboxContent: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.quick, ease: EASING.easeOut },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: DURATION.fast, ease: EASING.easeIn },
  },
};

// ============================================
// SECTION TRANSITIONS
// ============================================

/**
 * Standard section entrance (for Privacy, Terms, etc.)
 */
export const sectionEntrance: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.smooth, ease: EASING.easeOut },
  },
};

// ============================================
// UTILITY VARIANTS
// ============================================

/**
 * Generic viewport-triggered fade in
 */
export const viewportFadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.smooth, ease: EASING.easeOut },
  },
};
