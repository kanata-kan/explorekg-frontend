"use client";

import Link from "next/link";
import React, { memo } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Container, Grid, Typography } from "../../foundation";
import {
  Wrapper,
  InfoSection,
  CTASection,
  BackLink,
} from "./DetailsBase.styled";
import ResponsiveGallery from "../../blocks/ResponsiveGallery/ResponsiveGallery";

// 🧠 Props Definition
type Props = {
  imageSrc: string;
  title: string;
  description?: string;
  backHref: string;
  cta?: React.ReactNode;
  details?: React.ReactNode;
  locale?: string;
  images?: string[];
};

// 🎬 Animation Variants
const fadeZoom = {
  initial: { opacity: 0, scale: 1.02, y: 10 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.98, y: -10, transition: { duration: 0.4 } },
};

// 🧠 Optimized Component

const DetailsBaseSection = memo(function DetailsBaseSection({
  imageSrc,
  title,
  description,
  backHref,
  cta,
  details,
  locale,
  images = [],
}: Props) {
  const allImages = [imageSrc, ...images];

  return (
    <Wrapper>
      <Container>
        <Grid columns={2} gap="xl" responsive>
          <div>
            <ResponsiveGallery images={allImages} title={title} />
          </div>

          <InfoSection>
            <Typography as="h1" variant="h1" color="primary">
              {title}
            </Typography>
            {description && (
              <Typography as="p" variant="body" className="mb-strong">
                {description}
              </Typography>
            )}
            {details}
            {cta && <CTASection>{cta}</CTASection>}

            <BackLink>
              <Link href={locale ? `/${locale}${backHref}` : backHref}>
                <FaArrowLeft /> Back
              </Link>
            </BackLink>
          </InfoSection>
        </Grid>
      </Container>
    </Wrapper>
  );
});

export default DetailsBaseSection;
