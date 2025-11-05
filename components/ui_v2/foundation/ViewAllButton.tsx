"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";
import { darken } from "@/lib/colorUtils";

/* ---------------------------------------------
   🔹 Styled Component
   Clean, minimal, and theme-aware button
--------------------------------------------- */
const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent.main};
  text-decoration: none;
  transition: color 0.25s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.hover};
  }
`;

/* ---------------------------------------------
   🔹 Component Logic
--------------------------------------------- */
interface ViewAllButtonProps {
  href: string;
  label: string;
  align?: "center" | "left" | "right";
}

export default function ViewAllButton({
  href,
  label,
  align = "center",
}: ViewAllButtonProps) {
  return (
    <div style={{ marginTop: "3rem", textAlign: align }}>
      <StyledLink href={href}>
        {label}
        <FiArrowRight size={18} />
      </StyledLink>
    </div>
  );
}
