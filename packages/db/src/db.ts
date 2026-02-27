import { drizzle } from "drizzle-orm/node-postgres";
import { configs } from "./helpers";

import * as schema from "./schemas";

const db = drizzle(configs.DATABASE_URL, { schema });

export default db;
