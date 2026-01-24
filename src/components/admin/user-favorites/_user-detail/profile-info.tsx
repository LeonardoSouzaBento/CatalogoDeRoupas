'use client';
import { UserContext } from '@/contexts/index';
import { useContext, useState } from 'react';
import { SeeMoreButton } from './see-more-button';
import { FirstTable, MeasuresTable } from './index';

const ProfileInfo = () => {
  const [seeMoreUserInfo, setSeeMoreUserInfo] = useState<boolean>(false);
  const { userData } = useContext(UserContext);

  const css = {
    wrapper: 'mb-5 round-lg bg-neutral-50 p-3',
  };

  return (
    <div className={`${css.wrapper}`}>
      <FirstTable userData={userData} />
      {seeMoreUserInfo && <MeasuresTable userData={userData} />}
      <SeeMoreButton seeMoreUserInfo={seeMoreUserInfo} setSeeMoreUserInfo={setSeeMoreUserInfo} />
    </div>
  );
};

export { ProfileInfo };
