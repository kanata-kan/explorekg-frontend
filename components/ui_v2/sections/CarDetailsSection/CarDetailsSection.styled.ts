// components/ui_v2/styled/
"use client";

import styled from "styled-components";
import { darken } from "@/lib/colorUtils";
import {
  WrapperBase,
  InfoSectionBase,
  CTASectionBase,
  BackLinkBase,
} from "../../styled/DetailsBase.styled";

/* 🧱 Global Section Wrapper */
export const Wrapper = styled(WrapperBase)``;

/* 📸 Main Car Image */
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.35s ease;
  cursor: pointer;

  /* 🌗 Hover Effect */
  &:hover {
    background-color: ${({ theme }) => darken(theme.colors.surface, 10)};
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
    transform: scale(1.02);
  }

  /* 🖼️ Inner Image transition */
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

/* 📄 Car Info Section */
export const InfoSection = styled(InfoSectionBase)``;

/* ⚙️ Specs Grid */
export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.md} 0;

  div {
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radii.md};
    text-align: center;
    padding: ${({ theme }) => theme.spacing.xs};
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text.muted};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
    cursor: default;
    transition: all 0.25s ease;

    span {
      display: block;
      font-size: 1.2rem;
      margin-bottom: 4px;
      transition: color 0.25s ease;
    }

    &:hover {
      background-color: ${({ theme }) => darken(theme.colors.surface, 8)};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
      color: ${({ theme }) => theme.colors.primary};

      span {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }
`;

/* 🧡 CTA Section */
export const CTASection = styled(CTASectionBase)``;

/* 🔙 Back Link */
export const BackLink = styled(BackLinkBase)``;
