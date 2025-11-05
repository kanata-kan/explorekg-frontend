"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import styled, { useTheme } from "styled-components";
import { colorScales } from "@/styles/tokens/colorScales";
import { alpha } from "@/lib/colorUtils/alpha";

const GlassWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(14px) saturate(180%);
  -webkit-backdrop-filter: blur(14px) saturate(180%);
  background: ${({ theme }) =>
    theme.isDark ? alpha("#000000", 0.7) : alpha("#FFFFFF", 0.7)};
`;

const SpinnerContainer = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) =>
    theme.isDark ? alpha("#FFFFFF", 0.1) : alpha("#FFFFFF", 0.05)};
  box-shadow: ${({ theme }) => theme.shadows.primaryGlow};
  position: relative;
  overflow: visible;
`;

const SvgPath = styled(motion.svg)`
  width: 140px;
  height: 140px;
  overflow: visible;
`;

const BrandName = styled(motion.h2)`
  position: absolute;
  bottom: -50px;
  font-size: ${({ theme }) => theme.typography.fontSizes.body};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  background: ${({ theme }) => theme.gradients.accentBright};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-align: center;
  filter: ${({ theme }) => theme.shadows.accentGlow};
`;

const mountainPath = "M20 80 Q50 30 80 80 Q65 60 50 80 Q35 60 20 80";

export function NomadiaGlassSpinner() {
  const brand = "Nomadia Travels";

  // 🧠 Prevent scrolling while the spinner is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <GlassWrapper>
      <SpinnerContainer>
        <SvgPath viewBox="0 0 100 100">
          <motion.path
            d={mountainPath}
            fill="transparent"
            stroke="url(#gradient)"
            strokeWidth="2.8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1] }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <motion.circle
            r="5"
            fill="url(#gradient)"
            stroke="white"
            strokeWidth="0.8"
            initial={{ cx: 20, cy: 80 }}
            animate={{
              cx: [20, 50, 80, 20],
              cy: [80, 30, 80, 80],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colorScales.orange[500]} />
              <stop offset="50%" stopColor={colorScales.orange[400]} />
              <stop offset="100%" stopColor={colorScales.orange[300]} />
            </linearGradient>
          </defs>
        </SvgPath>

        <BrandName>
          {brand.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2 + i * 0.08,
                duration: 0.3,
                ease: "easeOut",
              }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </BrandName>
      </SpinnerContainer>
    </GlassWrapper>
  );
}
