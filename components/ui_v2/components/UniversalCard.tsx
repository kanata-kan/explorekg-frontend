"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Typography } from "../foundation";
import {
  CardWrapper,
  ImageBox,
  PriceTag,
  SpecsGrid,
} from "./UniversalCard.styled";
import { FiTag } from "react-icons/fi";

type Spec = {
  icon: React.ReactNode;
  label: string;
};

type Props = {
  image: string;
  title: string;
  description: string;
  specs?: Spec[];
  price?: string | number | null;
  ctaLabel: string;
  ctaLink: string;
};

export default function UniversalCard({
  image,
  title,
  description,
  specs,
  price,
  ctaLabel,
  ctaLink,
}: Props) {
  return (
    <CardWrapper>
      <ImageBox>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 400px"
          style={{
            borderRadius: "12px",
            objectFit: "cover",
          }}
          priority
        />
      </ImageBox>

      <div className="card-content">
        <Typography as="h3" variant="h4" className="card-title">
          {title}
        </Typography>

        <Typography as="p" variant="body" className="card-desc text-clamp-2">
          {description}
        </Typography>

        {specs && (
          <SpecsGrid>
            {specs.map((s, i) => (
              <div key={i}>
                {s.icon}
                <span>{s.label}</span>
              </div>
            ))}
          </SpecsGrid>
        )}

        {price && (
          <PriceTag>
            <FiTag />
            <span>{price} €</span>
          </PriceTag>
        )}
      </div>

      <Link href={ctaLink} className="cta-link">
        <Button variant="primary" fullWidth>
          {ctaLabel}
        </Button>
      </Link>
    </CardWrapper>
  );
}
