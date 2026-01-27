import { CardHeader, CardTitle, MuiIcon } from '@/components/ui';
import { BooleanSetter } from '@/types/types';
import React from 'react';

const css = {
  wrapper: `p-6 pt-5 mb-6 flex flex-col text-gray-600 font-medium bg-light-bg card-styles`,
  wrapperButtons: `grid grid-cols-1 min-[480px]:grid-cols-2 gap-4`,
  title: ` tracking-wide text-gray-500/70 font-semibold`,
  button: `h-9 rounded-full  transition-300 font-normal`,
  selected: ``,
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
      <CardHeader>
        <CardTitle>
          <MuiIcon icon={seeAddresForm ? 'filter_2' : 'filter_1'} />
          <h3>Etapas</h3>
        </CardTitle>
      </CardHeader>
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

export { Header };

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
