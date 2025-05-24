import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroText = ({ user }: { user: UserType }) => {
  return (
    <>
      <div className="z-10 flex min-h-32 items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText
            shimmerWidth={500}
            className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
          >
            <span>🩺 Start Your Virtual Check-up</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <span className="flex items-center justify-center text-center px-10 md:px-32 text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary to-primary-700 dark:from-light dark:via-primary-200 dark:to-primary bg-clip-text text-transparent py-2">
          Elevate Your Health. Smarter Care, Beyond Compare. Use CogniCare.
        </span>
        <span className="flex items-center justify-center text-center px-10 md:px-32 text-lg font-normal text-neutral-500 dark:text-neutral-400">
          Transform your well-being with our cutting-edge AI voice assistant.
          Delivering intelligent, empathetic virtual check-ups, we provide
          unparalleled clarity and intuitive access to your health journey,
          anytime, anywhere.
        </span>
      </div>

      {user && (
        <Button asChild className="mt-8 min-w-52 max-w-52" size={"lg"}>
          <Link href="/dashboard">
            Get Started <ArrowRightIcon />
          </Link>
        </Button>
      )}
    </>
  );
};

export default HeroText;
