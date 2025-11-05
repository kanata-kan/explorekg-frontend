// hooks/useIsMobile.ts
"use client";

import { useEffect, useState } from "react";

/**
 * ✅ useIsMobile Hook — Detects viewport size responsively
 * ----------------------------------------------------------
 * - Debounced resize detection (for performance)
 * - SSR-safe (won’t crash on server)
 * - Returns `null` initially until hydration
 * - Can customize breakpoint (default: 1024px)
 *
 * 💡 Example:
 * const isMobile = useIsMobile();
 * if (isMobile) return <MobileNavbar />;
 * else return <DesktopNavbar />;
 */

export function useIsMobile(breakpoint: number = 1024): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(check, 150); // 🧠 debounce (150ms)
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
}
