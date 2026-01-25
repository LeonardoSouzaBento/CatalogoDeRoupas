export interface AdminOption {
  name: string;
  url: string;
  icon: string;
  iconStyles: string;
}

export interface LinkOption {
  name: string;
  link: string;
  icon: string;
  iconStyles: string;
}

export interface OptionMenuSection {
  title: "Administrar" | "Navegue";
  options: AdminOption[] | LinkOption[];
}

const admOptions: AdminOption[] = [
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

const links: LinkOption[] = [
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

export const optionsMenu: OptionMenuSection[] = [
  { title: 'Administrar', options: admOptions },
  { title: 'Navegue', options: links },
];
