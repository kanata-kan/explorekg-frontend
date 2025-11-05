// components/ui_v2/sections/CarDetailsSection/CarDetailsSection.tsx
"use client";

import { useTranslations } from "next-intl";
import { Car } from "@/types";

import { FaCarSide } from "react-icons/fa";
import { DetailsBaseSection } from "../base";
import { Button } from "../../foundation";
import { SpecsGrid } from "./CarDetailsSection.styled";

type Props = { car: Car; locale: string };

export default function CarDetailsSection({ car, locale }: Props) {
  const t = useTranslations("carDetails");

  return (
    <DetailsBaseSection
      imageSrc={car.coverImage}
      title={car.name}
      images={car.images}
      description={car.description}
      backHref="/cars"
      locale={locale}
      cta={
        <Button variant="primary" fullWidth>
          <FaCarSide style={{ marginRight: "8px" }} />
          {t("book")}
        </Button>
      }
      details={
        <SpecsGrid>
          <div>
            <span>🚗</span>
            {car.transmission}
          </div>
          <div>
            <span>🪑</span>
            {car.seats} {t("seats")}
          </div>
          <div>
            <span>🧳</span>
            {car.luggage}
          </div>
          <div>
            <span>⛽</span>
            {car.fuel}
          </div>
        </SpecsGrid>
      }
    />
  );
}
