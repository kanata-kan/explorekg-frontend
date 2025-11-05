// components/ui_v2/foundation/GalleryItemCard.tsx
"use client";

import { GalleryItem } from "@/types";
import { FiZoomIn } from "react-icons/fi";
import { Typography } from "../../foundation";
import {
  Caption,
  Card,
  IconWrap,
  Img,
  Overlay,
} from "./GalleryItemCard.styled";

type Props = { item: GalleryItem; onOpen: () => void };

export default function GalleryItemCard({ item, onOpen }: Props) {
  return (
    <Card
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35 }}
      onClick={onOpen}
    >
      <Img
        src={item.image}
        alt={item.metadata.alt ?? ""}
        fill
        sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
        placeholder="blur"
        blurDataURL="/images/blur-logo-light.png"
        priority={false}
      />

      <Overlay className="overlay" />

      <Caption>
        <Typography variant="h4" color="brand">
          {item.title}
        </Typography>
        <Typography variant="body" color="tertiary">
          {item.caption}
        </Typography>
      </Caption>

      <IconWrap
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <FiZoomIn size={20} />
      </IconWrap>
    </Card>
  );
}
