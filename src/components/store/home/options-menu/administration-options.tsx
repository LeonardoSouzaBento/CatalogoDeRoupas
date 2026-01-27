import { Button, CustomLink, MuiIcon } from '@/components/ui';
import { HomeContext } from '@/contexts/index';
import { useContext } from 'react';

const optionButtons = [
  {
    name: 'editar esta página',
    icon: 'edit',
    iconStyles: '',
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
      {optionButtons.map((item) => (
        <Button
          variant="transparent"
          key={item.name}
          onClick={() => (item.url ? null : setHomeEditMode(true))}>
          <MuiIcon
            icon={item.icon}
            fill={1}
            className="text-theme"
            size={item.name === 'atualizar produtos' ? '3xl' : 'xl'}
          />
          {item.name}
          {item.url && <CustomLink link={item.url} />}
        </Button>
      ))}
    </>
  );
};

export { AdministrationOptions };
