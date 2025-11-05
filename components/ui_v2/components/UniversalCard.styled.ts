"use client";

import styled from "styled-components";
import { darken } from "@/lib/colorUtils";

/* 🧱 Layout Base */
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) =>
    theme.isDark
      ? darken(theme.colors.surface, -3)
      : darken(theme.colors.surface, 3)};
  border: 1px solid ${({ theme }) => darken(theme.colors.surface, 8)};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  min-height: 480px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    background: ${({ theme }) =>
      theme.isDark
        ? darken(theme.colors.surface, 5)
        : darken(theme.colors.surface, -2)};
  }

  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .cta-link {
    text-decoration: none;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    max-width: 92%;
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.radii.md};
    min-height: auto;
  }
`;

/* 🖼️ Image */
export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

/* 💰 Price Badge */
export const PriceTag = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: ${({ theme }) =>
    theme.isDark
      ? `linear-gradient(135deg, ${theme.colors.accent} 0%, ${darken(theme.colors.accent, 20)} 100%)`
      : `linear-gradient(135deg, ${darken(theme.colors.accent, -10)} 0%, ${theme.colors.primary} 100%)`};
  color: ${({ theme }) => theme.colors.text.onPrimary};
  padding: 0.35rem 0.7rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: 600;
  font-size: 0.9rem;
  margin: 0.75rem auto 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  width: fit-content;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  svg {
    font-size: 1rem;
  }

  ${CardWrapper}:hover & {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  }
`;

/* ⚙️ Specs Grid */
export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    color: ${({ theme }) => darken(theme.colors.primary, -10)};
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  span {
    display: block;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.muted};
    margin-top: 3px;
  }

  ${CardWrapper}:hover & svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
