"use client";

import { useTranslations } from "next-intl";
import { Activity } from "@/types";

import { FaHiking } from "react-icons/fa";
import { DetailsBaseSection } from "../base";
import { Button } from "../../foundation";
import { DetailsList } from "./ActivityDetailsSection.styled";

type Props = { activity: Activity; locale: string };

export default function ActivityDetailsSection({ activity, locale }: Props) {
  const t = useTranslations("activityDetails");

  return (
    <DetailsBaseSection
      imageSrc={activity.coverImage}
      images={activity.images}
      title={activity.name}
      description={activity.description}
      backHref="/activities"
      locale={locale}
      cta={
        <Button variant="primary" fullWidth>
          <FaHiking style={{ marginRight: "8px" }} />
          {t("bookNow")}
        </Button>
      }
      details={
        <DetailsList>
          {activity.duration && (
            <li>
              ⏳ <strong>{t("duration")}:</strong> {activity.duration}
            </li>
          )}
          {activity.location && (
            <li>
              📍 <strong>{t("location")}:</strong> {activity.location}
            </li>
          )}
          {activity.groupSize && (
            <li>
              👥 <strong>{t("groupSize")}:</strong> {activity.groupSize}
            </li>
          )}
          {activity.price && (
            <li>
              💰 <strong>{t("price")}:</strong> {activity.price}
            </li>
          )}
        </DetailsList>
      }
    />
  );
}
