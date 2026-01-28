import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ButtonProps {
  clothes: string[];
  selectedName: string;
  setSelectedName: (value: string) => void;
}

const BaseClothingOptions = ({ clothes, selectedName, setSelectedName }: ButtonProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {clothes.map((item, index) => {
        const shortName = item.split('–')[0].trim();
        const selected = selectedName === item;

        return (
          <Button
            key={index}
            variant={selected ? 'default' : 'outline'}
            className={`rounded-full px-6 transition-all duration-150 relative max-[400px]:w-full sm:min-w-60 ${selected ? 'pr-13' : ''}`}
            onClick={() => setSelectedName(item)}>
            {shortName}

            {selected && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedName('');
                }}
                className="size-8 absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-light-bg/60 hover:shadow-lg transition-all duration-300">
                <X size={16} strokeWidth={2.3} className="text-foreground" />
              </span>
            )}
          </Button>
        );
      })}
    </div>
  );
};

export { BaseClothingOptions };
