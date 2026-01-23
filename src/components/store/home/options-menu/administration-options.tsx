import { Button, CustomLink, MuiIcon, Separator } from '@/components/ui';
import { HomeContext } from '@/contexts/index';
import { useContext } from 'react';
import { TitleButtonGroup } from './title-button-group';

const optionButtons = [
  {
    name: 'Adicionar Produto',
    url: '/admin/adicionar-produto',
    icon: 'add_circle',
    iconStyles: 'ml-[0.5px]  rotate-180 -scale-x-100',
  },
  {
    name: 'Atualizar Produtos',
    url: '/admin/atualizar-produto',
    icon: 'edit_note',
    iconStyles: '-ml-[2px]',
  },
  {
    name: 'Ver Favoritos Do Usúario',
    url: '/admin/favoritos-do-usuario',
    icon: 'favorite',
    iconStyles: ' -ml-0',
  },
];

const AdministrationOptions = () => {
  const { setHomeEditMode } = useContext(HomeContext);

  return (
    <div>
      <TitleButtonGroup title="Administrar" />

      <div className="px-0 flex flex-col items-start gap-2">
        <Button
          onClick={() => {
            setHomeEditMode(true);
          }}>
          <MuiIcon icon="edit" />
          Editar esta página
        </Button>
        {optionButtons.map((item) => (
          <Button key={item.name}>
            <MuiIcon icon={item.icon} />
            {item.name}
            <CustomLink link={item.url} />
          </Button>
        ))}
      </div>
      <Separator />
    </div>
  );
};

export default AdministrationOptions;
