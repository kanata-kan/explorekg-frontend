"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useTheme } from "styled-components";
import { Button } from "@/components/ui_v2/foundation";
import { SectionWrapperImage } from "@/components/ui_v2/foundation/SectionWrapperImage.styled";
import { overlayGradients } from "@/styles/tokens/gradients";
import {
  ClosingText,
  CTAWrapper,
  Paragraph,
  QuoteBlock,
  QuoteText,
  StoryContainer,
  StoryTitle,
  fadeInUp,
} from "./OurStorySection.styled";
import { OurStoryPage } from "@/lib/validators/our-story";

/* --------------------------------------------
   🌄 OurStory Section
-------------------------------------------- */
export default function OurStorySection({
  data,
  locale,
}: {
  data: OurStoryPage;
  locale: string;
}) {
  const t = useTranslations("ourStory");
  const theme = useTheme();

  return (
    <SectionWrapperImage
      $variant="tight"
      $bgImage="/images/our-story/our-story-bg.webp"
      $overlay={overlayGradients.full}
      style={{
        backdropFilter: "blur(3px)",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.25 }}
      >
        <StoryContainer>
          {/* 🔶 Title */}
          <motion.div custom={0} variants={fadeInUp}>
            <StoryTitle as="h1" $variant="h2" $color="brand">
              {data.heading}
            </StoryTitle>
          </motion.div>

          {/* 🧾 Content */}
          {data.content.map((block, i) => {
            const motionProps = {
              custom: i + 1,
              variants: fadeInUp,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
            };

            if (block.type === "paragraph")
              return (
                <Paragraph key={i} {...motionProps}>
                  {block.text}
                </Paragraph>
              );

            if (block.type === "heading")
              return (
                <QuoteBlock key={i} {...motionProps}>
                  <QuoteText as="p" $variant="body">
                    {block.text}
                  </QuoteText>
                </QuoteBlock>
              );

            return null;
          })}

          {/* 🌅 Closing */}
          <motion.div
            custom={data.content.length + 1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ClosingText as="p" $variant="body">
              {t("closing")}
            </ClosingText>
          </motion.div>

          {/* 🧭 CTA */}
          <CTAWrapper
            custom={data.content.length + 2}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: theme.shadows.primaryGlow,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 16 }}
          >
            <Link href={`/${locale}/contact`} passHref>
              <Button variant="primary" size="lg">
                {locale === "fr" ? "Contactez-nous" : "Get in touch"}
              </Button>
            </Link>
          </CTAWrapper>
        </StoryContainer>
      </motion.div>
    </SectionWrapperImage>
  );
}
