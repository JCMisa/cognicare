import { useContext } from "react";
import { UserInputContext } from "../../_context/UserInputContext";
import { ClockIcon, MessageSquareDotIcon, SpeechIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const SelectOption = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (name: string, value: string) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1 my-2">
            <MessageSquareDotIcon className="w-5 h-5 text-primary" />
            <label>Virtual Doctor's Communication Style</label>
          </div>
          <Select
            onValueChange={(value) => handleInputChange("style", value)}
            defaultValue={userCourseInput?.style}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="formal" className="cursor-pointer">
                Formal
              </SelectItem>
              <SelectItem value="casual" className="cursor-pointer">
                Casual
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1 my-2">
            <ClockIcon className="w-5 h-5 text-primary" />
            <label>Checkup Session Duration</label>
          </div>
          <Input
            placeholder={"5 minutes"}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value >= 0 && value <= 60) {
                handleInputChange("duration", e.target.value);
              }
            }}
            defaultValue={userCourseInput?.duration}
            type="number"
            min={0}
            max={60}
            onKeyDown={(e) => {
              if (e.key === "-") {
                e.preventDefault();
              }
            }}
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-row items-center gap-1 my-2 w-full">
          <SpeechIcon className="w-5 h-5 text-primary" />
          <label>Virtual Doctor's Voice</label>
        </div>
        <Select
          onValueChange={(value) => handleInputChange("voice", value)}
          defaultValue={userCourseInput?.voice}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male" className="cursor-pointer">
              Male
            </SelectItem>
            <SelectItem value="female" className="cursor-pointer">
              Female
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectOption;
