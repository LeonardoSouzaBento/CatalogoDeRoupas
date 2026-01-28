import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle, MuiIcon } from '@/components/ui';
import type { BooleanSetter } from '@/types/types';
import React from 'react';

const css = {
  wrapper: `p-6 pt-5 mb-6 flex flex-col text-gray-600 font-medium bg-light-bg card-styles`,
  wrapperButtons: `grid grid-cols-1 min-[480px]:grid-cols-2 gap-4`,
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
    <Button
      variant={isSelected ? 'default' : 'secondary'}
      className="h-9 rounded-full font-normal"
      onClick={onClick}>
      {children}
    </Button>
  );
};
