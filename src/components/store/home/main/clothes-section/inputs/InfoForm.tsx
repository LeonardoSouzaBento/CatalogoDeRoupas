import SaveButton from '@/app/_ui/SaveButton';
import { Input } from '@/components/ui';
import React from 'react';

const css = {
  wrapper: `w-full flex flex-col items-start gap-3 mb-5`,
  wrapperInput: `w-full flex flex-col items-start gap-2`,
  button: 'button min-w-9 !h-9 !px-0 flex-center mr-0',
  wrapperButton: 'w-full flex justify-end',
  saveButton: 'button w-full !justify-center',
  label: ' font-medium',
};

const InfoForm = ({ id }: { id: number | string }): React.ReactElement => {
  return (
    <div className="w-full">
      <form className={`${css.wrapper}`}>
        <div className={`${css.wrapperInput}`}>
          <label htmlFor={`nome ${id}`} className={`${css.label}`}>
            Nome
          </label>
          <Input type="text" id={`nome ${id}`} placeholder="Digite o nome" />
        </div>
        <div className={`${css.wrapperInput}`}>
          <label htmlFor={`price ${id}`} className={`${css.label}`}>
            Preço
          </label>
          <Input type="text" id={`price ${id}`} placeholder="Ex.: 80" />
        </div>
      </form>

      <SaveButton />
    </div>
  );
};

export default InfoForm;
