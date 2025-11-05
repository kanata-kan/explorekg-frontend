"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) =>
    theme.isDark ? theme.colors.surface : theme.colors.backgroundAlt};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.accent};
`;

export const LangButton = styled(motion.button)<{ $active?: boolean }>`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: transparent;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.text.primary};
  border: none;
  cursor: pointer;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  transition: all 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 20%;
    width: ${({ $active }) => ($active ? "60%" : "0")};
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.radii.full};
    transition: width 0.25s ease;
  }

  &:hover::after {
    width: 60%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:active {
    transform: scale(0.95);
  }
`;
