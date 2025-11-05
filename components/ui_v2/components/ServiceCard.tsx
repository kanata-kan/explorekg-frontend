"use client";

import React from "react";
import styled from "styled-components";
import { FiMap, FiTruck, FiUsers, FiSend } from "react-icons/fi";
import { Typography } from "../foundation";
import { darken } from "@/lib/colorUtils";

/* --------------------------------------------- */
/* 🧩 Card Styles (Compact Version) */
/* --------------------------------------------- */
const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1.5rem 1.2rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  flex: 0 0 260px; /* ✅ حجم مضبوط */
  max-width: 260px;
  min-width: 240px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: ${({ theme }) => darken(theme.colors.accent, 10)};
  }
`;

/* --------------------------------------------- */
/* 🧠 Icon Map */
/* --------------------------------------------- */
const iconsMap: Record<string, React.ReactNode> = {
  transportation: <FiTruck />,
  "private-tours": <FiUsers />,
  "city-tours": <FiMap />,
  "airport-transfers": <FiSend />,
};

/* --------------------------------------------- */
/* 🧱 ServiceCard Component */
/* --------------------------------------------- */
type Props = {
  service: {
    id: string;
    title: string;
    description: string;
  };
};

export default function ServiceCard({ service }: Props) {
  const icon = iconsMap[service.id] || <FiMap />;

  return (
    <Card>
      <IconWrapper>{icon}</IconWrapper>

      <Typography
        as="h3"
        variant="h3"
        align="center"
        style={{ fontSize: "1.1rem", marginBottom: "0.3rem" }}
      >
        {service.title}
      </Typography>

      <Typography
        as="p"
        variant="body"
        align="center"
        color="muted"
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.5,
        }}
      >
        {service.description}
      </Typography>
    </Card>
  );
}
