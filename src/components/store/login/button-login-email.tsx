'use client';

import { Button, Icon } from '@/components/ui';
import { BooleanSetter } from '@/types/types';
import { Mail } from 'lucide-react';

const ButtonLoginEmail = ({
  setSeeEmailForm,
}: {
  seeEmailForm: boolean;
  setSeeEmailForm: BooleanSetter;
}) => {
  return (
    <Button
      onClick={() => {
        setSeeEmailForm(true);
      }}>
      <Icon LucideIcon={Mail} />
      Login com email
    </Button>
  );
};

export { ButtonLoginEmail };

