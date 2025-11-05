"use client";

import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { alpha } from "@/lib/colorUtils/alpha";

/* ------------------------------------------------
   ✨ Animations
------------------------------------------------ */
const pulse = keyframes`
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(-2px); opacity: 0.95; }
`;

const iconHover = keyframes`
  from { transform: rotate(0deg) scale(1); }
  to { transform: rotate(8deg) scale(1.05); }
`;

/* ------------------------------------------------
   🎨 Styled Components
------------------------------------------------ */
const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 1rem 0;
`;

const SliderTrack = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1rem 0 0rem;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  scroll-snap-type: x mandatory;

  & > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
    transition: transform 0.3s ease;
  }

  & > *:hover {
    animation: ${pulse} 0.6s ease;
  }
`;

const NavButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "visible" && prop !== "$side",
})<{ $side: "left" | "right"; visible: boolean }>`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === "left" ? "left: 0.5rem;" : "right: 0.5rem;")}
  transform: translateY(-50%);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 50;

  background: ${({ theme }) =>
    theme.isDark ? alpha("#FFFFFF", 0.25) : alpha("#FFFFFF", 0.9)};
  backdrop-filter: blur(8px);
  box-shadow: ${({ theme }) => theme.shadows.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent.main};
    color: ${({ theme }) => theme.colors.text.onPrimary};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }

  svg {
    font-size: 1.4rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    animation: ${iconHover} 0.4s ease alternate;
  }
`;

const ProgressBarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: ${({ theme }) => theme.colors.surface};
`;

const ProgressBar = styled.div.attrs<{ $progress: number }>((props) => ({
  style: {
    width: `${props.$progress}%`, // dynamic inline style
  },
}))<{ $progress: number }>`
  height: 3px;
  background: ${({ theme }) => theme.colors.accent};
  transition: width 0.3s ease;
`;

/* ------------------------------------------------
   🧠 Component Logic
------------------------------------------------ */
interface SmartSliderProProps {
  children: React.ReactNode;
  gap?: "sm" | "md" | "lg" | "xl";
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function SmartSliderPro({
  children,
  gap = "lg",
  autoPlay = false,
  autoPlayInterval = 7000,
}: SmartSliderProProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [progress, setProgress] = useState(0);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollPrev(scrollLeft > 0);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 1);
    const scrollPercent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setProgress(scrollPercent);
  };

  useEffect(() => {
    checkScroll();
    const ref = sliderRef.current;
    if (!ref) return;
    ref.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      ref.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // AutoPlay loop
  useEffect(() => {
    if (!autoPlay) return;

    let userInteracted = false;
    let resumeTimeout: NodeJS.Timeout | null = null;

    const handleUserScroll = () => {
      userInteracted = true;
      if (resumeTimeout) clearTimeout(resumeTimeout);

      // 🧠 نوقف autoplay مؤقتاً بعد تدخل المستخدم
      resumeTimeout = setTimeout(() => {
        userInteracted = false;
      }, 10000); // يرجع autoplay بعد 10 ثواني من آخر تفاعل
    };

    const ref = sliderRef.current;
    ref?.addEventListener("scroll", handleUserScroll);

    const interval = setInterval(() => {
      if (!sliderRef.current || userInteracted) return; // ⛔ نوقف لو المستخدم تدخل
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, autoPlayInterval);

    return () => {
      clearInterval(interval);
      ref?.removeEventListener("scroll", handleUserScroll);
      if (resumeTimeout) clearTimeout(resumeTimeout);
    };
  }, [autoPlay, autoPlayInterval]);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = sliderRef.current.clientWidth * 0.8;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <SliderWrapper>
      <NavButton
        $side="left"
        onClick={() => scroll("left")}
        visible={canScrollPrev}
      >
        <FiChevronLeft />
      </NavButton>

      <SliderTrack ref={sliderRef}>{children}</SliderTrack>

      <NavButton
        $side="right"
        onClick={() => scroll("right")}
        visible={canScrollNext}
      >
        <FiChevronRight />
      </NavButton>

      <ProgressBarWrapper>
        <ProgressBar $progress={progress} />
      </ProgressBarWrapper>
    </SliderWrapper>
  );
}
