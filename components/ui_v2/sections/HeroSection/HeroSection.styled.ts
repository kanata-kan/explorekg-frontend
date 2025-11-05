"use client";

import styled from "styled-components";
import Link from "next/link";
import { m } from "@/lib/motion/motion";
import { MotionLink } from "@/lib/motion/motion-link";

/* ------------------------------
   🔹 Wrapper
------------------------------ */
export const HeroWrapper = styled.section<{
  $overlay?: "dark" | "light" | "auto";
}>`
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  height: 90vh;
  min-height: 640px;
  background-color: ${({ theme }) => theme.colors.surface};
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ $overlay }) =>
      $overlay === "dark"
        ? "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))"
        : $overlay === "light"
          ? "linear-gradient(to top, rgba(255,255,255,0.6), rgba(255,255,255,0.2))"
          : "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15))"};
    z-index: 1;
  }
`;

/* ------------------------------
   🖼️ Background Layer
------------------------------ */
export const ImageLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  transform: scale(1.03);
  transition: transform 6s ease;
  will-change: transform;

  ${HeroWrapper}:hover & {
    transform: scale(1.06);
  }
`;

/* ------------------------------
   💬 Content
------------------------------ */
export const Content = styled(m.div)<{ $align: "center" | "left" | "right" }>`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) =>
    $align === "left"
      ? "flex-start"
      : $align === "right"
        ? "flex-end"
        : "center"};
  text-align: ${({ $align }) => $align};
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 900px;
  padding: 0 1.5rem;
`;

/* ------------------------------
   🧠 Typography
------------------------------ */
export const Title = styled.h1`
  font-size: clamp(2.2rem, 4vw, 4rem);
  color: ${({ theme }) => theme.colors.text.inverse};
  line-height: 1.1;
  font-weight: 800;
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.45);
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: ${({ theme }) => theme.colors.heroText};
  opacity: 0.9;
  max-width: 680px;
  line-height: 1.6;
`;

/* ------------------------------
   ⚡ CTA Button
------------------------------ */
export const HeroCTA = styled(MotionLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  color: #fff;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transition: all 0.35s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.35);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(6px) rotate(15deg);
  }

  &:active {
    transform: scale(0.97);
  }
`;
