import React, { useCallback, useContext } from "react";
import { UserInputContext } from "../../_context/UserInputContext";
import { debounce } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const SessionTopicDescription = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleTopicChange = useCallback(
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
        <label>
          What would you like to discuss with your virtual doctor today?
        </label>
        <Textarea
          placeholder="E.g., Feeling anxious about work-related stress"
          onChange={(e) => handleTopicChange("topic", e.target.value)}
          defaultValue={userCourseInput?.topic}
          rows={5}
        />
      </div>
    </div>
  );
};

export default SessionTopicDescription;
