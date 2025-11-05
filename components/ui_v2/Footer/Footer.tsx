"use client";

import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { UI_BREAKPOINTS } from "@/config/constants";

// 🧠 Lazy-loaded versions for performance
const FooterDesktop = dynamic(() => import("./FooterDesktop"), { ssr: false });
const FooterResponsive = dynamic(() => import("./FooterResponsive"), {
  ssr: false,
});

export default function Footer() {
  const isMobile = useIsMobile(UI_BREAKPOINTS.tablet);

  if (isMobile === null) return null;

  return (
    <AnimatePresence mode="wait">
      {isMobile ? (
        <motion.div
          key="footer-mobile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <FooterResponsive />
        </motion.div>
      ) : (
        <motion.div
          key="footer-desktop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <FooterDesktop />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
