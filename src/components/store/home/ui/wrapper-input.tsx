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
      <div className="min-h-13 min-w-full mb-5 flex justify-between items-center gap-2 border-b border-gray-200 rounded-none">
        <p className="">{title}</p>
        <CloseButton setState={setState} />
      </div>
      {children}
    </div>
  );
};
