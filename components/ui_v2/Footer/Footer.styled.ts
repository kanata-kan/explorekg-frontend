// components/ui_v2/Footer/Footer.styled.ts
"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

/* 🌫️ Footer Wrapper (Glassmorphic Base) */
export const FooterWrapper = styled(motion.footer)`
  position: relative;
  width: 100%;
  background: ${({ theme }) =>
    theme.isDark
      ? "linear-gradient(180deg, rgba(15,23,42,0.95) 0%, rgba(17,24,39,0.98) 100%)"
      : "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(245,246,247,1) 100%)"};
  backdrop-filter: blur(18px) saturate(1.3);
  border-top: 1px solid
    ${({ theme }) =>
      theme.isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"};
  box-shadow: 0 -6px 25px rgba(0, 0, 0, 0.08);
  padding: 3rem 2rem;
  overflow: hidden;
`;

/* 🧱 Grid Layout */
export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

/* 🏕️ Brand Column */
export const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  p {
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

/* 🔗 Link Columns */
export const LinksCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 0.8rem;
    border-left: 3px solid ${({ theme }) => theme.colors.accent};
    padding-left: 0.6rem;
  }

  a {
    color: ${({ theme }) => theme.colors.text.muted};
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.25s ease;
    position: relative;
    padding-left: 0.6rem;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      transform: translateX(4px);
    }

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

/* 🌐 Social Row */
export const SocialRow = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 1rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: ${({ theme }) =>
      theme.isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"};
    transition: all 0.25s ease;

    img {
      filter: ${({ theme }) =>
        theme.isDark ? "brightness(1.1)" : "brightness(0.8)"};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      transform: scale(1.1);
      img {
        filter: brightness(1);
      }
    }
  }
`;

/* 💌 Newsletter */
export const NewsletterCol = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.6rem 0.8rem;
    border-radius: ${({ theme }) => theme.radii.sm};
    border: 1px solid ${({ theme }) => theme.colors.divider};
    background: ${({ theme }) =>
      theme.isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.9)"};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.9rem;
    transition: all 0.25s ease;

    &:focus {
      border-color: ${({ theme }) => theme.colors.accent};
      outline: none;
    }
  }

  button {
    align-self: flex-start;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transition: all 0.25s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
      transform: translateY(-2px);
    }
  }

  .success {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  .error {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.danger};
  }
`;

/* ⚡ Bottom Bar */
export const BottomBar = styled.div`
  margin-top: 3rem;
  padding-top: 1.4rem;
  border-top: 1px solid
    ${({ theme }) =>
      theme.isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 0.85rem;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 0.6rem;
    text-align: center;
  }
`;
