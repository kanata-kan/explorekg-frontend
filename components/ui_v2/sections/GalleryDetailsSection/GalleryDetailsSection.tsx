"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "../../foundation";
import { DetailsBaseSection } from "../base";
import { GalleryGrid } from "./GalleryDetailsSection.styled";

type Props = {
  galleryItem: {
    title: string;
    description?: string;
    coverImage: string;
    images?: string[];
    image?: string;
  };
  locale: string;
};

export default function GalleryDetailsSection({ galleryItem, locale }: Props) {
  const t = useTranslations("galleryDetails");

  return (
    <DetailsBaseSection
      imageSrc={galleryItem.coverImage}
      title={galleryItem.title}
      description={galleryItem.description}
      backHref="/gallery"
      locale={locale}
      // ✅ CTA (يمكن تخصيصها حسب المشروع)
      cta={
        <Button variant="primary" fullWidth>
          {t("openGallery")}
        </Button>
      }
      // ✅ تفاصيل إضافية: شبكة الصور الصغيرة
      details={
        galleryItem.images && galleryItem.images.length > 0 ? (
          <>
            <h3 style={{ marginTop: "1.5rem" }}>{t("moreImages")}</h3>
            <GalleryGrid>
              {galleryItem.images.map((img, index) => (
                <div key={index} className="thumb">
                  <Image
                    src={img}
                    alt={`${galleryItem.title} ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </GalleryGrid>
          </>
        ) : null
      }
    />
  );
}
