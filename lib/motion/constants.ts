/**
 * Motion System — Core Constants
 *
 * Centralized timing, easing, and duration values for consistent motion across the app.
 * All animations should reference these constants rather than hardcoded values.
 */

// ============================================
// DURATION PRESETS
// ============================================

export const DURATION = {
  // Ultra-fast (for subtle micro-interactions)
  instant: 0.15,

  // Fast (for UI feedback and simple transitions)
  fast: 0.25,
  quick: 0.3,

  // Standard (for most component animations)
  normal: 0.4,
  moderate: 0.5,
  smooth: 0.6,

  // Slow (for complex or emphasized motion)
  relaxed: 0.75,
  slow: 0.8,
  leisurely: 1.0,

  // Extended (for loading, heroes, or dramatic reveals)
  extended: 1.5,
  dramatic: 2.0,
} as const;

// ============================================
// EASING CURVES
// ============================================

export const EASING = {
  // Standard easings
  linear: [0, 0, 1, 1],

  // Ease Out (starts fast, ends slow) — most common for entrances
  easeOut: [0.25, 0.1, 0.25, 1],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeOutCubic: [0.33, 1, 0.68, 1],

  // Ease In (starts slow, ends fast) — for exits
  easeIn: [0.42, 0, 1, 1],
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],

  // Ease In Out (slow start and end) — for smooth transitions
  easeInOut: [0.42, 0, 0.58, 1],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],

  // Special curves
  anticipate: [0.68, -0.55, 0.265, 1.55],
  bounce: [0.68, -0.6, 0.32, 1.6],
  smooth: [0.4, 0.0, 0.2, 1],
} as const;

// ============================================
// SPRING CONFIGURATIONS
// ============================================

export const SPRING = {
  // Soft and gentle
  gentle: {
    type: "spring" as const,
    stiffness: 120,
    damping: 14,
  },

  // Standard responsive spring
  responsive: {
    type: "spring" as const,
    stiffness: 280,
    damping: 16,
  },

  // Snappy and fast
  snappy: {
    type: "spring" as const,
    stiffness: 300,
    damping: 20,
  },

  // Bouncy (for playful interactions)
  bouncy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10,
  },

  // Tight (minimal overshoot)
  tight: {
    type: "spring" as const,
    stiffness: 300,
    damping: 25,
  },
} as const;

// ============================================
// STAGGER TIMING
// ============================================

export const STAGGER = {
  // For list items or card grids
  tight: 0.05,
  normal: 0.08,
  relaxed: 0.12,
  loose: 0.18,
  spacious: 0.25,
} as const;

// ============================================
// DELAY PRESETS
// ============================================

export const DELAY = {
  none: 0,
  tiny: 0.05,
  small: 0.1,
  medium: 0.2,
  large: 0.3,
  xl: 0.5,
} as const;

// ============================================
// VIEWPORT CONFIGURATION
// ============================================

export const VIEWPORT = {
  // Trigger once (most common)
  once: { once: true, amount: 0.3 },

  // Trigger once with different thresholds
  onceImmediate: { once: true, amount: 0.1 },
  oncePartial: { once: true, amount: 0.5 },
  onceFull: { once: true, amount: 0.8 },

  // Trigger repeatedly
  repeat: { once: false, amount: 0.3 },
} as const;

// ============================================
// TRANSFORM PRESETS
// ============================================

export const TRANSFORM = {
  // Scale values
  scaleDown: { scale: 0.94 },
  scaleUp: { scale: 1.05 },
  scaleUpLarge: { scale: 1.1 },

  // Translate values
  translateUp: { y: -3 },
  translateDown: { y: 3 },
  translateLeft: { x: -4 },
  translateRight: { x: 4 },

  // Rotate values
  rotateLight: { rotate: 5 },
  rotateMedium: { rotate: 15 },
  rotateQuarter: { rotate: 90 },
} as const;
