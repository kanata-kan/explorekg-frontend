"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const IconButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid
    ${({ theme }) =>
      theme.isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"};
  background: ${({ theme }) =>
    theme.isDark
      ? "linear-gradient(145deg, rgba(30,41,59,0.9), rgba(15,23,42,0.8))"
      : "linear-gradient(145deg, rgba(255,255,255,0.7), rgba(240,240,240,0.6))"};
  backdrop-filter: blur(12px);
  color: ${({ theme }) =>
    theme.isDark ? theme.colors.text.primary : theme.colors.text.primary};
  box-shadow: ${({ theme }) =>
    theme.isDark
      ? "0 0 12px rgba(255,255,255,0.1)"
      : "0 2px 10px rgba(0,0,0,0.08)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.08);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 12px ${({ theme }) => theme.colors.accent}50;
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
