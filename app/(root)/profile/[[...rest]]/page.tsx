import { UserProfile } from "@clerk/nextjs";
import React from "react";

const ProfilePage = () => {
  return (
    <section>
      <UserProfile />
    </section>
  );
};

export default ProfilePage;
