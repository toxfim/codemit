import { getEnv } from "@codemit/shared/utils";

const configs = {
  PORT: Number(getEnv("PORT", "4400")),
};

export default configs;
