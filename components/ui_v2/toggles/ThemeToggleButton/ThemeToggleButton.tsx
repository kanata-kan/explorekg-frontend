"use client";

import { useThemeToggle } from "@/hooks/useThemeToggle";
import { m } from "@/lib/motion/motion";
import { IconButton, IconWrapper } from "./ThemeToggleButton.styled";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useThemeToggle();

  return (
    <m.div
      initial={{ rotate: 0 }}
      whileTap={{ scale: 0.9, rotate: 20 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <IconButton onClick={toggleTheme} aria-label="Toggle theme">
        <IconWrapper
          as={m.div}
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 20 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </IconWrapper>
      </IconButton>
    </m.div>
  );
}
