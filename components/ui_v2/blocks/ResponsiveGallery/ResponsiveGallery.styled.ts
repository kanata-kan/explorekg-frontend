// components/ui_v2/blocks/ResponsiveGallery/ResponsiveGallery.styled.ts
import styled from "styled-components";
import { alpha } from "@/lib/colorUtils/alpha";

export const GalleryContainer = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  background: ${({ theme }) => theme.colors.surface.default};
`;

export const Frame = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  cursor: zoom-in;
  border-radius: inherit;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const ZoomOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.overlay.medium};
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${Frame}:hover & {
    opacity: 1;
  }

  svg {
    color: white;
    font-size: 24px;
  }
`;

export const NavButton = styled.button<{ $disabled?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => alpha(theme.colors.text.inverse, 0.08)};
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => alpha(theme.colors.text.inverse, 0.2)};
    transform: translateY(-50%) scale(1.1);
  }

  &.left {
    left: 16px;
  }

  &.right {
    right: 16px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 15;

  button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background: ${({ theme }) => alpha(theme.colors.text.inverse, 0.3)};
    cursor: pointer;
    transition: all 0.25s ease;

    &.active {
      background: ${({ theme }) => theme.colors.accent.main};
      transform: scale(1.4);
    }
  }
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.overlay.light};
  color: ${({ theme }) => theme.colors.text.inverse};
  font-size: 14px;
  z-index: 5;
`;

export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  background: ${({ theme }) => theme.colors.background.alt};
  font-size: 15px;
`;
