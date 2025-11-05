"use client";

import { useState } from "react";
import { Grid } from "@/components/ui_v2/foundation";
import GalleryItemCard from "./GalleryItemCard";
import Lightbox from "../../foundation/Lightbox/Lightbox";
import { GalleryItem } from "@/types";

type Props = { items: GalleryItem[] };

export default function GalleryGrid({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Grid columns={3} gap="lg" responsive>
        {items.map((item, i) => (
          <GalleryItemCard
            key={item.id}
            item={item}
            onOpen={() => setOpenIndex(i)}
          />
        ))}
      </Grid>

      {openIndex !== null && (
        <Lightbox
          items={items}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}
