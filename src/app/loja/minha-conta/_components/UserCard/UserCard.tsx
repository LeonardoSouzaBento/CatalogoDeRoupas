import React, { useState } from "react";
import Image from "next/image";
import { UserData } from "@/types/types";
import NameEmailInput from "../inputs/NameEmailInput";
import EditButton from "./EditButton";

//min-[500px]:flex-row min-[500px]:gap-4

const css = {
  wrapper: `w-full h-16 min-[430px]:h-auto flex gap-4 relative br-lg bg-white`,
  wrapperImg: `h-17 min-w-17 w-17 relative bg-gray-100 br-50 border-none`,
  img: "!border-none !outline-none",
  wrapperInfo:
    "max-[430px]:hidden min-h-16 w-full flex flex-col j-center gap-2",
  name: `block font-bold break-words text-gray-800 capitalize leading-none p20`,
  email: "block p18 leading-none break-all",
  buttonEdit: "square-button p-0 br-md shadow-soft-small",
};


const UserCard = ({ userData }: { userData: UserData }) => {
  const [seeEditMode, setSeeEditMode] = useState<boolean>(false);

  return (
    <>
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
              <p className={`${css.name}`}>{userData.name}</p>
            </div>
            <EditButton setSeeEditMode={setSeeEditMode}/>
          </div>
          {/* para mobile */}
          <p className={`${css.email} min-[430px]:hidden`}>
            Email: {userData.email}
          </p>
        </div>
      ) : (
        <NameEmailInput setSeeEditMode={setSeeEditMode} />
      )}
    </>
  );
};

export default UserCard;
