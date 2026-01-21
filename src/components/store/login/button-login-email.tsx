'use client';

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
      <Mail  />
      Login com email
    </button>
  );
};

export default ButtonLoginEmail;
