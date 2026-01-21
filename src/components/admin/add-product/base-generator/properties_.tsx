'use client';
import { ChevronDown } from 'lucide-react';

import { ClothingProperty, StateSetter } from '@/types/types';
import { Button } from '@/components/ui/button';
import WrapperButtons from '@/app/admin/_ui/wrapper-buttons';

const css = {
  wrapper: `
    flex flex-wrap gap-4 mt-0.5 mb-[20.1px] border p-5 py-5.5
  `,
  button: `5 br-50 relative  gap-0 font-normal pl-5 
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
    <WrapperButtons styles="mb-5 bs">
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
    </WrapperButtons>
  );
};

export { Properties };
