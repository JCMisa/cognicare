"use client";

import {
  LayoutGridIcon,
  LightbulbIcon,
  LoaderCircleIcon,
  SettingsIcon,
} from "lucide-react";
import { useContext, useState } from "react";
import { UserInputContext } from "../_context/UserInputContext";
import { Button } from "@/components/ui/button";
import SessionTitle from "./_components/SessionTitle";
import SessionTopicDescription from "./_components/SessionTopicDescription";
import SelectOption from "./_components/SelectOption";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

const NewCheckupSession = () => {
  const stepperOptions = [
    {
      id: 1,
      name: "Title",
      icon: <LayoutGridIcon />,
    },
    {
      id: 2,
      name: "Topic",
      icon: <LightbulbIcon />,
    },
    {
      id: 3,
      name: "Options",
      icon: <SettingsIcon />,
    },
  ];

  const { userCourseInput } = useContext(UserInputContext);

  const [loading, setLoading] = useState(false);
  const [activeIndex, setactiveIndex] = useState(0);

  // check if context array is empty, then disable te next button
  const checkStatus = () => {
    if (!userCourseInput) {
      return true;
    }
    if (activeIndex == 0 && !userCourseInput?.title) {
      return true;
    }
    if (activeIndex === 1 && !userCourseInput.topic) {
      return true;
    }
    if (
      activeIndex === 2 &&
      (!userCourseInput.style ||
        !userCourseInput.voice ||
        !userCourseInput.duration)
    ) {
      return true;
    }
    return false;
  };

  const generateCheckupSession = async () => {
    console.log("User Input: ", userCourseInput);
  };

  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden">
      {/* Wrap AnimatedGridPattern in a container with mask gradient */}
      <div className="absolute inset-x-0 bottom-0 top-16">
        <div className="relative h-full w-full">
          <AnimatedGridPattern
            className="[mask-image:radial-gradient(100%_100%_at_center,white,transparent)] absolute inset-0"
            maxOpacity={0.08} // Lower opacity even more
            numSquares={100}
            duration={3}
            repeatDelay={0.4}
            width={35}
            height={35}
            strokeDasharray={0} // Remove the border lines
          />
          {/* Add gradient overlays for fade effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>
      </div>

      {/* Glow effect */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-primary/30 via-primary/5 to-transparent blur-[100px] -z-5"></div> */}

      <div className="relative w-full max-w-4xl px-4 z-10">
        <h2 className="text-4xl font-medium text-center">
          Create Checkup Session
        </h2>
        {/* stepper */}
        <div className="flex flex-col xl:flex-row items-center justify-center mt-10">
          <div className="flex mt-10">
            {stepperOptions.map((item, index) => (
              <div
                key={item.id || index}
                className="flex flex-row items-center"
              >
                <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                  <div
                    className={`bg-dark-100 p-3 rounded-full text-white ${
                      activeIndex >= index && "bg-primary"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h2 className="hidden md:block md:text-sm">{item.name}</h2>
                </div>
                {index !== stepperOptions.length - 1 && (
                  <div
                    className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 ${
                      activeIndex - 1 >= index && "bg-primary"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          {/* components */}
          {activeIndex === 0 ? (
            <SessionTitle />
          ) : activeIndex === 1 ? (
            <SessionTopicDescription />
          ) : (
            <SelectOption />
          )}

          {/* next & prev btns */}
          <div className="flex flex-col gap-3 sm:flex-row justify-between mt-10 items-center">
            <Button
              onClick={() => setactiveIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="min-w-52 border-primary hover:bg-primary hover:text-white"
              variant={"outline"}
            >
              Previous
            </Button>
            {activeIndex < 2 && (
              <Button
                onClick={() => setactiveIndex(activeIndex + 1)}
                className="min-w-52"
                disabled={checkStatus()}
              >
                Next
              </Button>
            )}
            {activeIndex === 2 && (
              <Button
                onClick={() => generateCheckupSession()}
                className="min-w-52"
                disabled={checkStatus()}
              >
                {loading ? (
                  <LoaderCircleIcon className="size-5 animate-spin" />
                ) : (
                  "Generate Session"
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCheckupSession;
