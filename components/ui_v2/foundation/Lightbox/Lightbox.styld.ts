// components/ui_v2/foundation/Lightbox/Lightbox.styld.ts

"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { alpha } from "@/lib/colorUtils/alpha";

// ========================================================
// 🖥️ DESKTOP LIGHTBOK ELEMENTS
// ========================================================
// 🩵 Overlay (full-screen layer)
export const OverlayDesktop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.gradients.overlayFull};
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

// 🪟 Main container
export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1400px;
  width: 100%;
  height: 80vh;
  background: ${({ theme }) => alpha(theme.colors.text.inverse, 0.03)};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: visible; /* ✅ fix hidden button */
`;

// 🖼️ Image area
export const ImageArea = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
`;

// 📄 Info section
export const InfoPanel = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  color: #fff;
  text-align: left;
  gap: ${({ theme }) => theme.spacing.md};
`;

// 🔘 Controls
export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;
// ========================================================
// 📱 MOBILE LIGHTBOK ELEMENTS
// ========================================================

export const OverlayMobile = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => alpha("#000000", 0.94)};
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 75vh;
  overflow: hidden;
  border-bottom: 1px solid
    ${({ theme }) => alpha(theme.colors.text.inverse, 0.1)};
`;

export const InfoBox = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.inverse};
  width: 100%;
  padding: 1.2rem 1rem 2rem;
  background: ${({ theme }) => theme.gradients.overlayBottom};
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;

  button {
    min-width: 110px;
  }
`;

export const SwipeHint = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => alpha("#000000", 0.5)};
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.inverse};
  font-weight: 500;
  backdrop-filter: blur(6px);
  letter-spacing: 0.5px;
  pointer-events: none;
  user-select: none;
  z-index: 20;
`;
