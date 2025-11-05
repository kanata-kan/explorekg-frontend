"use client";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/global";
import { useThemeToggle } from "@/hooks/useThemeToggle";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProviderWrapper({ children }: Props) {
  const { theme } = useThemeToggle(); // ✅ جبد theme من Context

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
