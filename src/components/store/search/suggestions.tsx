'use client';
import { Button, Icon } from '@/components/ui';
import { UserContext } from '@/contexts';
import { mostSearched } from '@/data/UserData';
import { Search } from 'lucide-react';
import { useContext, useState } from 'react';

export const Suggestions = () => {
  const { selectedGender } = useContext(UserContext);
  const suggestions =
    selectedGender === 'masculino' ? mostSearched.masculino : mostSearched.feminino;
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="h-max p-3 pt-2 border shadow-xs rounded-lg">
      <div className='relative'>
        <p className="mb-2 font-semibold tracking-wide">Buscas Frequentes:</p>
      </div>
      <div
        className={`max-w-max grid grid-cols-2 grid-rows-4 
        sm:grid-cols-3 sm:grid-rows-3 gap-3`}>
        {suggestions.map((item: string) => (
          <Button
            selected={selected === item}
            variant={'ghost'}
            size={'sm'}
            data-option
            key={item}
            className="justify-start"
            onClick={() => {
              setSelected(item);
            }}>
            <Icon LucideIcon={Search} />
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};
