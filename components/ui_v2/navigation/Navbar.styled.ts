// components/ui_v2/navigation/Navbar.styled.ts
"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

/* =========================================================
 🧭 Navbar Styled Components
 -----------------------------------------------------------
 This file defines all styled-components used by both
 - NavbarDesktop 🖥️
 - NavbarResponsive 📱

 It uses `styled-components` with `framer-motion` for
 animation support. Each section is modular and reusable.
========================================================= */

/* ===== 💎 Root Navbar Bar ===== */
export const NavbarWrapper = styled(motion.nav)<{ $scrolled?: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  transition: all 0.4s ease;

  /* 🌫️ Dynamic glass-like background based on scroll + theme */
  background: ${({ theme, $scrolled }) =>
    $scrolled
      ? theme.isDark
        ? "rgba(15, 23, 42, 0.95)" // after scroll (dark)
        : "rgba(255, 255, 255, 0.9)" // after scroll (light)
      : theme.isDark
        ? "rgba(15, 23, 42, 0.3)" // initial glass (dark)
        : "rgba(255, 255, 255, 0.4)"}; // initial glass (light)

  backdrop-filter: blur(${({ $scrolled }) => ($scrolled ? "10px" : "20px")})
    saturate(1.3);

  /* 🩶 Shadow depth changes dynamically on scroll */
  box-shadow: ${({ $scrolled }) =>
    $scrolled
      ? "0 8px 25px rgba(0, 0, 0, 0.25)"
      : "0 4px 15px rgba(0, 0, 0, 0.05)"};

  /* 🧱 Subtle bottom border */
  border-bottom: ${({ theme, $scrolled }) =>
    $scrolled
      ? theme.isDark
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(0,0,0,0.08)"
      : "1px solid transparent"};
`;

/* ===== 🏕️ Brand (site title + subtitle) ===== */
export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  span:last-child {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

/* ===== 🔗 Navigation Links (desktop only) ===== */
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap; /* ✅ prevents link overlap on resize */

  a {
    position: relative;
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    /* 🧵 Animated underline effect */
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 0%;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }
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

  /* 🎨 Smooth gradient + glass effect */
  background: ${({ theme }) =>
    theme.isDark
      ? "linear-gradient(180deg, rgba(17,24,39,0.96) 0%, rgba(15,23,42,0.98) 100%)"
      : "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(245,245,245,1) 100%)"};

  backdrop-filter: blur(18px) saturate(1.4);
  box-shadow: -6px 0 30px rgba(0, 0, 0, 0.25);
  z-index: 10000;
  overflow-y: auto;

  border-left: 1px solid
    ${({ theme }) =>
      theme.isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"};
`;

/* ===== 🧭 Drawer Header ===== */
export const DrawerHeader = styled.div`
  padding: 1.8rem 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .header-content {
    border-left: 3px solid ${({ theme }) => theme.colors.primary};
    padding-left: 0.8rem;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.text.muted};
  }

  /* ❌ Close Button */
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
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);

  a {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
    transition: all 0.25s ease;
    position: relative;
    padding-left: 0.6rem;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      transform: translateX(6px);
    }

    /* 🔘 Small dot indicator */
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.accent};
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
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

/* ===== 🌫️ Overlay Behind Drawer ===== */
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) =>
    theme.isDark ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.5)"};
  z-index: 9000;
  backdrop-filter: blur(4px);
`;
