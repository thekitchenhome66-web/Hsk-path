export const HSK_LEVELS = [1, 2, 3, 4, 5, 6] as const;
export type HskLevel = (typeof HSK_LEVELS)[number];

export const APP_NAME = "HSKPath";
export const APP_TAGLINE = "Your path to Chinese fluency.";

export const ROUTES = {
  home: "/",
  login: "/login",
  signup: "/signup",
  dashboard: "/dashboard",
} as const;
