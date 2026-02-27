import { Bot } from "grammy";

import configs from "./configs";

const bot = new Bot(configs.BOT_TOKEN);

bot.command("start", (ctx) => ctx.reply("Hello, I'm your bot!"));

bot.start({
  onStart: (info) => {
    console.log(`Bot started as @${info.username}`);
  },
});
