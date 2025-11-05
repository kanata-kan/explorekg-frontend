"use client";

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

export default function NextIntlProviderWrapper({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Record<string, any>;
  children: ReactNode;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
