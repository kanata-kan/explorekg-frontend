"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}

        {ctaText && ctaLink && (
          <HeroCTA
            href={ctaLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {ctaText}
            <FiArrowRight />
          </HeroCTA>
        )}
      </Content>
    </HeroWrapper>
  );
}
