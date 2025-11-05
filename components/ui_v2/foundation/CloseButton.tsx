"use client";

import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

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
  color = "#ef4444",
  hoverColor = "#fff",
  ring = "#ef4444",
  hoverRing = "#ef4444",
  glow = "rgba(239,68,68,0.45)",
  ariaLabel = "Close",
}: Props) {
  return (
    <Wrapper
      $size={size}
      $stroke={stroke}
      $ring={ring}
      $hoverRing={hoverRing}
      $glow={glow}
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
          color={color}
          style={{
            transition: "color 0.25s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as any).style.color = hoverColor;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as any).style.color = color;
          }}
        />
      </motion.span>
    </Wrapper>
  );
}
