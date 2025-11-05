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

// Image
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.35s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  img {
    transition:
      transform 0.35s ease,
      filter 0.35s ease;
  }

  &:hover img {
    transform: scale(1.05);
    filter: brightness(0.9);
  }
`;

// Info
export const InfoSection = styled(InfoSectionBase)``;

// Details List
export const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.md} 0;

  li {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
    background-color: ${({ theme }) => theme.colors.surface.default};
    border-radius: ${({ theme }) => theme.radii.md};
    padding: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.tertiary};
    font-size: 0.9rem;
    box-shadow: ${({ theme }) => theme.shadows.xs};
    transition: all 0.25s ease;

    svg {
      color: ${({ theme }) => theme.colors.primary.main};
      transition: color 0.25s ease;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.surface.hover};
      color: ${({ theme }) => theme.colors.primary.main};
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.sm};

      svg {
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;

/* 🟠 CTA */
export const CTASection = styled(CTASectionBase)``;

/* 🔙 Back Link */
export const BackLink = styled(BackLinkBase)``;
