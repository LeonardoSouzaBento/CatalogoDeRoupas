'use client';
import { iconMd } from '@/app/css/lucideIconStyles';
import { BooleanSetter } from '@/types/types';
import { Mail } from 'lucide-react';
import { buttonStyles } from '../../../app/loja/login/page';

const ButtonLoginEmail = ({
  setSeeEmailForm,
}: {
  seeEmailForm: boolean;
  setSeeEmailForm: BooleanSetter;
}) => {
  return (
    <button
      className={`${buttonStyles} bg-gray-50 hover:bg-gray-200/80 trans`}
      onClick={() => {
        setSeeEmailForm(true);
      }}>
      <div className="wrapper-icon">
        <Mail {...iconMd} />
      </div>
      Login com email
    </button>
  );
};

export default ButtonLoginEmail;
