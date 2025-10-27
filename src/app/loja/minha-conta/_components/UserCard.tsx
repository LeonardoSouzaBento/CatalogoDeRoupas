import React from "react";
import Image from "next/image";
import { Pen } from "lucide-react";
import { iconMdStyles } from "@app/styles";

const css = {
  wrapper: `w-full h-max flex flex-col gap-3 min-[500px]:flex-row min-[500px]:gap-4 relative br-lg bg-white`,
  wrapperImg: `h-16 min-w-16 w-16 relative bg-gray-100 br-lg border-none`,
  img: "!border-none !outline-none",
  wrapperInfo: "min-h-16 w-full py-2 flex flex-col gap-2",
  name: `block font-semibold break-words text-gray-800 capitalize leading-none text-[1.2em] xl:text-[1.25em]`,
  email: "block leading-none  break-all",
  buttonEdit: "absolute right-0 top-0 square-button",
};

const UserCard = () => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.wrapperImg}`}>
        <Image src="/shop/" alt="" fill={true} className={`${css.img}`} />
      </div>
      <div className={`${css.wrapperInfo}`}>
        <p className={`${css.name}`}>Leonardo Souza Bento</p>
        <p className={`${css.email}`}>bentosouzaleonardo@gmail.com</p>
      </div>
      <button className={`${css.buttonEdit}`}>
        <Pen {...iconMdStyles} />
      </button>
    </div>
  );
};

export default UserCard;
