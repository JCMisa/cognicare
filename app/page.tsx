import HomeHero from "@/components/custom/HomeHero";
import HomeNavbar from "@/components/custom/HomeNavbar";
import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export default async function Home() {
  const clerkUser = await currentUser();

  let user;
  if (clerkUser) {
    const existingUser = await db
      .select()
      .from(Users)
      .where(eq(Users.userId, clerkUser.id));

    if (existingUser?.length > 0) {
      user = existingUser[0];
    }
  }

  return (
    <>
      <HomeNavbar user={user as UserType} />
      <HomeHero user={user as UserType} />
    </>
  );
}
