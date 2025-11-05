// components/ui_v2/Footer/useFooter.ts
"use client";

import { useState } from "react";

export function useFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus("err");
      setTimeout(() => setStatus(null), 2000);
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setStatus("ok");
      setEmail("");
      setTimeout(() => setStatus(null), 2000);
    }, 800);
  };

  return { email, setEmail, status, submitting, handleSubmit };
}
