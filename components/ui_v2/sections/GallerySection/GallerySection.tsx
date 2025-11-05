"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  SectionWrapper,
  Container,
  Typography,
} from "@/components/ui_v2/foundation";
import { GalleryItem } from "@/types";
import GalleryGrid from "./GalleryGrid";

type Props = { items: GalleryItem[] };

export default function GallerySection_v2({ items }: Props) {
  const t = useTranslations("gallery");

  return (
    <SectionWrapper $variant="default" $centered>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" align="center" color="primary">
            {t("title")}
          </Typography>

          <Typography
            variant="body"
            align="center"
            color="muted"
            style={{ maxWidth: 680, margin: "0 auto" }}
          >
            {t.rich("subtitle", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </Typography>
        </motion.div>

        <GalleryGrid items={items} />
      </Container>
    </SectionWrapper>
  );
}
