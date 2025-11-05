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

// Hero Image
export const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

// Info Section
export const InfoSection = styled(InfoSectionBase)``;

// Features
export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;

  li {
    background-color: ${({ theme }) => theme.colors.surface.default};
    border-radius: ${({ theme }) => theme.radii.md};
    padding: ${({ theme }) => theme.spacing.sm};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    box-shadow: ${({ theme }) => theme.shadows.xs};
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text.tertiary};
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: default;

    .checkmark {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
      font-size: 1.1rem;
      margin-right: ${({ theme }) => theme.spacing.xs};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.surface.hover};
      color: ${({ theme }) => theme.colors.primary.main};
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.sm};
    }

    &:hover .checkmark {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

// Details Card
export const DetailsCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.surface.default};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.tertiary};

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

/* 🟠 CTA */
export const CTASection = styled(CTASectionBase)``;

/* 🔙 Back Link */
export const BackLink = styled(BackLinkBase)``;
