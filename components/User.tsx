import React from "react";
import { User as NextUser, Link } from "@nextui-org/react";

const User = () => {
  return (
    <NextUser
      name="MengYao LI"
      description={
        <Link
          href="https://x.com/Sep_Miamia"
          size="sm"
          isExternal
          color="danger">
          @Sep_Miamia
        </Link>
      }
      avatarProps={{
        src: "https://mia-profile.vercel.app/profile.png",
      }}
    />
  );
};

export default User;
