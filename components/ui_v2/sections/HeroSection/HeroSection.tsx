"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion, variants, interactions } from "@/lib/motion";

import {
  HeroWrapper,
  ImageLayer,
  Content,
  Title,
  Subtitle,
  HeroCTA,
} from "./HeroSection.styled";

type OverlayType = "dark" | "light" | "auto";
type AlignType = "center" | "left" | "right";

interface HeroProps {
  title: string;
  subtitle?: string;
  heroImage: string;
  ctaText?: string;
  ctaLink?: string;
  align?: AlignType;
  overlay?: OverlayType;
}

/* ---------------------------------------------
   🚀 HeroSection — Kanata UI v2 (Next 16 Ready)
--------------------------------------------- */
export default function HeroSection({
  title,
  subtitle,
  heroImage,
  ctaText,
  ctaLink,
  align = "center",
  overlay = "auto",
}: HeroProps) {
  return (
    <HeroWrapper $overlay={overlay}>
      <ImageLayer>
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          quality={75}
          placeholder="blur"
          blurDataURL="/images/home/blur-hero-light-V2.webp"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </ImageLayer>

      <Content
        $align={align}
        variants={variants.heroEntrance}
        initial="initial"
        animate="animate"
      >
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}

        {ctaText && ctaLink && (
          <HeroCTA
            href={ctaLink}
            whileHover={interactions.hoverScaleMedium}
            whileTap={interactions.tapScale}
          >
            {ctaText}
            <FiArrowRight />
          </HeroCTA>
        )}
      </Content>
    </HeroWrapper>
  );
}
