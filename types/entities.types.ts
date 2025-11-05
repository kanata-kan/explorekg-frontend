/**
 * Entity Types — Domain Entities and Business Objects
 *
 * This file contains all domain entities representing business objects
 * like cars, activities, travel packs, etc.
 */

import { Metadata } from "./system.types";

/**
 * Content block for rich text content
 */
export type ContentBlock = {
  type: "paragraph" | "heading" | "image" | string;
  text: string;
  src?: string;
};

/**
 * Activity entity
 */
export type Activity = {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  duration: string;
  location: string;
  groupSize: string;
  price?: number | null;
  images?: string[];
  metadata: Metadata;
};

/**
 * Car entity
 */
export type Car = {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  images: string[];
  price: number;
  currency: string;
  unit: string;
  seats: string;
  transmission: string;
  drive: string;
  luggage: string;
  fuel: string;
  metadata: Metadata;
};

/**
 * Travel pack entity
 */
export type TravelPack = {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  features: string[];
  ctaLabel: string;
  duration?: string | null;
  price?: string | null;
  images?: string[];
  metadata: Metadata;
};

/**
 * Gallery item entity
 */
export type GalleryItem = {
  id: string;
  title: string;
  image: string;
  caption: string;
  metadata: {
    title: string;
    description: string;
    path: string;
    image: string;
    alt: string;
  };
};

/**
 * Service entity
 */
export type Service = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  link?: string;
};

/**
 * Home section entity
 */
export type HomeSection = {
  id: string;
  heading: string;
  description: string;
  linkText: string;
  link: string;
  limit?: number;
};

/**
 * Home page entity
 */
export type HomePage = {
  id: string;
  hero: {
    title: string;
    subtitle: string;
    heroImage: string;
    ctaText: string;
    ctaLink: string;
    align?: "center" | "left" | "right";
    overlay?: "dark" | "light" | "auto";
  };
  sections: HomeSection[];
  metadata: Metadata;
};

/**
 * Social link entity
 */
export type SocialLink = {
  platform: string;
  url: string;
};

/**
 * Form field entity
 */
export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  required?: boolean;
};

/**
 * Contact info entity
 */
export type ContactInfo = {
  email: string;
  phone: string;
  address: string;
  mapLink: string;
};

/**
 * Contact form entity
 */
export type ContactForm = {
  fields: FormField[];
  submitText: string;
};

/**
 * Contact page entity
 */
export type ContactPage = {
  id: string;
  heading: string;
  content: ContentBlock[];
  form?: ContactForm;
  info: ContactInfo;
  socials: SocialLink[];
  metadata: Metadata;
};

/**
 * Our story page entity
 */
export type OurStoryPage = {
  id: string;
  heading: string;
  content: ContentBlock[];
  metadata: Metadata;
};

/**
 * Base entity with common fields
 */
export type BaseEntity = {
  id: string;
  metadata: Metadata;
};

/**
 * Entity with timestamps
 */
export type TimestampedEntity = BaseEntity & {
  createdAt: string;
  updatedAt: string;
};

/**
 * Entity with slug for URL-friendly identifiers
 */
export type SlugEntity = BaseEntity & {
  slug: string;
};
