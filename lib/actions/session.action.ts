"use server";

import { db } from "@/config/db";
import { parseStringify } from "../utils";
import { Sessions } from "@/config/schema";
import { v4 as uuidv4 } from "uuid";
import { auth } from "@clerk/nextjs/server";

export const addToSessionHistory = async (virtualDoctorId: string) => {
  try {
    const { userId } = await auth();
    const sessionId = uuidv4();

    const data = await db.insert(Sessions).values({
      sessionId: sessionId,
      doctorId: virtualDoctorId,
      userId: userId as string,
    });

    if (data) {
      return parseStringify({ data: data });
    }
    return parseStringify({ data: null });
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error: unknown) => {
  console.log("Internal error: ", error);
  return parseStringify({ data: null });
};
