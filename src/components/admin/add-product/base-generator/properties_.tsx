'use client';
import { ChevronDown } from 'lucide-react';

import type { ClothingProperty, StateSetter } from '@/types/types';
import { Button } from '@/components/ui/button';
import { ButtonsWrapper } from '@/components/ui';

const css = {
  wrapper: `
    flex flex-wrap gap-4 mt-0.5 mb-[20.1px] border p-5 py-5.5
  `,
  button: `5 rounded-full relative  gap-0 font-normal pl-5 
  pr-0 text-gray-700 hover:bg-gray-100 transition-all 
  duration-150 border border-transparent
  `,
};

interface Props {
  properties: ClothingProperty[];
  propSelected: string | null;
  setPropSelected: StateSetter<string | null>;
}

const Properties = ({ properties, propSelected, setPropSelected }: Props) => {
  return (
    <ButtonsWrapper className="mb-5">
      {properties.slice(0, -1).map((item) => (
        <Button
          key={item.name}
          variant={propSelected === item.name ? 'default' : 'outline'}
          onClick={() => {
            setPropSelected(item.name);
          }}>
          {item.name}
          <ChevronDown />
        </Button>
      ))}
    </ButtonsWrapper>
  );
};

export { Properties };
