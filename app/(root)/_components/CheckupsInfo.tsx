import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CheckupsInfo = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <p className="font-bold text-4xl">
        5 <span className="text-sm text-muted-foreground">Total checkups</span>
      </p>

      <Button asChild>
        <Link href={"/session/new"}>+ New Session</Link>
      </Button>
    </div>
  );
};

export default CheckupsInfo;
