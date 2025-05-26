import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface UserSessionCardProps {
  virtualDoctor: VirtualDoctorType;
}

const UserSessionCard = ({ virtualDoctor }: UserSessionCardProps) => {
  return (
    <div className="w-full bg-light-100 dark:bg-dark-100 rounded-b-lg border-t-8 border-primary px-4 py-5 flex flex-col justify-around shadow-md">
      <p className="text-lg font-bold font-sans line-clamp-1">
        {virtualDoctor.title || ""}
      </p>
      <div className="py-3">
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {virtualDoctor.topic || ""}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="hidden flex-col items-start xl:flex xl:flex-row xl:items-center gap-2">
          Duration:
          <div className="text-muted-foreground flex items-center gap-1 text-xs">
            {virtualDoctor.duration || 0} minutes
          </div>
        </div>
        <Button asChild variant={"outline"} size={"sm"}>
          <Link href={`/session/${virtualDoctor.doctorId}`}>Start</Link>
        </Button>
      </div>
    </div>
  );
};

export default UserSessionCard;
