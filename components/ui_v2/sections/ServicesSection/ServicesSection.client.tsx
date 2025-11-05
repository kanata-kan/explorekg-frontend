"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  Container,
  SectionWrapper,
  SmartSliderPro,
  Typography,
} from "../../foundation";
import ServiceCard from "../../components/ServiceCard";

type Props = {
  services: {
    id: string;
    title: string;
    description: string;
  }[];
  locale: string;
};

/* -------------------------------------------------------------------------- */
/* 🧱 ServicesSectionClient — Kanata UI v2 Edition */
/* -------------------------------------------------------------------------- */
export default function ServicesSectionClient({ services }: Props) {
  const t = useTranslations("servicesSection");

  return (
    <SectionWrapper $variant="default">
      <Container>
        {/* 🧠 Section Heading */}
        <Typography
          as="h2"
          variant="h2"
          align="center"
          style={{ marginBottom: "0.5rem", letterSpacing: "-0.02em" }}
        >
          {t("title")}
        </Typography>

        <Typography
          as="p"
          variant="body"
          align="center"
          color="tertiary"
          style={{
            marginBottom: "2.5rem",
            maxWidth: "680px",
            marginInline: "auto",
          }}
        >
          {t("subtitle")}
        </Typography>

        {/* 🧩 Services Grid */}
        <SmartSliderPro gap="xl" autoPlay>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </SmartSliderPro>
      </Container>
    </SectionWrapper>
  );
}
