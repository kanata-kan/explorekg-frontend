"use client";

import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import { Container, Typography } from "@/components/ui_v2/foundation";

/* --------------------------------------------
   🎬 Motion preset
-------------------------------------------- */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.18,
      duration: 0.75,
      ease: "easeOut",
    },
  }),
};

/* --------------------------------------------
   🧱 Styled Components
-------------------------------------------- */

// 🏗️ Root container
export const StoryContainer = styled(Container)`
  max-width: ${({ theme }) => theme.layout.container.maxWidth.md};
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.inverse};
`;

// Title
export const StoryTitle = styled(Typography)<{
  $variant?: string;
  $color?: string;
}>`
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  text-shadow: ${({ theme }) => theme.shadows.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.brand};
`;

// Paragraph block
export const Paragraph = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSizes.body};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.heroText};
  opacity: ${({ theme }) => theme.opacity[90]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-shadow: ${({ theme }) => theme.shadows.sm};
`;

// Highlighted quote
export const QuoteBlock = styled(motion.blockquote)`
  margin-top: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-left: ${({ theme }) => theme.spacing.md};
  border-left: 2px solid ${({ theme }) => theme.colors.text.accent};
  opacity: ${({ theme }) => theme.opacity[95]};
`;

// Quote text
export const QuoteText = styled(Typography)<{ $variant?: string }>`
  font-style: italic;
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  letter-spacing: 0.3px;
  text-shadow: ${({ theme }) => theme.shadows.md};
  background: ${({ theme }) => theme.gradients.shimmer};
  padding: 0.2rem 0;
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.text.accent};
`;

// Closing line
export const ClosingText = styled(Typography)<{ $variant?: string }>`
  margin-top: ${({ theme }) => theme.spacing.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  text-shadow: ${({ theme }) => theme.shadows.md};
  color: ${({ theme }) => theme.colors.text.accent};
`;

// CTA Wrapper
export const CTAWrapper = styled(motion.div)`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;
