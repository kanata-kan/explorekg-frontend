"use client";

import { Wrapper, IconWrapper, Button } from "./status.styled";
import { Typography } from "@/components/ui_v2/foundation";
import Link from "next/link";

export function NotFoundState() {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <IconWrapper>🗺️</IconWrapper>
      <Typography as="h1" variant="h3" color="accent">
        Page Not Found
      </Typography>
      <Typography as="p" variant="body" color="tertiary">
        The page you’re looking for doesn’t exist or has been moved.
      </Typography>

      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </Wrapper>
  );
}
