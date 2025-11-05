"use client";

import { Wrapper, IconWrapper, Button } from "./status.styled";
import { Typography } from "@/components/ui_v2/foundation";

export function ErrorState({
  error,
  onRetry,
}: {
  error: Error;
  onRetry: () => void;
}) {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <IconWrapper>⚠️</IconWrapper>
      <Typography as="h1" variant="h3" color="accent">
        Something went wrong
      </Typography>
      <Typography as="p" variant="body" color="tertiary">
        {error.message || "Unexpected error occurred."}
      </Typography>
      <Button onClick={onRetry}>Try Again</Button>
    </Wrapper>
  );
}
