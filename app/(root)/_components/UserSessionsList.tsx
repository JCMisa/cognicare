import React from "react";
import UserSessionCard from "./UserSessionCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const UserSessionsList = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="font-bold text-4xl">
          5<span className="text-sm text-muted-foreground">Total checkups</span>
        </p>

        <Button asChild>
          <Link href={"/session/new"}>+ New Session</Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-4xl font-bold">Your Checkups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {[1, 2, 3, 4, 5].length > 0
            ? [1, 2, 3, 4, 5].map((item) => <UserSessionCard key={item} />)
            : [1, 2, 3, 4, 5].map((item) => <div key={item}></div>)}
        </div>
      </div>
    </div>
  );
};

export default UserSessionsList;
