// hooks/useThemeToggle.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { lightTheme, darkTheme } from "@/styles/theme";

type ThemeContextType = {
  theme: typeof lightTheme | typeof darkTheme;
  isDark: boolean;
  toggleTheme: () => void;
};

// 🧩 Create a global Theme Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderCustom = ({ children }: { children: ReactNode }) => {
  /**
   * STEP 1 — Initialize `isDark` safely (SSR compatible)
   * On the server, window is not defined, so we default to `false`.
   * On the client, once mounted, we’ll sync with localStorage.
   */
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // <-- avoid hydration mismatch

  /**
   * STEP 2 — Sync with localStorage after mount
   * We run this only on the client to read stored theme.
   */
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setIsDark(true);
      document.body.dataset.theme = "dark";
    } else {
      document.body.dataset.theme = "light";
    }
    setIsMounted(true);
  }, []);

  /**
   * STEP 3 — Update localStorage whenever theme changes
   */
  useEffect(() => {
    if (!isMounted) return; // skip first render on SSR
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.body.dataset.theme = isDark ? "dark" : "light";
  }, [isDark, isMounted]);

  /**
   * STEP 4 — Toggle function
   */
  const toggleTheme = () => setIsDark((prev) => !prev);

  const value: ThemeContextType = {
    theme: isDark ? darkTheme : lightTheme,
    isDark,
    toggleTheme,
  };

  /**
   * STEP 5 — Provide the context only after client-side mount
   * (optional: you can return null before mounted to prevent flicker)
   */
  if (!isMounted) return null;

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

/**
 * 🎯 Custom hook to access ThemeContext
 */
export const useThemeToggle = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeToggle must be used within ThemeProviderCustom");
  return context;
};
