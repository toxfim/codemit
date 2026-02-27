import { Bot } from "grammy";
import { creatorService } from "@codemit/db";

import configs from "./configs";

const bot = new Bot(configs.BOT_TOKEN);

creatorService.createOne({});

bot.command("start", (ctx) => ctx.reply("Hello, I'm your bot!"));

bot.start({
  onStart: (info) => {
    console.log(`Bot started as @${info.username}`);
  },
});
