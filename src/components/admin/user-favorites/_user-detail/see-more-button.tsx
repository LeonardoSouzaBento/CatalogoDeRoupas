import { BooleanSetter } from '@/types/types';

import { Button } from '@/components/ui';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SeeMoreButton = ({
  seeMoreUserInfo,
  setSeeMoreUserInfo,
}: {
  seeMoreUserInfo: boolean;
  setSeeMoreUserInfo: BooleanSetter;
}) => {
  return (
    <div className={`w-full flex justify-start`}>
      <Button size={'icon'} onClick={() => setSeeMoreUserInfo(!seeMoreUserInfo)}>
        {seeMoreUserInfo ? (
          <>
            Ver Menos
            <ChevronUp />
          </>
        ) : (
          <>
            Ver Mais
            <ChevronDown />
          </>
        )}
      </Button>
    </div>
  );
};

export { SeeMoreButton };
