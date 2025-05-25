import { Button } from "@/components/ui/button";
import { ClockIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserSessionCard = () => {
  return (
    <div className="w-full bg-light-100 dark:bg-dark-100 rounded-b-lg border-t-8 border-primary px-4 py-5 flex flex-col justify-around shadow-md">
      <p className="text-lg font-bold font-sans line-clamp-1">Title</p>
      <div className="py-3">
        <p className="text-muted-foreground line-clamp-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          maiores sequi corporis, impedit ut excepturi cupiditate placeat
          eveniet cumque aliquid aperiam repudiandae veniam totam tempore
          voluptas odio. Fugiat, sequi eum voluptate tempore maxime nesciunt
          minus quisquam nostrum repellendus amet voluptas, architecto sit modi.
          Distinctio officiis culpa, aliquam placeat quo repudiandae?
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          Duration:
          <div className="text-muted-foreground flex items-center gap-1">
            <ClockIcon className="size-5" /> 5 minutes
          </div>
        </div>
        <Button asChild variant={"outline"} size={"sm"}>
          <Link href={`/session/sessionId`}>Start</Link>
        </Button>
      </div>
    </div>
  );
};

export default UserSessionCard;
