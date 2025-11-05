"use client";

import styled from "styled-components";
import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  columns?: number;
  gap?: "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "between";
  responsive?: boolean;
  className?: string;
}

const StyledGrid = styled.div.withConfig({
  // ✅ نحجب prop "responsive" باش متوصلش للـ DOM
  shouldForwardProp: (prop) =>
    !["columns", "gap", "align", "justify", "responsive"].includes(
      prop as string,
    ),
})<GridProps>`
  display: grid;
  width: 100%;
  gap: ${({ theme, gap = "md" }) => theme.spacing[gap]};
  align-items: ${({ align = "start" }) => align};
  justify-content: ${({ justify }) => {
    switch (justify) {
      case "center":
        return "center";
      case "end":
        return "end";
      case "between":
        return "space-between";
      default:
        return "start";
    }
  }};
  grid-template-columns: ${({ columns, responsive }) =>
    responsive
      ? `repeat(auto-fit, minmax(280px, 1fr))`
      : columns
        ? `repeat(${columns}, 1fr)`
        : `repeat(auto-fit, minmax(280px, 1fr))`};
`;

export default function Grid({
  children,
  columns,
  gap = "md",
  align = "start",
  justify = "start",
  responsive = true,
  className,
}: GridProps) {
  return (
    <StyledGrid
      columns={columns}
      gap={gap}
      align={align}
      justify={justify}
      responsive={responsive} // ✅ ماشي مشكل تبقى هنا، ما غتوصلش للـ DOM
      className={className}
    >
      {children}
    </StyledGrid>
  );
}
