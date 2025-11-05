// components/ui_v2/blocks/ResponsiveGallery/useResponsiveGallery.ts
"use client";

import { useCallback, useMemo, useState, useRef } from "react";
import { GalleryItem } from "@/types";
import { useGalleryPro } from "@/hooks/useGalleryPro";

export function useResponsiveGallery({
  images,
  title,
}: {
  images: string[];
  title?: string;
}) {
  const { index, next, prev, goTo, onTouchStart, onTouchEnd } = useGalleryPro({
    length: images.length,
    autoPlay: false,
  });

  const [state, setState] = useState({
    loading: true,
    navigating: false,
    lightboxOpen: false,
    lightboxIndex: 0,
  });

  const handleNext = useCallback(() => {
    if (state.navigating) return;
    setState((p) => ({ ...p, navigating: true }));
    next();
    setTimeout(() => setState((p) => ({ ...p, navigating: false })), 300);
  }, [next, state.navigating]);

  const handlePrev = useCallback(() => {
    if (state.navigating) return;
    setState((p) => ({ ...p, navigating: true }));
    prev();
    setTimeout(() => setState((p) => ({ ...p, navigating: false })), 300);
  }, [prev, state.navigating]);

  const handleGoTo = useCallback(
    (i: number) => {
      if (state.navigating) return;
      setState((p) => ({ ...p, navigating: true }));
      goTo(i);
      setTimeout(() => setState((p) => ({ ...p, navigating: false })), 300);
    },
    [goTo, state.navigating],
  );

  const handleImageLoad = useCallback(() => {
    setState((p) => ({ ...p, loading: false }));
  }, []);

  const handleImageClick = useCallback(() => {
    setState((p) => ({ ...p, lightboxOpen: true, lightboxIndex: index }));
  }, [index]);

  const handleLightboxClose = useCallback(() => {
    setState((p) => ({ ...p, lightboxOpen: false }));
  }, []);

  const lightboxItems: GalleryItem[] = useMemo(
    () =>
      images.map((src, i) => ({
        id: `img-${i}`,
        title: title ?? "Gallery",
        caption: `${i + 1} / ${images.length}`,
        image: src,
        metadata: {
          title: title ?? "Gallery",
          description: `${title ?? "Image"} ${i + 1}`,
          path: src,
          image: src,
          alt: `${title ?? "Image"} ${i + 1}`,
        },
      })),
    [images, title],
  );

  return {
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
    hasMultipleImages: images.length > 1,
  };
}
