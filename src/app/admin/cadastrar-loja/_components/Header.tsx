import { HeaderCard } from '@/app/_ui';
import { BooleanSetter } from '@/types/types';
import React from 'react';

const css = {
  wrapper: `p-6 pt-5 mb-6 flex flex-col text-gray-600 font-medium bg-white card-styles`,
  wrapperButtons: `grid grid-cols-1 min-[480px]:grid-cols-2 gap-4`,
  title: ` tracking-wide text-gray-500/70 font-semibold`,
  button: `h-9 rounded-full  trans font-normal`,
  selected: `ring-style`,
  noSelected: `bg-gray-200/60 text-gray-500`,
};

const Header = ({
  seeAddresForm,
  setSeeAddresForm,
}: {
  seeAddresForm: boolean;
  setSeeAddresForm: BooleanSetter;
}) => {
  return (
    <div className={`${css.wrapper}`}>
      <HeaderCard
        title="Etapas"
        icon={seeAddresForm ? 'filter_2' : 'filter_1'}
        iconStyles=" font-medium!"
      />

      <div className={`${css.wrapperButtons}`}>
        <StepButton
          onClick={() => {
            setSeeAddresForm(false);
          }}
          isSelected={!seeAddresForm}>
          1º Informações gerais
        </StepButton>

        <StepButton
          onClick={() => {
            setSeeAddresForm(true);
          }}
          isSelected={seeAddresForm}>
          2º Endereço
        </StepButton>
      </div>
    </div>
  );
};

export default Header;

const StepButton = ({
  onClick,
  isSelected,
  children,
}: {
  onClick: () => void;
  isSelected: boolean;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={`${css.button} ${isSelected ? css.selected : css.noSelected}`}
      onClick={onClick}>
      {children}
    </button>
  );
};
