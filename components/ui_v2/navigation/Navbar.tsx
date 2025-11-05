// components/ui_v2/navigation/Navbar.tsx

"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import NavbarDesktop from "./NavbarDesktop";
import NavbarResponsive from "./NavbarResponsive";
import { useIsMobile } from "@/hooks/useIsMobile";
import { UI_BREAKPOINTS } from "@/config";

/* 🌐 Main Navbar Controller
   ----------------------------------------------------
   - 🖥️ Renders NavbarDesktop on large screens
   - 📱 Renders NavbarResponsive on small screens
   - 🎞️ Smooth transition when resizing
   - 🧭 Reacts to scrolling for visual effects (blur, bg)
*/

export default function Navbar() {
  // ✅ Use the centralized responsive logic
  const isMobile = useIsMobile(UI_BREAKPOINTS.tablet);

  // 🧭 Track scroll state for visual changes (shadow, blur, etc.)
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => setScrolled(y > 40));
    return () => unsubscribe();
  }, [scrollY]);

  // 💡 Avoid hydration flicker (when SSR)
  if (isMobile === null) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isMobile ? "mobile" : "desktop"}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
        {isMobile ? (
          <NavbarResponsive scrolled={scrolled} />
        ) : (
          <NavbarDesktop scrolled={scrolled} />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
