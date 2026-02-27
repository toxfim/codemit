import { relations } from "drizzle-orm";
import { serial, varchar, pgTable } from "drizzle-orm/pg-core";

import { timestampstz, Enums } from "@/db/core";

import { paymentsTable, profileTable } from ".";

export type TypeCreator = typeof creatorsTable.$inferSelect;

export const creatorsTable = pgTable("creators", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),

  subscriptionPlan: Enums.SubscriptionPlanEnum("subscription_plan")
    .default("FREE")
    .notNull(),

  phone: varchar("phone", { length: 20 }).notNull(),

  role: Enums.UserRoleEnum().notNull().default("EMPLOYEE"),

  telegramId: varchar({ length: 255 }),
  ...timestampstz(),
});

export const creatorsRelations = relations(creatorsTable, ({ many }) => ({
  payments: many(paymentsTable),
  business: many(profileTable),
}));
