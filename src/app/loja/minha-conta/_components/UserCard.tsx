import React from "react";
import Image from "next/image";
import { Pen } from "lucide-react";
import { iconMdStyles } from "@/app/lucideIconStyles";
import { UserData } from "@/types/types";

//min-[500px]:flex-row min-[500px]:gap-4

const css = {
  wrapper: `w-full h-16 min-[430px]:h-auto flex gap-6 relative br-lg bg-white`,
  wrapperImg: `h-16 min-w-16 w-16 relative bg-gray-100 br-lg border-none`,
  img: "!border-none !outline-none",
  wrapperInfo:
    "max-[430px]:hidden min-h-16 w-full flex flex-col j-center gap-2",
  name: `block font-bold break-words text-gray-800 capitalize leading-none text-[1.18em]`,
  email: "block text-[1.06em] leading-none break-all",
  buttonEdit: "square-button p-0 br-md shadow-soft-small",
};

const UserCard = ({ userData }: { userData: UserData }) => {
  return (
    <div className="h-max flex flex-col gap-5">
      <div className={`${css.wrapper} justify-between`}>
        <div className={`${css.wrapperImg}`}>
          <Image src="/shop/" alt="" fill={true} className={`${css.img}`} />
        </div>
        <div className={`${css.wrapperInfo}`}>
          <p className={`${css.name}`}>{userData.name}</p>
          <p className={`${css.email}`}>{userData.email}</p>
        </div>
        {/* para mobile */}
        <div
          className={`min-[430px]:hidden h-16 flex items-center justify-center`}
        >
          <p className={`${css.name}`}>{userData.name}</p>
        </div>

        <div className="h-16 w-auto flex items-center mb-1 br-0">
          <button className={`${css.buttonEdit}`}>
            <Pen {...iconMdStyles} color="black" />
          </button>
        </div>
      </div>
      {/* para mobile */}
      <p className={`${css.email} min-[430px]:hidden`}>{userData.email}</p>
    </div>
  );
};

export default UserCard;
