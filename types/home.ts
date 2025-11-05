import { Metadata } from "./common";

export interface HomeSection {
  id: string;
  heading: string;
  description: string;
  linkText: string;
  link: string;
  limit?: number;
}

export interface Hero {
  title: string;
  subtitle: string;
  heroImage: string;
  ctaText: string;
  ctaLink: string;
  align?: "center" | "left" | "right";
  overlay?: "dark" | "light" | "auto";
}

export interface HomePage {
  id: string;
  hero: Hero;
  sections: HomeSection[];
  metadata: Metadata;
}
