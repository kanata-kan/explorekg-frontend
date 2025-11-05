// components/ui_v2/foundation/GalleryItemCard.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.lg};
  cursor: zoom-in;
  aspect-ratio: 4 / 3;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

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
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0.3) 60%,
    rgba(0, 0, 0, 0) 100%
  );
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
  gap: 0.2rem;
`;

export const IconWrap = styled(motion.div)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 3;
  color: white;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
`;
