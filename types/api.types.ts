/**
 * API Types — Request/Response Shapes and API-related Types
 *
 * This file contains types for API requests, responses, and data fetching.
 */

import {
  Activity,
  Car,
  ContactPage,
  GalleryItem,
  HomePage,
  OurStoryPage,
  Service,
  TravelPack,
} from "./entities.types";
import { ApiError, ApiResponse, PaginatedResponse } from "./helpers.types";
import { Locale } from "./enums";

/**
 * Generic fetch options
 */
export type FetchOptions = {
  cache?: RequestCache;
  revalidate?: number | false;
  tags?: string[];
};

/**
 * API endpoint configuration
 */
export type ApiEndpoint = {
  path: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
};

/**
 * Activities API types
 */
export namespace ActivitiesAPI {
  export type GetAllResponse = ApiResponse<Activity[]>;
  export type GetOneResponse = ApiResponse<Activity>;
  export type GetOneParams = { id: string; locale: Locale };
}

/**
 * Cars API types
 */
export namespace CarsAPI {
  export type GetAllResponse = ApiResponse<Car[]>;
  export type GetOneResponse = ApiResponse<Car>;
  export type GetOneParams = { id: string; locale: Locale };
}

/**
 * Travel Packs API types
 */
export namespace TravelPacksAPI {
  export type GetAllResponse = ApiResponse<TravelPack[]>;
  export type GetOneResponse = ApiResponse<TravelPack>;
  export type GetOneParams = { id: string; locale: Locale };
}

/**
 * Gallery API types
 */
export namespace GalleryAPI {
  export type GetAllResponse = ApiResponse<GalleryItem[]>;
  export type GetOneResponse = ApiResponse<GalleryItem>;
  export type GetOneParams = { id: string; locale: Locale };
}

/**
 * Services API types
 */
export namespace ServicesAPI {
  export type GetAllResponse = ApiResponse<Service[]>;
  export type GetOneResponse = ApiResponse<Service>;
}

/**
 * Contact API types
 */
export namespace ContactAPI {
  export type GetPageResponse = ApiResponse<ContactPage>;
  export type SubmitFormRequest = {
    name: string;
    email: string;
    message: string;
    phone?: string;
  };
  export type SubmitFormResponse = ApiResponse<{ success: boolean }>;
}

/**
 * Home API types
 */
export namespace HomeAPI {
  export type GetPageResponse = ApiResponse<HomePage>;
}

/**
 * Our Story API types
 */
export namespace OurStoryAPI {
  export type GetPageResponse = ApiResponse<OurStoryPage>;
}

/**
 * Validation result type
 */
export type ValidationResult<T> = {
  success: boolean;
  data?: T;
  errors?: ValidationError[];
};

/**
 * Validation error type
 */
export type ValidationError = {
  field: string;
  message: string;
  code?: string;
};

/**
 * Request with locale
 */
export type LocalizedRequest<T = {}> = T & {
  locale: Locale;
};

/**
 * Fetch result type
 */
export type FetchResult<T> =
  | { success: true; data: T }
  | { success: false; error: ApiError };

/**
 * Query parameters type
 */
export type QueryParams = Record<string, string | number | boolean | undefined>;

/**
 * Revalidation options
 */
export type RevalidateOptions = {
  tags?: string[];
  path?: string;
};

// Re-export useful types from helpers
export type { ApiResponse, ApiError, PaginatedResponse };
