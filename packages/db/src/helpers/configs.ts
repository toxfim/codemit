import { getEnv } from "@codemit/shared/utils";

export const configs = {
  DATABASE_URL: getEnv("DATABASE_URL"),
};
