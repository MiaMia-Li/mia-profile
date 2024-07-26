import React from "react";
import { User as NextUser, Link } from "@nextui-org/react";

const User = () => {
  return (
    <NextUser
      name="MengYao LI"
      description={
        <Link href="https://x.com/Sep_Miamia" size="sm" isExternal>
          @Sep_Miamia
        </Link>
      }
      avatarProps={{
        src: "https://media.licdn.com/dms/image/D5635AQFHyIAVNODXQQ/profile-framedphoto-shrink_200_200/0/1719814052939?e=1722603600&v=beta&t=oKdf25G5x_NpVWwwlPxP4ZOvU8YUfYCRnI0y07EVoEY",
      }}
    />
  );
};

export default User;
