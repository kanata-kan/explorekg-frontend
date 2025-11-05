"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Typography, Button } from "@/components/ui_v2/foundation";
import { GalleryItem } from "@/types";
import CloseButton from "../CloseButton";
import {
  OverlayMobile,
  ImageWrapper,
  InfoBox,
  SwipeHint,
} from "./Lightbox.styld";

type Props = {
  items: GalleryItem[];
  startIndex: number;
  onClose: () => void;
};

export default function LightboxMobile({ items, startIndex, onClose }: Props) {
  const t = useTranslations("lightbox");
  const [index, setIndex] = useState(startIndex);
  const [showHint, setShowHint] = useState(true);
  const item = items[index];

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  // 🎹 Escape key close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // 📱 Swipe navigation
  const handleTouch = {
    startX: 0,
    endX: 0,
    onTouchStart: (e: React.TouchEvent) => {
      handleTouch.startX = e.touches[0].clientX;
    },
    onTouchEnd: (e: React.TouchEvent) => {
      handleTouch.endX = e.changedTouches[0].clientX;
      if (handleTouch.startX - handleTouch.endX > 50) next();
      if (handleTouch.endX - handleTouch.startX > 50) prev();
      setShowHint(false); // بعد أول swipe نخفي الـ hint
    },
  };

  // ⏱️ نخفي الـ hint بعد 3 ثواني تلقائيًا
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <OverlayMobile
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        {/* 🧭 Close button (top-left) */}
        <div
          style={{
            position: "absolute",
            top: "1.25rem",
            left: "1.25rem",
            zIndex: 1200,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton
            onClick={onClose}
            size={46}
            stroke={2}
            color="#ef4444"
            hoverColor="#fff"
            ring="#ef4444"
            hoverRing="#ef4444"
            glow="rgba(239,68,68,0.45)"
            ariaLabel={t("close")}
          />
        </div>

        {/* 🖼️ Image zone */}
        <ImageWrapper
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouch.onTouchStart}
          onTouchEnd={handleTouch.onTouchEnd}
        >
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ position: "relative", width: "100%", height: "100%" }}
          >
            <Image
              src={item.image}
              alt={item.metadata.alt ?? ""}
              fill
              style={{ objectFit: "cover" }}
              priority
            />

            {/* 👆 Swipe Hint */}
            <AnimatePresence>
              {showHint && (
                <SwipeHint
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  👈👉 {t("swipeToNavigate")}
                </SwipeHint>
              )}
            </AnimatePresence>
          </motion.div>
        </ImageWrapper>

        {/* 🧾 Info Section */}
        <InfoBox>
          <Typography variant="h3" align="center" color="brand">
            {item.title}
          </Typography>
          <Typography
            variant="body"
            align="center"
            color="muted"
            style={{ marginBottom: "0.75rem" }}
          >
            {item.caption}
          </Typography>

          <Link href={item.metadata.path}>
            <Button variant="primary" style={{ width: "80%", maxWidth: 240 }}>
              {t("viewDetails")}
            </Button>
          </Link>
        </InfoBox>
      </OverlayMobile>
    </AnimatePresence>
  );
}
