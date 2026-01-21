import React from 'react';
import { BooleanSetter } from '@/types/types';

import { ChevronDown, ChevronUp } from 'lucide-react';

const css = {
  wrapper: `w-full flex justify-start`,
  button: `!h-9 !pl-4 !pr-[13px]`,
};

const ButtonSeeMore = ({
  seeMoreUserInfo,
  setSeeMoreUserInfo,
}: {
  seeMoreUserInfo: boolean;
  setSeeMoreUserInfo: BooleanSetter;
}) => {
  return (
    <div className={`${css.wrapper}`}>
      <button className={`${css.button}`} onClick={() => setSeeMoreUserInfo(!seeMoreUserInfo)}>
        {!seeMoreUserInfo ? ' Ver Mais' : ' Ver Menos'}
        {!seeMoreUserInfo ? <ChevronDown  /> : <ChevronUp  />}
      </button>
    </div>
  );
};

export default ButtonSeeMore;
