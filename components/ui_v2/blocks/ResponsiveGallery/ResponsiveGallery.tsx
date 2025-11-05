// components/ui_v2/blocks/ResponsiveGallery/ResponsiveGallery.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import Lightbox from "@/components/ui_v2/foundation/Lightbox/Lightbox";
import { cardVariants } from "./motionVariants";
import { useResponsiveGallery } from "./useResponsiveGallery";
import * as S from "./ResponsiveGallery.styled";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";

type Props = {
  images: string[];
  title?: string;
};

export default function ResponsiveGallery({ images, title }: Props) {
  const {
    index,
    state,
    handleNext,
    handlePrev,
    handleGoTo,
    handleImageClick,
    handleImageLoad,
    handleLightboxClose,
    onTouchStart,
    onTouchEnd,
    lightboxItems,
    hasMultipleImages,
  } = useResponsiveGallery({ images, title });

  // ⌨️ Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (state.navigating) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape" && state.lightboxOpen) handleLightboxClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [
    state.navigating,
    handlePrev,
    handleNext,
    handleLightboxClose,
    state.lightboxOpen,
  ]);

  if (!images || images.length === 0)
    return <S.EmptyState>No images available</S.EmptyState>;

  return (
    <>
      <S.GalleryContainer onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <S.Frame onClick={handleImageClick}>
              <Image
                src={images[index]}
                alt={`${title ?? "image"} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={index === 0}
                onLoad={handleImageLoad}
              />
              <S.ZoomOverlay>
                <FaExpand />
              </S.ZoomOverlay>

              {state.loading && <S.LoadingOverlay>Loading...</S.LoadingOverlay>}
            </S.Frame>
          </motion.div>
        </AnimatePresence>

        {/* 🔹 Nav Buttons */}
        {hasMultipleImages && (
          <>
            <S.NavButton
              className="left"
              onClick={handlePrev}
              $disabled={state.navigating}
            >
              <FaChevronLeft />
            </S.NavButton>
            <S.NavButton
              className="right"
              onClick={handleNext}
              $disabled={state.navigating}
            >
              <FaChevronRight />
            </S.NavButton>
          </>
        )}

        {/* 🔹 Dots */}
        {hasMultipleImages && (
          <S.Dots>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => handleGoTo(i)}
                className={i === index ? "active" : ""}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </S.Dots>
        )}
      </S.GalleryContainer>

      {/* 🔹 Lightbox Integration (v2) */}
      <AnimatePresence mode="wait">
        {state.lightboxOpen && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Lightbox
              items={lightboxItems}
              startIndex={state.lightboxIndex}
              onClose={handleLightboxClose}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
