// components/ui_v2/foundation/Lightbox/LightboxDesktop.tsx

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Typography, Button } from "@/components/ui_v2/foundation";
import { GalleryItem } from "@/types";
import {
  Controls,
  ImageArea,
  InfoPanel,
  OverlayDesktop,
  Wrapper,
} from "./Lightbox.styld";
import CloseButton from "../CloseButton";

type Props = {
  items: GalleryItem[];
  startIndex: number;
  onClose: () => void;
};

export default function LightboxDesktop({ items, startIndex, onClose }: Props) {
  const t = useTranslations("lightbox");
  const [index, setIndex] = useState(startIndex);
  const item = items[index];
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <AnimatePresence>
      <OverlayDesktop
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        <Wrapper
          as={motion.div}
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 🧭 Close Button - top-right */}
          <div
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              zIndex: 10,
            }}
          >
            <CloseButton onClick={onClose} size={42} />
          </div>

          {/* 🖼️ Image */}
          <ImageArea>
            <Image
              src={item.image}
              alt={item.metadata.alt ?? ""}
              fill
              sizes="(max-width: 900px) 100vw, 70vw"
              style={{ objectFit: "cover", borderRadius: "0.75rem" }}
              priority
            />
          </ImageArea>

          {/* 📄 Info */}
          <InfoPanel>
            <Typography variant="h3" color="brand">
              {item.title}
            </Typography>
            <Typography variant="body" color="tertiary">
              {item.caption}
            </Typography>

            <Link href={item.metadata.path}>
              <Button variant="primary">{t("viewDetails")}</Button>
            </Link>

            <Controls>
              <Button variant="secondary" onClick={prev}>
                {t("prev")}
              </Button>
              <Button variant="secondary" onClick={next}>
                {t("next")}
              </Button>
            </Controls>
          </InfoPanel>
        </Wrapper>
      </OverlayDesktop>
    </AnimatePresence>
  );
}
