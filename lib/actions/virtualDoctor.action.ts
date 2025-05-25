"use server";

import { db } from "@/config/db";
import { VirtualDoctors } from "@/config/schema";
import { parseStringify } from "../utils";

export const createDoctor = async (
  doctorId: string,
  userId: string,
  title: string,
  topic: string,
  style: string,
  voice: string,
  duration: string
) => {
  try {
    const data = await db.insert(VirtualDoctors).values({
      doctorId: doctorId,
      userId: userId,
      title: title,
      topic: topic,
      style: style,
      voice: voice,
      duration: Number(duration),
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
