import { MuiIcon } from '@/components/ui';
import React from 'react';

export const NoClothesAlert = () => {
  return (
    <div
      className={`max-w-max p-4 px-6 flex items-center justify-center gap-2 round-md bg-neutral-50`}>
      <p>Não há roupas ou outros produtos curtidos por você.</p>
      <MuiIcon icon="heart_broken" className="text-female rotate-10" size="lg" />
    </div>
  );
};
