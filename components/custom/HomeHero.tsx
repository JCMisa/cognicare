import React from "react";
import { DotPattern } from "../magicui/dot-pattern";
import { cn } from "@/lib/utils";

import HeroText from "./HeroText";
import HeroVideo from "./HeroVideo";

const HomeHero = ({ user }: { user: UserType }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(100%_100%_at_center,white,transparent)]"
        )}
      />
      <HeroText user={user} />
      <HeroVideo />
    </div>
  );
};

export default HomeHero;
