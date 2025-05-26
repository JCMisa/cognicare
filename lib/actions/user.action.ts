"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";
import { db } from "@/config/db";
import { Users, VirtualDoctors } from "@/config/schema";
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

export const hasSubscriptionPermission = async () => {
  const { userId, has } = await auth();

  let limit = 0;

  try {
    if (has({ plan: "pro" })) {
      return true;
    } else if (has({ feature: "3_checkups" })) {
      limit = 3;
    } else if (has({ feature: "10_checkups" })) {
      limit = 10;
    }

    const data = await db
      .select()
      .from(VirtualDoctors)
      .where(eq(VirtualDoctors.userId, userId as string));

    if (!data) {
      return parseStringify({ data: null });
    }

    const doctorsCount = data?.length;

    if (doctorsCount >= limit) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    handleError(error);
  }
};
