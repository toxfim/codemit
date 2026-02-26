import { serve } from "@hono/node-server";
import { Hono } from "hono";
import configs from "./config";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

app.use(cors());
app.use(logger());

app.get("/", (c) => c.text("Hello World!"));

serve(
  {
    fetch: app.fetch,
    port: configs.PORT,
  },
  (event) => {
    console.log(`Server is running on port ${event.port}`);
  },
);
