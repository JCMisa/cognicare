"use client";

import { useState } from "react";
import {
  UserInputContext,
  defaultUserInputState,
} from "./_context/UserInputContext";

export default function SessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userCourseInput, setUserCourseInput] = useState(defaultUserInputState);

  return (
    <UserInputContext.Provider value={{ userCourseInput, setUserCourseInput }}>
      <main className="w-full">{children}</main>
    </UserInputContext.Provider>
  );
}
