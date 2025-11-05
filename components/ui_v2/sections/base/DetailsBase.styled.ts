"use client";
import styled from "styled-components";
import { darken } from "@/lib/colorUtils";

/* 🖼️ Slider Wrapper */
export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;

  .slick-dots {
    bottom: 10px;
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
  }

  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;

export const SlideItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

/* 🧱 Global Wrapper */
export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding-block: ${({ theme }) => theme.layout.section.spacing.default.lg};
  overflow: hidden;
`;

/* 🎞️ Image Wrapper */
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  box-shadow: ${({ theme }) =>
    theme.shadows?.md || "0 6px 20px rgba(0,0,0,0.15)"};
  will-change: transform, opacity;
  transform: translateZ(0); /* GPU acceleration */

  &:hover {
    background-color: ${({ theme }) => darken(theme.colors.surface, 10)};
    transform: scale(1.01);
  }

  img {
    transition: filter 0.4s ease;
  }

  &:hover img {
    filter: brightness(0.9);
  }
`;

/* ⚫ Dot Navigation */
export const DotNav = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.6rem;

  button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: ${({ theme }) => theme.colors.text.muted};
    opacity: 0.6;
    transition: all 0.3s ease;
    cursor: pointer;

    &.active {
      width: 10px;
      height: 10px;
      background: ${({ theme }) => theme.colors.primary};
      opacity: 1;
    }
  }
`;

/* 📄 Info Section */
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

/* 🧡 CTA */
export const CTASection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  button {
    font-weight: 600;
  }
`;

/* 🔙 Back Link */
export const BackLink = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};

  a {
    color: ${({ theme }) => theme.colors.text.muted};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
