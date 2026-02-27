import { eq } from "drizzle-orm";
import db from "../db";
import { creatorsTable, TypeCreator } from "../schemas";

export const createCreator = async (creator: TypeCreator) => {
  const newCreator = await db.insert(creatorsTable).values(creator).returning();
  return newCreator;
};

export const findCreatorById = async (id: number) => {
  const creator = await db.query.creatorsTable.findFirst({
    where: eq(creatorsTable.id, id),
  });
  return creator;
};
