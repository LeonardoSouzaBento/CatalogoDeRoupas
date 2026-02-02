import Link from 'next/link';
import { Button, MuiIcon } from '@/components/ui';

const pageOptions = [
  {
    name: 'Meus favoritos',
    link: '/loja/favoritos',
    icon: 'favorite',
    iconStyles: '',
  },
  {
    name: 'Minha Conta',
    link: '/loja/minha-conta',
    icon: 'account_circle',
    iconStyles: 'ml-[0px] ',
  },
];

const Links = () => {
  return (
    <>
      {pageOptions.map((item) => (
        <Button variant="transparent" key={item.name} asChild>
          <Link href={item.link}>
            <MuiIcon icon={item.icon} fill className="text-theme" size="xl" />
            {item.name}
          </Link>
        </Button>
      ))}
    </>
  );
};

export { Links };
