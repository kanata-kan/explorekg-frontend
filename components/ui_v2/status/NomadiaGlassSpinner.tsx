"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const GlassWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(14px) saturate(180%);
  -webkit-backdrop-filter: blur(14px) saturate(180%);
  background: rgba(255, 255, 255, 0.07);
`;

const SpinnerContainer = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 0 25px rgba(255, 125, 45, 0.25);
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
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;

  /* 🟢 Gradient refresh with accent theme */
  background: linear-gradient(
    90deg,
    #10b981 0%,
    /* accent emerald green */ #34d399 50%,
    /* minty light green */ #a7f3d0 100% /* pale fresh end */
  );

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

  text-align: center;
  filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.2)); /* subtle glow */
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
              <stop offset="0%" stopColor="#ff7d2d" />
              <stop offset="50%" stopColor="#fcb045" />
              <stop offset="100%" stopColor="#ffd580" />
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
