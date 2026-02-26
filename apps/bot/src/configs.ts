import "dotenv/config";
import { getEnv } from "@codemit/shared/utils";

const configs = {
  BOT_TOKEN: getEnv("BOT_TOKEN"),
};

export default configs;
