import { Dispatch, SetStateAction, createContext } from "react";

export interface UserCourseInput {
  title?: string;
  topic?: string;
  style?: string;
  voice?: string;
  duration?: string;
}

interface UserInputContextType {
  userCourseInput: UserCourseInput;
  setUserCourseInput: Dispatch<SetStateAction<UserCourseInput>>;
}

export const UserInputContext = createContext<UserInputContextType>({
  userCourseInput: {},
  setUserCourseInput: () => {},
});

export const defaultUserInputState: UserCourseInput = {
  title: "",
  topic: "",
  style: "",
  voice: "",
  duration: "",
};
