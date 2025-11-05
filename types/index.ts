/**
 * Types Index — Central Export Point
 *
 * This is the single entry point for all type definitions in the application.
 * Import types from '@/types' instead of individual files.
 *
 * @example
 * import { Activity, Car, ApiResponse, DisplayItem } from '@/types';
 */

// ===== Core Entity Types =====
export * from "./entities.types";

// ===== API Types =====
export * from "./api.types";

// ===== UI & Component Types =====
export * from "./ui.types";

// ===== System & Configuration Types =====
export * from "./system.types";

// ===== Utility & Helper Types =====
export * from "./helpers.types";

// ===== Enums & Constants =====
export * from "./enums";

// ===== Error Types =====
// Note: ValidationError is exported from both api.types and errors.types
// Using specific exports to avoid ambiguity
export type {
  BaseError,
  AppError,
  FormError,
  FormValidationState,
  NetworkError,
  ValidationErrors,
  ErrorBoundaryState,
  Result,
  AsyncResult,
  ErrorHandler,
  ErrorRecovery,
  ErrorLoggerConfig,
} from "./errors.types";

// ===== Motion & Animation Types =====
// Note: MotionDirection is exported from both enums and motion.types
// Using specific exports to avoid ambiguity
export type {
  MotionVariantConfig,
  StaggerConfig,
  MotionSafeProps,
  AnimationPreset,
  UseMotionReturn,
  MotionPreferences,
  Variants,
  Transition,
} from "./motion.types";
