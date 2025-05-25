import { AnimatedList } from "@/components/magicui/animated-list";
import AllSessionListCard from "./AllSessionListCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const AllSessionsList = () => {
  return (
    <section>
      <ScrollArea className="max-h-screen w-full rounded-md overflow-y-auto remove-scrollbar">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">
            Recent Checkup Sessions
          </h4>

          <AnimatedList delay={1000}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div key={item}>
                <AllSessionListCard />
                <Separator className="my-2" />
              </div>
            ))}
          </AnimatedList>
        </div>
      </ScrollArea>
    </section>
  );
};

export default AllSessionsList;
