"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui_v2/foundation";
import { SectionWrapperImage } from "@/components/ui_v2/foundation/SectionWrapperImage.styled";
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

  return (
    <SectionWrapperImage
      $variant="tight"
      $bgImage="/images/our-story/our-story-bg.webp"
      $overlay="linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.9) 100%)"
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
              boxShadow: "0 0 25px rgba(255,125,45,0.5)",
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
