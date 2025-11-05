// components/ui_v2/foundation/Lightbox/Lightbox.tsx

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GalleryItem } from "@/types";
import GalleryLightboxMobile from "./LightboxMobile";
import GalleryLightboxDesktop from "./LightboxDesktop";
import { useIsMobile } from "@/hooks/useIsMobile";
import { UI_BREAKPOINTS } from "@/config";

type Props = {
  items: GalleryItem[];
  startIndex: number;
  onClose: () => void;
};

export default function Lightbox({ items, startIndex, onClose }: Props) {
  const isMobile = useIsMobile(UI_BREAKPOINTS.tablet);
  if (isMobile === null) return null;

  return (
    <AnimatePresence mode="wait">
      {isMobile ? (
        <motion.div
          key="mobile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <GalleryLightboxMobile
            items={items}
            startIndex={startIndex}
            onClose={onClose}
          />
        </motion.div>
      ) : (
        <motion.div
          key="desktop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <GalleryLightboxDesktop
            items={items}
            startIndex={startIndex}
            onClose={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
