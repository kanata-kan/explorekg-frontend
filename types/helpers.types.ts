/**
 * Utility Types — Reusable Type Helpers
 *
 * This file contains powerful utility types for improved type safety
 * and code reusability across the application.
 */

/**
 * Make all properties of T deeply partial (including nested objects)
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Make all properties of T deeply readonly (including nested objects)
 */
export type ReadonlyDeep<T> = {
  readonly [P in keyof T]: T[P] extends object ? ReadonlyDeep<T[P]> : T[P];
};

/**
 * Remove null and undefined from all properties of T
 */
export type NonNullableFields<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

/**
 * Add an id property to type T
 */
export type WithId<T> = T & { id: string };

/**
 * Extract only specific keys K from type T
 */
export type ExtractKeys<T, K extends keyof T> = Pick<T, K>;

/**
 * Omit specific keys K from type T (alias for better readability)
 */
export type OmitKeys<T, K extends keyof T> = Omit<T, K>;

/**
 * Make specific properties K of T optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Make specific properties K of T required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

/**
 * Standard API response wrapper
 */
export type ApiResponse<T> = {
  data: T;
  status: number;
  message?: string;
};

/**
 * Paginated API response wrapper
 */
export type PaginatedResponse<T> = {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
};

/**
 * API error response structure
 */
export type ApiError = {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
};

/**
 * Nullable type helper
 */
export type Nullable<T> = T | null;

/**
 * Optional type helper
 */
export type Optional<T> = T | undefined;

/**
 * Promise wrapper for async operations
 */
export type AsyncData<T> = Promise<T>;

/**
 * Extract the return type of a Promise
 */
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

/**
 * Readonly array type
 */
export type ReadonlyArray<T> = readonly T[];

/**
 * String literal union to array
 */
export type UnionToArray<T> = T extends any ? T[] : never;

/**
 * Function type helper
 */
export type Func<TArgs extends any[] = any[], TReturn = any> = (
  ...args: TArgs
) => TReturn;

/**
 * Async function type helper
 */
export type AsyncFunc<TArgs extends any[] = any[], TReturn = any> = (
  ...args: TArgs
) => Promise<TReturn>;

/**
 * Prettify complex types for better IntelliSense
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
