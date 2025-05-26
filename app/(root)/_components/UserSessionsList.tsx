import React from "react";
import UserSessionCard from "./UserSessionCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  getCurrentUser,
  hasSubscriptionPermission,
} from "@/lib/actions/user.action";
import { getAllUserDoctors } from "@/lib/actions/virtualDoctor.action";

const UserSessionsList = async () => {
  const user: { data: UserType } = await getCurrentUser();
  const userDoctors: { data: VirtualDoctorType[] } = await getAllUserDoctors(
    user.data.userId
  );

  let userDoctorsList: VirtualDoctorType[] = [];

  if (userDoctors.data.length > 0) {
    userDoctorsList = userDoctors.data;
  }

  const hasAccess = await hasSubscriptionPermission();

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="font-bold text-4xl">
          {userDoctorsList.length}{" "}
          <span className="text-sm text-muted-foreground">
            Total virtual doctors
          </span>
        </p>

        {hasAccess ? (
          <Button asChild>
            <Link href={"/session/new"}>+ New Session</Link>
          </Button>
        ) : (
          <Button asChild variant={"destructive"}>
            <Link href={"/subscription"}>Upgrade Plan</Link>
          </Button>
        )}
      </div>

      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-4xl font-bold">Your Virtual Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {userDoctorsList.length > 0
            ? userDoctorsList.map((doctor) => (
                <UserSessionCard key={doctor.doctorId} virtualDoctor={doctor} />
              ))
            : [1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="w-full bg-light-100 dark:bg-dark-100 rounded-b-lg px-4 py-5 flex flex-col justify-around shadow-md animate-pulse overflow-hidden"
                >
                  <p className="min-w-20 max-w-20 min-h-10 max-h-10 animate-pulse rounded-lg"></p>
                  <div className="py-3">
                    <p className="min-w-32 max-w-32 min-h-20 max-h-20 animate-pulse rounded-lg"></p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default UserSessionsList;
