import { integer, varchar, serial, pgTable } from "drizzle-orm/pg-core";

import { Enums, timestampstz } from "../core";

export const clientsTable = pgTable("clients", {
  id: serial().primaryKey(),

  telegramId: integer().notNull(),

  firstName: varchar({ length: 50 }).notNull(),
  lastName: varchar({ length: 50 }),

  phone: varchar({ length: 20 }),

  status: Enums.ClientStatus().notNull().default("ACTIVE"),
  ...timestampstz(),
});

export type TypeClient = typeof clientsTable.$inferSelect;
