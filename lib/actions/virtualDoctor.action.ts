"use server";

import { db } from "@/config/db";
import { VirtualDoctors } from "@/config/schema";
import { parseStringify } from "../utils";
import { desc, eq } from "drizzle-orm";

export const getAllDoctors = async () => {
  try {
    const data = await db
      .select()
      .from(VirtualDoctors)
      .orderBy(desc(VirtualDoctors.createdAt));

    if (data) {
      return parseStringify({ data: data });
    }
    return parseStringify({ data: null });
  } catch (error) {
    handleError(error);
  }
};

export const getAllUserDoctors = async (userId: string) => {
  try {
    const data = await db
      .select()
      .from(VirtualDoctors)
      .where(eq(VirtualDoctors.userId, userId));

    if (data) {
      return parseStringify({ data: data });
    }
    return parseStringify({ data: null });
  } catch (error) {
    handleError(error);
  }
};

export const getDoctorByDoctorId = async (doctorId: string) => {
  try {
    const data = await db
      .select()
      .from(VirtualDoctors)
      .where(eq(VirtualDoctors.doctorId, doctorId));

    if (data) {
      return parseStringify({ data: data[0] });
    }
    return parseStringify({ data: null });
  } catch (error) {
    handleError(error);
  }
};

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
