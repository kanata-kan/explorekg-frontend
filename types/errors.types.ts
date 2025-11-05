/**
 * Error Types — Error Handling and Validation Types
 *
 * This file contains types for error handling, validation, and exception management.
 */

/**
 * Base error type
 */
export type BaseError = {
  message: string;
  code?: string;
  timestamp?: string;
};

/**
 * Application error with severity levels
 */
export type AppError = BaseError & {
  severity: "low" | "medium" | "high" | "critical";
  source?: string;
  stack?: string;
};

/**
 * Form validation error
 */
export type FormError = {
  field: string;
  message: string;
  type?:
    | "required"
    | "invalid"
    | "minLength"
    | "maxLength"
    | "pattern"
    | "custom";
};

/**
 * Form validation state
 */
export type FormValidationState = {
  isValid: boolean;
  errors: FormError[];
  touched: Record<string, boolean>;
};

/**
 * Network error
 */
export type NetworkError = BaseError & {
  status?: number;
  statusText?: string;
  url?: string;
};

/**
 * Validation error with details
 */
export type ValidationError = {
  field: string;
  message: string;
  code?: string;
  value?: any;
};

/**
 * Multiple validation errors
 */
export type ValidationErrors = {
  errors: ValidationError[];
  isValid: boolean;
};

/**
 * Error boundary state
 */
export type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
};

/**
 * Try-catch result type
 */
export type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

/**
 * Async result with loading state
 */
export type AsyncResult<T, E = Error> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: E };

/**
 * Error handler function type
 */
export type ErrorHandler = (error: Error) => void;

/**
 * Error recovery function type
 */
export type ErrorRecovery = () => void | Promise<void>;

/**
 * Error logger configuration
 */
export type ErrorLoggerConfig = {
  enabled: boolean;
  logToConsole: boolean;
  logToServer: boolean;
  serverEndpoint?: string;
};
