import { Button } from '@/components/ui';
import { UserContext } from '@/contexts/userContext_';
import type { Gender } from '@/types/types';
import React, { useContext, useEffect, useState } from 'react';


const ChildGenderButtons = () => {
  const { selectedGender, setSelectedGender, childCatSelected, setChildCatSelected } =
    useContext(UserContext);
  const [visible, setVisible] = useState<boolean>(false);

  const handleGenderClick = (e: React.MouseEvent<HTMLButtonElement>, gender: Gender) => {
    e.stopPropagation();
    if (selectedGender !== gender) setSelectedGender(gender);
    if (!childCatSelected) setChildCatSelected(true);
  };

  useEffect(() => {
    if (childCatSelected) {
      setTimeout(() => {
        setVisible(true);
      }, 250);
    }
  }, [childCatSelected]);

  return (
    <>
      <Button
        size={'icon-lg'}
        variant={selectedGender === 'masculino' ? 'default' : 'ghost'}
        onClick={(e) => handleGenderClick(e, 'masculino' as Gender)}>
        M
      </Button>
      <Button
        size={'icon-lg'}
        variant={selectedGender === 'feminino' ? 'default' : 'ghost'}
        onClick={(e) => handleGenderClick(e, 'feminino' as Gender)}>
        F
      </Button>
    </>
  );
};

export { ChildGenderButtons };

