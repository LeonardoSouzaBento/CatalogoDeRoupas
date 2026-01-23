"use client";
import { Card } from "@/components/ui";
import { UserData } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import { EditButton } from "./edit-button";
import { InputNameEmail } from "./input-name-email";

const css = {
  wrapper: `w-full h-16 min-[430px]:h-auto flex gap-4 relative br-lg bg-white`,
  wrapperImg: `h-17 min-w-17 w-17 relative bg-gray-100 br-50 border-none`,
  img: "!border-none !outline-none",
  wrapperInfo:
    "max-[430px]:hidden min-h-16 w-full flex flex-col j-center gap-2",
  name: `block break-words capitalize leading-none`,
  email: "block leading-none break-all",
  buttonEdit: " p-0 br-md ",
};


export const UserCard = ({ userData }: { userData: UserData }) => {
  const [seeEditMode, setSeeEditMode] = useState<boolean>(false);

  return (
    <Card>
      {!seeEditMode ? (
        <div className="h-max flex flex-col gap-4">
          <div className={`${css.wrapper} justify-between`}>
            <div className={`${css.wrapperImg}`}>
              <Image src="/shop/" alt="" fill={true} className={`${css.img}`} />
            </div>
            <div className={`${css.wrapperInfo}`}>
              <p className={`${css.name}`}>{userData.name}</p>
              <p className={`${css.email}`}>Email: {userData.email}</p>
            </div>
            {/* para mobile */}
            <div
              className={`min-[430px]:hidden h-16 flex items-center justify-center`}
            >
              <h3 className={`${css.name}`}>{userData.name}</h3>
            </div>
            <EditButton setSeeEditMode={setSeeEditMode}/>
          </div>
          {/* para mobile */}
          <p className={`${css.email} min-[430px]:hidden`}>
            Email: {userData.email}
          </p>
        </div>
      ) : (
        <InputNameEmail setSeeEditMode={setSeeEditMode} />
      )}
    </Card>
  );
};
