'use client';
import { ButtonsWrapper, Checkbox, Field } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/contexts/userContext_';
import { genders } from '@/types/types';
import { useContext, useState } from 'react';

const css = {
  wrapper: `rounded-none py-4 space-y-2`,
  selected: `border bg-light-bg hover:shadow-sm hover:bg-light-bg `,
  button: `h-10 max-[375px]:min-w-1/2 min-[375px]:min-w-none flex-center bg-gray-50 hover:bg-gray-100 font-normal`,
};

export const UserGenders = () => {
  const { selectedGender, setSelectedGender, childCatSelected, setChildCatSelected } =
    useContext(UserContext);
  const [childChecked, setChildChecked] = useState(false);

  return (
    <div className={`px-2`}>
      <div className={`${css.wrapper}`}>
        <p>Gênero:</p>
        <ButtonsWrapper>
          {genders.map((gender) => (
            <Button
              onClick={() => {
                if (selectedGender !== gender) {
                  setSelectedGender(gender);
                }
              }}
              variant={selectedGender === gender ? 'default' : 'outline'}>
              {gender}
            </Button>
          ))}
          <Button
            variant={'ghost'}
            onClick={() => {
              setChildChecked(!childChecked);
              setChildCatSelected(!childCatSelected);
            }}>
            <Field orientation="horizontal" className="p-0! h-3">
              <Checkbox
                id="for-child"
                name="for-child"
                checked={childChecked}
                onCheckedChange={() => {
                  setChildChecked(!childChecked);
                }}
              />
            </Field>
            Infantil
          </Button>
        </ButtonsWrapper>
      </div>
    </div>
  );
};
