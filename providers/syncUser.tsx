"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "sonner";

const SyncUser = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();

  const createNewUser = async () => {
    try {
      const result = await axios.post("/api/user", {
        userId: user?.id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl,
        role: "patient",
        // subscriptionId is initially null
        // createdAt is automatically set by the database
        // updatedAt is initially null
      });

      if (result.data) {
        console.log("User sync successfully: ", result.data);
      }
    } catch (error) {
      console.log("User sync internal error: ", error);
      toast.error("Internal error occured while saving the user");
    }
  };

  useEffect(() => {
    user && createNewUser();
  }, [user]);

  return <>{children}</>;
};

export default SyncUser;
