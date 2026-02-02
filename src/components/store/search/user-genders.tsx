'use client';
import { ButtonsWrapper, CloseButton, MuiIcon } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/contexts/userContext_';
import { genders } from '@/types/types';
import { useContext } from 'react';

export const UserGenders = () => {
  const { selectedGender, setSelectedGender, childCatSelected, setChildCatSelected } =
    useContext(UserContext);

  return (
    <div className={`border rounded-lg p-3 pt-2`}>
      <p className="mb-1 font-semibold tracking-wide">Gênero:</p>
      <ButtonsWrapper>
        {genders.map((gender) => (
          <Button
            size={'sm'}
            key={gender}
            onClick={() => {
              if (selectedGender !== gender) {
                setSelectedGender(gender);
              }
            }}
            variant={selectedGender === gender ? 'default' : 'outline'}>
            {gender}
          </Button>
        ))}
        <div className="flex-center h-max gap-2">
          <Button
            size={'sm'}
            variant={'ghost'}
            selected={childCatSelected}
            onClick={() => {
              setChildCatSelected(!childCatSelected);
            }}>
            <MuiIcon
              size="xl"
              icon={childCatSelected ? 'check_box' : 'check_box_outline_blank'}
              fill={childCatSelected ? true : false}
            />
            Infantil
          </Button>
          {childCatSelected && (
            <CloseButton
              size="icon-sm"
              iconSize="sm"
              setState={setChildCatSelected}
              className="text-red-800"
            />
          )}
        </div>
      </ButtonsWrapper>
    </div>
  );
};
