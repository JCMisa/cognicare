import React, { Suspense } from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import ModeToggle from "../ModeToggle";
import LogoFull from "./LogoFull";
import Image from "next/image";

const HomeNavbar = async ({ user }: { user: UserType }) => {
  return (
    <div className="w-full p-3 px-20 flex items-center justify-between border border-b-slate-200 dark:border-b-gray-500/20">
      <LogoFull />

      <div className="flex items-center gap-4">
        <ModeToggle bg="transparent" />
        {user ? (
          <div className="flex items-center gap-2">
            <Suspense
              fallback={
                <Image
                  src={user?.imageUrl || "/empty-img.png"}
                  loading="lazy"
                  blurDataURL="/blur.jpg"
                  alt="profile"
                  width="50"
                  height="40"
                />
              }
            >
              <UserButton />
            </Suspense>
            <div className="flex flex-col">
              <p>
                {user.firstName || "John Carlo"} {user.lastName || "Misa"}
              </p>
              <span className="text-xs">
                {user.email || "useremail@example.com"}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <Button asChild size={"sm"} variant={"ghost"}>
              <Link href={"/sign-in"}>Log in</Link>
            </Button>
            <Button asChild size={"sm"} variant={"outline"}>
              <Link href={"/sign-up"}>Sign up</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeNavbar;
