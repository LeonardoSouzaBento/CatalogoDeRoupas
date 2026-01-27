import { Button, ButtonsWrapper, MuiIcon } from '@/components/ui';
import { UserContext } from '@/contexts/userContext_';
import type { HomepageUserGender } from '@/types/types';
import React, { useContext, useState } from 'react';
import { ChildGenderButtons } from './user-gender-list/child-gender-buttons';

const userGenders = [
  { name: 'masculino', icon: 'man_2' },
  { name: 'feminino', icon: 'woman_2' },
];

const css = {
  wrapper: `w-full max-w-3xl h-max mx-auto px-4 sm:px-6 relative`,
  button: `gap-1 flex-auto transition-200 uppercase tracking-wide`,
};

export const UserGenderList = (): React.ReactElement => {
  const { selectedGender, setSelectedGender, childCatSelected, setChildCatSelected } =
    useContext(UserContext);
  const [fastReturn, setFastReturn] = useState<string | null>('');

  function handleSelectGender(gender: HomepageUserGender) {
    if (gender == 'masculino' || gender === 'feminino') {
      setChildCatSelected(false);
      setSelectedGender(gender);
    }
    if (gender === 'infantil') {
      setChildCatSelected(true);
    }

    setFastReturn(gender);
    setTimeout(() => {
      setFastReturn(null);
    }, 300);
  }

  return (
    <div>
      <p
        className={`max-w-none w-full text-center mb-2 uppercase
          large-text text-muted-foreground`}>
        Selecione um gênero
      </p>
      <div className={css.wrapper}>
        <ButtonsWrapper className={`grid grid-cols-1 sm:grid-cols-3`}>
          {userGenders.map((item) => {
            const selected = selectedGender === item.name && !childCatSelected;
            return (
              <Button
                key={item.name}
                variant={selected ? 'default' : 'ghost'}
                size={selected ? 'default' : 'ghost'}
                data-selected={selected}
                onClick={() => {
                  handleSelectGender(item.name as HomepageUserGender);
                }}
                className={`${css.button} w-full ${fastReturn === item.name && 'scale-106'}`}>
                <MuiIcon icon={item.icon} size="2xl" />
                {item.name}
              </Button>
            );
          })}
          <div
            style={{
              gridTemplateColumns: childCatSelected ? '1fr max-content max-content' : 'auto',
            }}
            className={`w-full grid gap-2`}>
            <Button
              variant={childCatSelected ? 'default' : 'ghost'}
              size={'default'}
              data-selected={childCatSelected}
              onClick={() => {
                handleSelectGender('infantil');
              }}
              className={`${css.button} ${fastReturn === 'infantil' && 'scale-106'}`}>
              <MuiIcon icon="boy" size="2xl" />
              infantil
            </Button>
            {childCatSelected && <ChildGenderButtons />}
          </div>
        </ButtonsWrapper>
      </div>
    </div>
  );
};
