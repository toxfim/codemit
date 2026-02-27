import { relations } from "drizzle-orm";
import { pgTable, serial, text, uuid } from "drizzle-orm/pg-core";

import { Enums, timestampstz } from "@/db/core";

import { clientsTable } from ".";

export const chatsTable = pgTable("chats", {
  id: uuid().defaultRandom().primaryKey(),

  clientId: serial()
    .notNull()
    .references(() => clientsTable.id),
  text: text().notNull(),

  role: Enums.ChatRole().notNull().default("CLIENT"),
  ...timestampstz(),
});

export const chatsRelations = relations(chatsTable, ({ one }) => ({
  client: one(clientsTable, {
    fields: [chatsTable.clientId],
    references: [clientsTable.id],
  }),
}));

export type TypeChat = typeof chatsTable.$inferSelect;
