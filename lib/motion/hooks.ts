/**
 * Motion System — Custom Hooks
 *
 * React hooks for managing motion state and accessibility.
 */

import { useEffect, useState } from "react";

/**
 * Hook to detect if user prefers reduced motion
 * Returns true if user has enabled "prefers-reduced-motion" in OS settings
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if we're in browser environment
    if (typeof window === "undefined") return;

    // Create media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    // Fallback for older browsers
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook to get motion-safe variants
 * Returns either animated or static variants based on user preference
 */
export function useMotionVariants<T>(
  animatedVariants: T,
  staticVariants: Partial<T> = {}
): T {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return { ...animatedVariants, ...staticVariants } as T;
  }

  return animatedVariants;
}

/**
 * Hook to get motion-safe transition config
 * Returns instant transition if user prefers reduced motion
 */
export function useMotionTransition<T extends Record<string, any>>(
  transition: T
): T | { duration: 0 } {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return { duration: 0 };
  }

  return transition;
}

/**
 * Hook to determine if animations should be disabled
 */
export function useIsMotionDisabled(): boolean {
  return usePrefersReducedMotion();
}
