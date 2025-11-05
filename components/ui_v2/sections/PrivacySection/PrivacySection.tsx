"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui_v2/foundation";
import { Section, Inner, Block, Divider } from "./PrivacySection.styled";

/* -----------------------------------------------------------
   🔒 Privacy Policy — Kanata UI v2 Standard
----------------------------------------------------------- */
export default function PrivacySection_v2() {
  const t = useTranslations("privacyPage");

  return (
    <Section
      as={motion.section}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Inner>
        {/* 🧭 Header */}
        <Typography as="h1" variant="h2" align="center" color="primary">
          {t("title")}
        </Typography>

        <Typography
          as="p"
          variant="body"
          align="center"
          color="muted"
          style={{ marginTop: "0.5rem" }}
        >
          {t("lastUpdated")} {new Date().toLocaleDateString()}
        </Typography>

        <Divider />

        {/* 📜 Section 1 */}
        <Block>
          <Typography as="h2" variant="h4" color="accent">
            {t("section1.title")}
          </Typography>
          <Typography as="p" variant="body" style={{ marginTop: "0.5rem" }}>
            {t("section1.text")}
          </Typography>
        </Block>

        {/* 📜 Section 2 */}
        <Block>
          <Typography as="h2" variant="h4" color="accent">
            {t("section2.title")}
          </Typography>
          <Typography as="p" variant="body" style={{ marginTop: "0.5rem" }}>
            {t("section2.text")}
          </Typography>
        </Block>

        {/* 📜 Section 3 */}
        <Block>
          <Typography as="h2" variant="h4" color="accent">
            {t("section3.title")}
          </Typography>
          <Typography as="p" variant="body" style={{ marginTop: "0.5rem" }}>
            {t("section3.text")}
          </Typography>
        </Block>
      </Inner>
    </Section>
  );
}
