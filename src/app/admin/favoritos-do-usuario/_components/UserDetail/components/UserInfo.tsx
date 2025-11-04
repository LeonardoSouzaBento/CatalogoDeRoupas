"use client";
import { UserContext } from "@/contexts";
import { useContext, useState } from "react";
import ButtonSeeMore from "./ButtonSeeMore";
import FirstTable from "./FirstTable";
import MeasuresTable from "./MeasuresTable";

const UserInfo = () => {
  const [seeMoreUserInfo, setSeeMoreUserInfo] = useState<boolean>(false);
  const { userData } = useContext(UserContext);

  const css = {
    wrapper: "mb-5 br-lg bg-neutral-50 p-3",
  };

  return (
    <div className={`${css.wrapper}`}>
      <FirstTable userData={userData} />
      {seeMoreUserInfo && <MeasuresTable userData={userData} />}
      <ButtonSeeMore
        seeMoreUserInfo={seeMoreUserInfo}
        setSeeMoreUserInfo={setSeeMoreUserInfo}
      />
    </div>
  );
};

export default UserInfo;
