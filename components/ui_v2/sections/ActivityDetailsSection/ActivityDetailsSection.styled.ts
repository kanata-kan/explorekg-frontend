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

/* 🖼️ Image */
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.35s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
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

/* 📄 Info */
export const InfoSection = styled(InfoSectionBase)``;

/* 🧭 Details List */
export const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.md} 0;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radii.md};
    padding: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: 0.9rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
    transition: all 0.25s ease;

    svg {
      color: ${({ theme }) => theme.colors.accent};
      transition: color 0.25s ease;
    }

    &:hover {
      background-color: ${({ theme }) => darken(theme.colors.surface, 8)};
      color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

      svg {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

/* 🟠 CTA */
export const CTASection = styled(CTASectionBase)``;

/* 🔙 Back Link */
export const BackLink = styled(BackLinkBase)``;
