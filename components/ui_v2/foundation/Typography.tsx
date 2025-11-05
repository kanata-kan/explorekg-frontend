// components/ui_v2/foundation/Typography.tsx
"use client";

import React from "react";
import styled, { css, DefaultTheme } from "styled-components";

/* ---------------------------------------------
   🧠 Type Definitions
--------------------------------------------- */
export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "body" | "caption";

interface TypographyProps {
  as?: keyof JSX.IntrinsicElements;
  variant?: TypographyVariant;
  align?: "left" | "center" | "right";
  color?: keyof DefaultTheme["colors"]["text"];
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/* ---------------------------------------------
   🧩 Responsive Variants
--------------------------------------------- */
const variantStyles = (theme: DefaultTheme) => ({
  h1: css`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: clamp(2rem, 3.5vw + 1rem, 3.25rem);
    font-weight: ${theme.typography.fontWeights.bold};
    line-height: ${theme.typography.lineHeights.tight};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  `,
  h2: css`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: clamp(1.75rem, 3vw + 0.8rem, 2.6rem);
    font-weight: ${theme.typography.fontWeights.semiBold};
    line-height: ${theme.typography.lineHeights.normal};
    text-rendering: optimizeLegibility;
  `,
  h3: css`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: clamp(1.25rem, 2.2vw + 0.5rem, 1.9rem);
    font-weight: ${theme.typography.fontWeights.medium};
    line-height: ${theme.typography.lineHeights.normal};
  `,
  h4: css`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: clamp(1rem, 2vw + 0.5rem, 1.3rem);
    font-weight: ${theme.typography.fontWeights.medium};
    line-height: ${theme.typography.lineHeights.normal};
  `,
  body: css`
    font-family: ${theme.typography.fontFamily.base};
    font-size: 1rem;
    font-weight: ${theme.typography.fontWeights.regular};
    line-height: ${theme.typography.lineHeights.relaxed};
    text-rendering: geometricPrecision;
  `,
  caption: css`
    font-family: ${theme.typography.fontFamily.base};
    font-size: 0.85rem;
    opacity: 0.9;
    line-height: ${theme.typography.lineHeights.relaxed};
  `,
});

/* ---------------------------------------------
   🎨 Styled Component
--------------------------------------------- */
const StyledText = styled.p<{
  $variant: TypographyVariant;
  $align: "left" | "center" | "right";
  $color?: keyof DefaultTheme["colors"]["text"];
}>`
  margin: 0;
  text-align: ${({ $align }) => $align};
  color: ${({ theme, $color }) =>
    $color ? theme.colors.text[$color] : theme.colors.text.primary};
  will-change: color;
  font-display: swap;

  ${({ theme, $variant }) => variantStyles(theme)[$variant]};

  transition:
    color 0.25s ease-in-out,
    transform 0.25s ease;
`;

/* ---------------------------------------------
   🧱 React Component
--------------------------------------------- */
const Typography = ({
  as: Component = "p",
  variant = "body",
  align = "left",
  color,
  children,
  className,
  style,
}: TypographyProps) => {
  return (
    <StyledText
      as={Component as any}
      $variant={variant}
      $align={align}
      $color={color}
      className={className}
      style={style}
    >
      {children}
    </StyledText>
  );
};

export default Typography;
