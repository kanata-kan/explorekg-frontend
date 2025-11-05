// components/ui_v2/foundation/GalleryItemCard.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";
import { overlayGradients } from "@/styles/tokens/gradients";

export const Card = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.lg};
  cursor: zoom-in;
  aspect-ratio: 4 / 3;
  background: ${({ theme }) => theme.colors.surface.default};
  box-shadow: ${({ theme }) => theme.shadows.card};

  &:hover img {
    transform: scale(1.08);
    filter: brightness(1.05);
  }
  &:hover .overlay {
    opacity: 1;
  }
`;

export const Img = styled(Image)`
  object-fit: cover;
  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.3s ease;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${overlayGradients.toTop};
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
`;

export const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.md};
  z-index: 2;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const IconWrap = styled(motion.div)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 3;
  color: ${({ theme }) => theme.colors.text.inverse};
  background: ${({ theme }) => theme.colors.overlay.light};
  border-radius: ${({ theme }) => theme.radii.full};
  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
`;
