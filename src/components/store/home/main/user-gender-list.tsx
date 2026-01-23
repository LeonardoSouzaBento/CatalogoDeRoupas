import { UserContext } from '@/contexts/userContext';
import type { homeUserGender } from '@/types/types';
import React, { useContext, useState } from 'react';
import ChildGenderButtons from './user-gender-list/child-gender-buttons';
import { Button, ButtonsWrapper, MuiIcon } from '@/components/ui';

const userGenders = [
  { name: 'masculino', icon: 'man_2' },
  { name: 'feminino', icon: 'woman_2' },
];

const css = {
  container: `w-full h-auto max-w-220 m-auto flex-center items-end flex-col gap-4 
    sm:flex-row relative`,
  wrapper: 'h-max w-full px-3 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-3',
  button: `w-full gap-1 transition-colors duration-200 font-medium uppercase tracking-wide`,
  notSelected: 'border-gray-100 hover:bg-gray-200/50 border-transparent ',
  selected: 'bg-transparent border shadow-xs hover:bg-white ',
};

export const UserGenderList = (): React.ReactElement => {
  const { selectedGender, setSelectedGender, childCatSelected, setChildCatSelected } =
    useContext(UserContext);
  const [fastReturn, setFastReturn] = useState<string | null>('');

  function handleSelectGender(gender: homeUserGender) {
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
      <h6
        className={`max-w-none w-full text-center mb-2 uppercase
          large-text text-muted-foreground`}>
        Selecione um gênero
      </h6>
      <div className={css.container}>
        <ButtonsWrapper className={`${css.wrapper}`}>
          {userGenders.map((item) => {
            const selected = selectedGender === item.name && !childCatSelected;
            return (
              <div key={item.name}>
                <Button
                  variant={selected ? 'default' : 'outline'}
                  size={selected ? 'default' : 'outline'}
                  data-selected={selected}
                  onClick={() => {
                    handleSelectGender(item.name as homeUserGender);
                  }}
                  className={`${css.button} ${fastReturn === item.name && 'scale-106'}`}>
                  <MuiIcon icon={item.icon} size="2xl" />
                  {item.name}
                </Button>
              </div>
            );
          })}
          {/* botão infantil */}
          <div>
            <Button
              variant={childCatSelected ? 'default' : 'outline'}
              size={childCatSelected ? 'default' : 'outline'}
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
