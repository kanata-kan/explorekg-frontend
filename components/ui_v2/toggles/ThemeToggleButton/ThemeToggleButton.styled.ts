"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { backgroundGradients } from "@/styles/tokens/gradients";

export const IconButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  background: ${({ theme }) =>
    theme.isDark
      ? backgroundGradients.dark.surface
      : backgroundGradients.light.surface};
  backdrop-filter: blur(12px);
  color: ${({ theme }) => theme.colors.text.primary};
  box-shadow: ${({ theme }) =>
    theme.isDark ? theme.shadows.innerSm : theme.shadows.sm};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.08);
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: ${({ theme }) => theme.shadows.primaryGlow};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  transition: color 0.3s ease;
`;
