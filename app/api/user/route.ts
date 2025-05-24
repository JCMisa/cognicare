import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// userId: user?.id,
//         firstName: user?.firstName,
//         lastName: user?.lastName,
//         email: user?.primaryEmailAddress?.emailAddress,
//         imageUrl: user?.imageUrl,
//         role: "patient",

interface UserRequest {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  role: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  const { userId, firstName, lastName, email, imageUrl, role }: UserRequest =
    await req.json(); // fetching from the request body

  const existingUser = await db
    .select()
    .from(Users)
    .where(eq(Users.userId, userId));

  if (existingUser?.length === 0) {
    const result = await db
      .insert(Users)
      .values({
        userId: userId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        imageUrl: imageUrl,
        role: role,
      })
      .returning({
        id: Users.id,
        userId: Users.userId,
        firstName: Users.firstName,
        lastName: Users.lastName,
        email: Users.email,
        imageUrl: Users.imageUrl,
        role: Users.role,
        subscriptionId: Users.subscriptionId,
        createdAt: Users.createdAt,
        updatedAt: Users.updatedAt,
      });

    return NextResponse.json(result);
  }

  return NextResponse.json(existingUser[0]);
}
