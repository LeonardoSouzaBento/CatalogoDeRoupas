import { Button, CustomLink, MuiIcon } from '@/components/ui';

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
        <Button variant="transparent" key={item.name}>
          <MuiIcon icon={item.icon} fill={1} className="text-female" size="xl" />
          {item.name}
          <CustomLink link={item.link} />
        </Button>
      ))}
    </>
  );
};

export { Links };

