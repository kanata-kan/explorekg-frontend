"use client";

import { motion } from "framer-motion";
import styled, { keyframes, useTheme } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { colorScales } from "@/styles/tokens/colorScales";

type Props = {
  onClick?: () => void;
  size?: number;
  stroke?: number;
  color?: string;
  hoverColor?: string;
  ring?: string;
  hoverRing?: string;
  glow?: string;
  ariaLabel?: string;
};

const pulse = (c: string) => keyframes`
  0%   { box-shadow: 0 0 0 0 ${c}; }
  70%  { box-shadow: 0 0 0 10px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
`;

const Wrapper = styled(motion.button)<{
  $size: number;
  $stroke: number;
  $ring: string;
  $hoverRing: string;
  $glow: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  border: ${({ $stroke, $ring }) => `${$stroke}px solid ${$ring}`};
  background: transparent;
  cursor: pointer;
  outline: none;
  position: relative;
  transition:
    border-color 0.25s ease,
    transform 0.2s ease;
  will-change: transform, box-shadow;

  &:hover {
    border-color: ${({ $hoverRing }) => $hoverRing};
  }

  &:hover::after {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    box-shadow: 0 0 18px ${({ $glow }) => $glow};
    animation: ${({ $glow }) => pulse($glow)} 1.8s ease-out infinite;
    pointer-events: none;
  }

  &:active {
    transform: scale(0.94);
  }
`;

export default function CloseButton({
  onClick,
  size = 46,
  stroke = 2,
  color,
  hoverColor,
  ring,
  hoverRing,
  glow,
  ariaLabel = "Close",
}: Props) {
  const theme = useTheme();

  // Use theme colors as defaults
  const defaultColor = color || colorScales.red[500];
  const defaultHoverColor = hoverColor || theme.colors.text.onPrimary;
  const defaultRing = ring || colorScales.red[500];
  const defaultHoverRing = hoverRing || colorScales.red[500];
  const defaultGlow = glow || theme.shadows.dangerGlow;

  return (
    <Wrapper
      $size={size}
      $stroke={stroke}
      $ring={defaultRing}
      $hoverRing={defaultHoverRing}
      $glow={defaultGlow}
      whileHover={{ rotate: 90, scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <motion.span
        initial={{ rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        style={{ display: "inline-flex" }}
      >
        <AiOutlineClose
          size={size * 0.5}
          color={defaultColor}
          style={{
            transition: "color 0.25s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as any).style.color = defaultHoverColor;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as any).style.color = defaultColor;
          }}
        />
      </motion.span>
    </Wrapper>
  );
}
