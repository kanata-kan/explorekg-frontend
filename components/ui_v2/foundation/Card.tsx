"use client";

import styled from "styled-components";
import { ReactNode } from "react";

/* --------------------------------------------
   🧩 Props Interface
-------------------------------------------- */
interface CardProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements; // يسمح بتغيير نوع العنصر HTML
  interactive?: boolean; // هل البطاقة قابلة للتفاعل (hover/focus)
  variant?: "default" | "surface" | "outline"; // أنواع البطاقة
  className?: string;
}

/* --------------------------------------------
   🧱 Styled Component
-------------------------------------------- */
const StyledCard = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["interactive", "variant"].includes(prop as string),
})<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  // Basic design
  width: 100%;
  background: ${({ theme, variant }) =>
    variant === "surface"
      ? theme.colors.surface.alt
      : variant === "outline"
        ? "transparent"
        : theme.colors.surface.default};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  // Shadows or borders based on variant
  box-shadow: ${({ theme, variant }) =>
    variant === "outline"
      ? `0 0 0 1px ${theme.colors.border.default}`
      : theme.shadows.xs};

  // Interaction (Hover + Focus)
  transition: all 0.25s ease;
  ${({ interactive, theme }) =>
    interactive &&
    `
      cursor: pointer;
      &:hover {
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.sm};
      }
      &:focus-visible {
        outline: 2px solid ${theme.colors.primary.main};
        outline-offset: 2px;
      }
    `}

  // Dark mode adaptation
  @media (prefers-color-scheme: dark) {
    box-shadow: ${({ theme, variant }) =>
      variant === "outline"
        ? `0 0 0 1px ${theme.colors.border.default}`
        : theme.shadows.sm};
  }
`;

// React Component
export default function Card({
  as: Tag = "div",
  children,
  interactive = false,
  variant = "default",
  className,
}: CardProps) {
  return (
    <StyledCard
      as={Tag}
      interactive={interactive}
      variant={variant}
      className={className}
    >
      {children}
    </StyledCard>
  );
}
