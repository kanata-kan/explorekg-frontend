"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/global";
import { lightTheme } from "@/styles/theme";

type Props = {
  children: ReactNode;
};

export function ThemeProviderWrapper({ children }: Props) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
