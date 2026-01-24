import { Button, CustomLink, Icon, Input } from '@/components/ui';
import { Search } from 'lucide-react';

export const SearchButton = () => {
  return (
    <div className="px-2">
      <div
        className={`h-11 w-full pl-4 pr-0 flex items-center gap-2 round-md hover:bg-neutral-200/70 bg-neutral-100`}>
        <Input type="search" placeholder="O que você procura?" className={`flex-auto`} />
        <Button variant={'transparent'} size="icon" className="absolute right-2 top-2">
          <Icon LucideIcon={Search} />
          <CustomLink link={'/loja/produto/'} />
        </Button>
      </div>
    </div>
  );
};
