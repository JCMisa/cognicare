"use server";

import { currentUser } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";
import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";

export const getCurrentUser = async () => {
  const clerkUser = await currentUser();

  if (clerkUser) {
    const user = await db
      .select()
      .from(Users)
      .where(eq(Users.userId, clerkUser.id));

    if (user.length > 0) {
      return parseStringify({ data: user[0] });
    }
  }

  return parseStringify({ data: null });
};

const handleError = (error: unknown) => {
  console.log("Internal error: ", error);
  return parseStringify({ data: null });
};
