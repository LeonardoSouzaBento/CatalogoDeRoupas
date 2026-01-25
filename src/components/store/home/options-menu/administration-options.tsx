import { Button, CustomLink, MuiIcon } from '@/components/ui';
import { HomeContext } from '@/contexts/index';
import { useContext } from 'react';

const optionButtons = [
  {
    name: 'Editar esta página',
    icon: 'edit',
    iconStyles: '',
  },
  {
    name: 'Adicionar Produto',
    url: '/admin/adicionar-produto',
    icon: 'add_circle',
    iconStyles: '',
  },
  {
    name: 'Atualizar Produtos',
    url: '/admin/atualizar-produto',
    icon: 'edit_note',
    iconStyles: '',
  },
  {
    name: 'Ver Favoritos Do Usúario',
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
          <MuiIcon icon={item.icon} />
          {item.name}
          {item.url && <CustomLink link={item.url} />}
        </Button>
      ))}
    </>
  );
};

export { AdministrationOptions };

