import Link from 'next/link';
import { Button, MuiIcon } from '@/components/ui';
import { HomeContext } from '@/contexts/index';
import { useContext } from 'react';

const optionButtons = [
  {
    name: 'editar esta página',
    icon: 'edit',
    iconStyles: '',
    setEditMode: true,
  },
  {
    name: 'adicionar produto',
    url: '/admin/adicionar-produto',
    icon: 'add_circle',
    iconStyles: '',
  },
  {
    name: 'atualizar produtos',
    url: '/admin/atualizar-produto',
    icon: 'edit_note',
    iconStyles: '',
  },
  {
    name: 'ver favoritos do usuário',
    url: '/admin/favoritos-do-usuario',
    icon: 'favorite',
    iconStyles: '',
  },
];

const AdministrationOptions = () => {
  const { setHomeEditMode } = useContext(HomeContext);

  return (
    <>
      {optionButtons.map((item) =>
        item.url ? (
          <Button variant="transparent" key={item.name} asChild>
            <Link href={item.url}>
              <MuiIcon
                icon={item.icon}
                fill
                className="text-theme"
                size={item.name === 'atualizar produtos' ? '3xl' : 'xl'}
              />
              {item.name}
            </Link>
          </Button>
        ) : (
          <Button
            variant="transparent"
            key={item.name}
            onClick={() => item.setEditMode && setHomeEditMode(true)}>
            <MuiIcon
              icon={item.icon}
              fill
              className="text-theme"
              size={item.name === 'atualizar produtos' ? '3xl' : 'xl'}
            />
            {item.name}
          </Button>
        ),
      )}
    </>
  );
};

export { AdministrationOptions };
