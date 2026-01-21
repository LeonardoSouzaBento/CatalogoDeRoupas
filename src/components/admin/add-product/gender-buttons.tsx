'use client';
import { HeaderCard } from '@/app/_ui';
import CardWrapper from '@/app/_ui/card-wrapper';
import { UserContext } from '@/contexts';
import { Genders } from '@/types/types';
import React, { useContext } from 'react';

const css = {
  wrapper: `flex flex-wrap gap-4`,
  button: `h-9 w-full min-[500px]:w-[calc(50%-6px)] max-w-52  br-50 j-center font-normal
  hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 5`,
  selected: ``,
  icon: `material-symbols-rounded font-[450]! !`,
};

const buttons: { label: string; value: Genders; icon?: string }[] = [
  { label: 'Masculino', value: 'masculino', icon: 'male' },
  { label: 'Feminino', value: 'feminino', icon: 'female' },
];

const GenderButtons = () => {
  const { selectedGender, setSelectedGender } = useContext(UserContext);

  return (
    <CardWrapper>
      <HeaderCard title="Gênero" icon="wc" iconStyles="mb-px font-light! " />
      <div className={css.wrapper}>
        {buttons.map(({ label, value }) => (
          <button
            key={value}
            className={`${css.button} ${selectedGender === value ? css.selected : ''}`}
            onClick={() => setSelectedGender(value)}>
            {label}
          </button>
        ))}
      </div>
    </CardWrapper>
  );
};

export { GenderButtons };
