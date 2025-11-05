// app/[local]/error.tsx
"use client";

import { ErrorState } from "@/components/ui_v2/status/ErrorState";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorState error={error} onRetry={reset} />;
}
