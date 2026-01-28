import { Button, CustomLink, Icon, Input } from '@/components/ui';
import { Search } from 'lucide-react';

export const SearchButton = () => {
  return (
    <Button variant={'secondary'} size="lg" className="w-full px-0 mt-3 gap-3 justify-center">
      <Icon LucideIcon={Search} size="xl" className="text-primary-800" />
      <Input
        type="search"
        placeholder="O que você procura?"
        className={`flex-auto border-none leading-0! z-2 shadow-none p-0`}
      />
      <CustomLink link={'/loja/produto/'} />
    </Button>
  );
};
