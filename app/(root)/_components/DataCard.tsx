import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MoreHorizontalIcon } from "lucide-react";

const DataCard = () => {
  return (
    <Card className="bg-light-100 dark:bg-dark-100 p-4 rounded-lg shadow-md w-full relative">
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Card Title</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Card Description
        </CardDescription>
      </CardHeader>
      <CardContent className="text-4xl font-bold">
        <p>0</p>
      </CardContent>
      <CardFooter className="absolute bottom-3 right-3">
        <Sheet>
          <SheetTrigger>
            <MoreHorizontalIcon />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </CardFooter>
    </Card>
  );
};

export default DataCard;
