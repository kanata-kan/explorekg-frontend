"use client";

import styled, { css } from "styled-components";
import { ReactNode } from "react";

// -------------------------------------------------------------
// 🧱 Button Component — Kanata UI v2 (Refined Edition)
// Fully theme-driven, accessible, and fluid
// -------------------------------------------------------------

interface ButtonProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

/* ------------------------------------------
   🧩 Variants (theme aware)
------------------------------------------ */
const variantStyles = css<ButtonProps>`
  ${({ theme, variant }) => {
    const { colors } = theme;
    switch (variant) {
      case "secondary":
        return `
          background: ${colors.surfaceAlt};
          color: ${colors.text.primary};
          border: 1px solid ${colors.divider};
          &:hover {
            background: ${theme.isDark ? "#1E293B" : "#E5E7EB"};
          }
        `;
      case "ghost":
        return `
          background: transparent;
          color: ${colors.text.primary};
          border: 1px solid transparent;
          &:hover {
            background: ${theme.isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)"};
          }
        `;
      case "danger":
        return `
          background: ${colors.danger};
          color: ${colors.text.inverse};
          &:hover {
            background: #b91c1c;
          }
        `;
      default:
        return `
          background: ${colors.primary};
          color: ${colors.text.onPrimary || "#fff"};
          &:hover {
            background: ${colors.primaryHover};
          }
        `;
    }
  }}
`;

/* ------------------------------------------
   ⚙️ Sizes
------------------------------------------ */
const sizeStyles = css<ButtonProps>`
  ${({ size, theme }) => {
    switch (size) {
      case "sm":
        return `
          font-size: ${theme.typography.fontSizes.caption};
          padding: 0.45rem 0.9rem;
        `;
      case "lg":
        return `
          font-size: ${theme.typography.fontSizes.h3};
          padding: 0.9rem 2rem;
        `;
      default:
        return `
          font-size: ${theme.typography.fontSizes.body};
          padding: 0.7rem 1.4rem;
        `;
    }
  }}
`;

/* ------------------------------------------
   🎨 Styled Core
------------------------------------------ */
const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !["variant", "size", "fullWidth", "disabled"].includes(prop as string),
})<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  border: none;
  outline: none;
  font-family: ${({ theme }) => theme.typography.fontFamily.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
  transition: all 0.25s ease;
  position: relative;
  user-select: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  ${variantStyles}
  ${sizeStyles}

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  ${({ disabled, theme }) =>
    disabled &&
    `
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
      background: ${theme.colors.divider};
      color: ${theme.colors.text.muted};
      box-shadow: none;
    `}
`;

/* ------------------------------------------
   🚀 Component Wrapper
------------------------------------------ */
export default function Button({
  children,
  as: Tag = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  onClick,
  className,
  style,
}: ButtonProps) {
  return (
    <StyledButton
      as={Tag}
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      className={className}
      style={style}
    >
      {children}
    </StyledButton>
  );
}
