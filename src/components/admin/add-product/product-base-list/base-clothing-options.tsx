import { Icon } from '@/components/ui';
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
            data-option
            selected={selected}
            key={index}
            variant="ghost"
            className={`rounded-full px-6 transition-all duration-150 
            relative max-[400px]:w-full sm:min-w-60 ${selected && 'pr-13'}`}
            onClick={() => setSelectedName(item)}>
            {shortName}
            {selected && (
              <Button
                asChild
                size="icon-sm"
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedName('');
                }}
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full hover:shadow-lg">
                <div role="button" aria-roledescription="button" tabIndex={0}>
                  <Icon LucideIcon={X} className="text-destructive" />
                </div>
              </Button>
            )}
          </Button>
        );
      })}
    </div>
  );
};

export { BaseClothingOptions };
