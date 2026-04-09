import React from 'react';
import type { BooleanSetter } from '@/types/types';
import { CloseButton } from '@/components/ui';

interface WrapperFormProps {
  title: string;
  setState: BooleanSetter;
  children: React.ReactElement;
}

export const InputWrapper = ({
  title,
  children,
  setState,
}: WrapperFormProps): React.ReactElement => {
  return (
    <div className="w-full bg-light-bg">
      <div className="min-w-full mb-2 pt-1 flex justify-between items-center gap-2 rounded-none">
        <h6 className="text-primary-800">{title}</h6>
        <CloseButton setState={setState} className='-translate-y-1.5' />
      </div>
      {children}
    </div>
  );
};
