// components/ui_v2/navigation/Navbar.styled.ts
"use client";

import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Container } from "@/components/ui_v2/foundation";
import { backgroundGradients } from "@/styles/tokens/gradients";
import { alpha } from "@/lib/colorUtils/alpha";

// Navbar Styled Components
// This file defines all styled-components used by both NavbarDesktop and NavbarResponsive
// It uses styled-components with framer-motion for animation support

// Main navbar container
export const Nav = styled(motion.nav)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  transition: all 0.4s ease;

  // Dynamic glass-like background based on scroll + theme
  background: ${({ theme, $scrolled }) =>
    $scrolled
      ? theme.isDark
        ? alpha(theme.colors.background.default, 0.95)
        : alpha(theme.colors.surface.default, 0.9)
      : theme.isDark
        ? alpha(theme.colors.background.default, 0.3)
        : alpha(theme.colors.surface.default, 0.4)};

  backdrop-filter: blur(${({ $scrolled }) => ($scrolled ? "10px" : "20px")})
    saturate(1.3);

  // Shadow depth changes dynamically on scroll
  box-shadow: ${({ theme, $scrolled }) =>
    $scrolled ? theme.shadows.lg : theme.shadows.xs};

  // Subtle bottom border
  border-bottom: ${({ theme, $scrolled }) =>
    $scrolled
      ? `1px solid ${theme.colors.border.subtle}`
      : "1px solid transparent"};
`;

/* ===== 🏕️ Brand (site title + subtitle) ===== */
export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary.main};

  span:last-child {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

// Navigation Links (desktop only)
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap; /* ✅ prevents link overlap on resize */
`;

/* ✨ Animated Navigation Link with icon hover effect */
export const NavLink = styled(motion.div)`
  position: relative;
  cursor: pointer;
  display: inline-block;

  a {
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 0.8rem;
    border-radius: ${({ theme }) => theme.radii.md};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
      background: ${({ theme }) => alpha(theme.colors.primary.main, 0.08)};
    }
  }

  /* 🎯 Icon animation container */
  .nav-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover .nav-icon {
    opacity: 1;
    transform: translateX(0);
  }
`;

// ========================================================
// 📱 MOBILE NAVIGATION ELEMENTS
// ========================================================

/* ===== 🍔 Burger Button ===== */
export const BurgerButton = styled.button`
  background: none;
  border: none;
  font-size: 1.9rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

/* ===== 📦 Drawer Container ===== */
export const Drawer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 340px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // Smooth gradient + glass effect
  background: ${({ theme }) =>
    theme.isDark
      ? backgroundGradients.dark.surface
      : backgroundGradients.light.surface};

  backdrop-filter: blur(18px) saturate(1.4);
  box-shadow: ${({ theme }) => theme.shadows.modal};
  z-index: 10000;
  overflow-y: auto;

  border-left: 1px solid ${({ theme }) => theme.colors.border.subtle};
`;

// Drawer Header
export const DrawerHeader = styled.div`
  padding: ${({ theme }) =>
    `${theme.spacing.lg} ${theme.spacing.md} ${theme.spacing.sm}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid
    ${({ theme }) => alpha(theme.colors.text.inverse, 0.1)};

  .header-content {
    border-left: 3px solid ${({ theme }) => theme.colors.primary};
    padding-left: 0.8rem;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.text.tertiary};
  }

  // Close Button
  .close-btn {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text.primary};
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      transform: rotate(90deg);
    }
  }
`;

/* ===== 🔗 Drawer Links Section ===== */
export const DrawerLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  gap: 1.4rem;
  border-bottom: 1px dashed
    ${({ theme }) => alpha(theme.colors.text.inverse, 0.1)};

  a {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
    transition: all 0.25s ease;
    position: relative;
    padding-left: ${({ theme }) => theme.spacing.sm};

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
      transform: translateX(6px);
    }

    // Small dot indicator
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      border-radius: ${({ theme }) => theme.radii.full};
      background: ${({ theme }) => theme.colors.primary.main};
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover:before {
      opacity: 1;
    }
  }
`;

/* ===== ⚙️ Drawer Footer ===== */
export const DrawerFooter = styled.div`
  padding: 1.5rem 1.2rem;
  border-top: 1px solid ${({ theme }) => alpha(theme.colors.text.inverse, 0.1)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  .footer-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.6rem 1.2rem;
    border-radius: 999px;
    backdrop-filter: blur(10px);
    border: 1px solid ${({ theme }) => alpha(theme.colors.text.inverse, 0.15)};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  p {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

// Overlay Behind Drawer
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) =>
    theme.isDark ? alpha("#000000", 0.7) : alpha("#000000", 0.5)};
  z-index: 9000;
  backdrop-filter: blur(4px);
`;
