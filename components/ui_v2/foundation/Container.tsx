"use client";

import styled from "styled-components";
import { ReactNode } from "react";

/* --------------------------------------------
   🧩 Props Interface
-------------------------------------------- */
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  max?: keyof typeof containerMax;
  fluid?: boolean; // still supported manually
  className?: string;
}

/* --------------------------------------------
   📏 Container Sizes (from design tokens)
-------------------------------------------- */
const containerMax = {
  md: "720px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1400px",
};

/* --------------------------------------------
   🧱 Styled Component (auto-responsive)
-------------------------------------------- */
const StyledContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fluid" && prop !== "max",
})<ContainerProps>`
  width: 100%;
  margin-inline: auto;
  position: relative;
  box-sizing: border-box;

  /* Default padding (mobile first) */
  padding-inline: ${({ theme }) => theme.layout.container.padding.mobile};

  /* Smart width logic */
  max-width: ${({ fluid, max }) =>
    fluid ? "100%" : containerMax[max || "xl"]};

  /* ✅ Auto-responsive behaviour */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%; /* always full width on mobile */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-inline: ${({ theme }) => theme.layout.container.padding.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-inline: ${({ theme }) => theme.layout.container.padding.lg};
  }
`;

/* --------------------------------------------
   ⚙️ React Component
-------------------------------------------- */
export default function Container({
  as: Tag = "div",
  children,
  max = "xl",
  fluid = false,
  className,
  ...rest
}: ContainerProps) {
  return (
    <StyledContainer
      as={Tag}
      max={max}
      fluid={fluid}
      className={className}
      {...rest}
    >
      {children}
    </StyledContainer>
  );
}
