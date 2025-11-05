// components/ui_v2/styled/TravelPackDetailsSection.styled.ts
"use client";

import styled from "styled-components";
import { darken } from "@/lib/colorUtils";
import {
  WrapperBase,
  InfoSectionBase,
  CTASectionBase,
  BackLinkBase,
} from "../../styled/DetailsBase.styled";

/* 🧱 Wrapper */
export const Wrapper = styled(WrapperBase)``;

/* 🖼️ Hero Image */
export const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
`;

/* 📄 Info Section */
export const InfoSection = styled(InfoSectionBase)``;

/* 🌿 Features */
export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;

  li {
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radii.md};
    padding: ${({ theme }) => theme.spacing.sm};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text.muted};
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: default;

    .checkmark {
      color: ${({ theme }) => theme.colors.accent};
      font-weight: bold;
      font-size: 1.1rem;
      margin-right: 0.4rem;
    }

    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.surfaceAlt || theme.colors.surface};
      color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    }

    &:hover .checkmark {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

/* 📦 Details Card */
export const DetailsCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.muted};

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

/* 🟠 CTA */
export const CTASection = styled(CTASectionBase)``;

/* 🔙 Back Link */
export const BackLink = styled(BackLinkBase)``;
