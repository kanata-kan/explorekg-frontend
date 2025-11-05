// components/ui_v2/sections/contactSection/ContactSection.styled.ts
"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { Container, Typography, Button } from "@/components/ui_v2/foundation";

/* -----------------------------------------------------------
   ✨ Super Pro Styled Components — Responsive + Motion
----------------------------------------------------------- */

export const Section = styled(motion.section)`
  padding: clamp(4rem, 8vw, 6rem) 0;
  background: ${({ theme }) =>
    theme.isDark
      ? `linear-gradient(180deg, ${theme.colors.background} 0%, ${theme.colors.backgroundAlt} 100%)`
      : `linear-gradient(180deg, #fdfdfd 0%, ${theme.colors.sectionAlt} 100%)`};
  color: ${({ theme }) => theme.colors.text.primary};
  overflow: hidden;
`;

export const Inner = styled(Container)`
  max-width: ${({ theme }) => theme.layout.container.maxWidth.lg};
  margin: 0 auto;
  display: grid;
  gap: clamp(2rem, 5vw, 4rem);
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: clamp(1rem, 3vw, 2rem);
`;

export const Title = styled(Typography)<{ $variant?: string }>`
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.brand.main};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: clamp(1.8rem, 4vw, 2.5rem);
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 60ch;
  margin: 0 auto;
`;

export const InfoGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const InfoCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: clamp(1.5rem, 3vw, 2rem);
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;
  will-change: transform, opacity;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const InfoItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSizes.body};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: ${({ theme }) => theme.colors.brand.main};
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.brand.hover};
      text-decoration: underline;
    }
  }
`;

export const SocialList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  list-style: none;
  padding: 0;

  li a {
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    color: ${({ theme }) => theme.colors.text.accent};
    position: relative;
    transition: color 0.25s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.brand.main};
    }

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 1px;
      background: ${({ theme }) => theme.colors.brand.main};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.25s ease;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export const FormWrapper = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: clamp(1.5rem, 3vw, 2.5rem);
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  label {
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  }

  input,
  textarea {
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.radii.sm};
    border: 1px solid ${({ theme }) => theme.colors.divider};
    background: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.text.primary};
    transition: all 0.25s ease;

    &:focus {
      border-color: ${({ theme }) => theme.colors.brand.main};
      box-shadow: 0 0 0 4px
        ${({ theme }) =>
          theme.isDark
            ? "rgba(251, 146, 60, 0.2)"
            : "rgba(16, 185, 129, 0.15)"};
      outline: none;
    }
  }
`;

export const SubmitButton = styled(Button)<{ $variant?: string }>`
  margin-top: ${({ theme }) => theme.spacing.lg};
  width: fit-content;
  background: ${({ theme, $variant }) =>
    $variant === "primary"
      ? theme.colors.brand.main
      : theme.colors.text.secondary};
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.75rem;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${({ theme }) => theme.colors.brand.hover};
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`;
