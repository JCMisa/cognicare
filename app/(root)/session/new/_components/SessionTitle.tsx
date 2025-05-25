import { useContext, useCallback } from "react";
import {
  UserCourseInput,
  UserInputContext,
} from "../../_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { debounce } from "@/lib/utils";

const SessionTitle = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleTitleChange = useCallback(
    debounce((name: string, value: string) => {
      setUserCourseInput((prev) => ({
        ...prev,
        [name]: value,
      }));
    }, 300),
    []
  );

  return (
    <div className="mx-20 lg:mx-44">
      <div className="my-5 flex flex-col gap-4">
        <label>Provide a title for this checkup session</label>
        <Input
          placeholder={"My First Checkup"}
          onChange={(e) => handleTitleChange("title", e.target.value)}
          defaultValue={userCourseInput?.title}
        />
      </div>
    </div>
  );
};

export default SessionTitle;
