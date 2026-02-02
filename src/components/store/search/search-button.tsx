import { Button, Icon, Input } from '@/components/ui';
import { Search } from 'lucide-react';
import Link from 'next/link';

export const SearchButton = () => {
  return (
    <Button
      asChild
      variant={'secondary'}
      size="lg"
      className="w-full mt-3 gap-3 justify-center">
      <Link href={'/loja/produto/'}>
        <Icon LucideIcon={Search} size="xl" className="text-muted-foreground" />
        <Input
          type="search"
          placeholder="O que você procura?"
          className={`flex-auto border-none leading-0! z-2 shadow-none p-0`}
        />
      </Link>
    </Button>
  );
};
