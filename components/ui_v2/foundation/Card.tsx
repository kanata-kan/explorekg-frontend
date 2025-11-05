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

  /* 🔲 التصميم الأساسي */
  width: 100%;
  background: ${({ theme, variant }) =>
    variant === "surface"
      ? theme.colors.surfaceAlt
      : variant === "outline"
        ? "transparent"
        : theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  /* 🩶 الظلال أو الحدود حسب الـ variant */
  box-shadow: ${({ theme, variant }) =>
    variant === "outline"
      ? `0 0 0 1px ${theme.colors.divider}`
      : `0 2px 8px rgba(0,0,0,0.05)`};

  /* ✨ التفاعل (Hover + Focus) */
  transition: all 0.25s ease;
  ${({ interactive, theme }) =>
    interactive &&
    `
      cursor: pointer;
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.12);
      }
      &:focus-visible {
        outline: 2px solid ${theme.colors.primary};
        outline-offset: 2px;
      }
    `}

  /* 🧠 تكيف مع الوضع الليلي */
  @media (prefers-color-scheme: dark) {
    box-shadow: ${({ theme, variant }) =>
      variant === "outline"
        ? `0 0 0 1px ${theme.colors.divider}`
        : `0 2px 8px rgba(0,0,0,0.3)`};
  }
`;

/* --------------------------------------------
   ⚙️ React Component
-------------------------------------------- */
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
