/**
 * UI Types — Component Props and UI-related Types
 *
 * This file contains types for UI components, props, and visual elements.
 */

import { ReactNode } from "react";
import {
  AlignType,
  BaseVariant,
  OverlayType,
  SectionVariant,
  TypographyVariant,
} from "./enums";

/**
 * Base component props that most components accept
 */
export type BaseComponentProps = {
  className?: string;
  children?: ReactNode;
  id?: string;
  "data-testid"?: string;
};

/**
 * Display item for lists and cards
 */
export type DisplayItem = {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  price?: string | number | null;
  specs?: DisplaySpec[];
  ctaLink?: string;
};

/**
 * Specification item for display cards
 */
export type DisplaySpec = {
  icon: ReactNode;
  label: string;
};

/**
 * Hero section props
 */
export type HeroProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  ctaText: string;
  ctaLink: string;
  align?: AlignType;
  overlay?: OverlayType;
};

/**
 * Hero data structure
 */
export type Hero = {
  title: string;
  subtitle: string;
  heroImage: string;
  ctaText: string;
  ctaLink: string;
  align?: AlignType;
  overlay?: OverlayType;
};

/**
 * Section component base props
 */
export type SectionProps = {
  variant?: SectionVariant | BaseVariant;
  className?: string;
  children: ReactNode;
};

/**
 * Container component props
 */
export type ContainerProps = BaseComponentProps & {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  centered?: boolean;
};

/**
 * Typography component props
 */
export type TypographyProps = {
  variant?: TypographyVariant;
  color?: string;
  align?: AlignType;
  className?: string;
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Button component props
 */
export type ButtonProps = BaseComponentProps & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
};

/**
 * Card component props
 */
export type CardProps = BaseComponentProps & {
  variant?: "default" | "elevated" | "outlined";
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
};

/**
 * Grid component props
 */
export type GridProps = BaseComponentProps & {
  columns?: number | { xs?: number; sm?: number; md?: number; lg?: number };
  gap?: number | string;
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around";
};

/**
 * Lightbox props
 */
export type LightboxProps = {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  showThumbnails?: boolean;
};

/**
 * Gallery slider options
 */
export type GallerySliderOptions = {
  autoPlay?: boolean;
  delay?: number;
  length: number;
};

/**
 * Smart slider props
 */
export type SmartSliderProps = {
  items: ReactNode[];
  autoplay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  infinite?: boolean;
};

/**
 * Modal props
 */
export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
};

/**
 * Close button props
 */
export type CloseButtonProps = {
  onClick: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
};

/**
 * View all button props
 */
export type ViewAllButtonProps = {
  href: string;
  label?: string;
  variant?: BaseVariant;
  className?: string;
};

/**
 * Service card props
 */
export type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  link?: string;
};

/**
 * Universal card props
 */
export type UniversalCardProps = {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  ctaLink: string;
  price?: string | number | null;
  specs?: DisplaySpec[];
  variant?: BaseVariant;
};

/**
 * Gallery item card props
 */
export type GalleryItemCardProps = {
  item: {
    id: string;
    title: string;
    image: string;
    caption: string;
  };
  onOpen: () => void;
};

/**
 * Responsive gallery props
 */
export type ResponsiveGalleryProps = {
  images: string[];
  onImageClick: (index: number) => void;
  columns?: { xs?: number; sm?: number; md?: number; lg?: number };
};
