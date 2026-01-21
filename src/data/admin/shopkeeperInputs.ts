import type { ShopkeeperField } from '@/types/types';

export const shopkeeperInputs: ShopkeeperField[] = [
  {
    label: 'Nome pessoal',
    name: 'personalName',
    placeholder: 'Digite seu nome',
    maxLength: 60,
  },
  {
    label: 'Nome da loja',
    name: 'storeName',
    placeholder: 'Digite o nome fantasia',
    maxLength: 60,
  },
  {
    label: 'Email principal',
    name: 'email',
    placeholder: 'seuemail@email.com',
    maxLength: 50,
  },
  {
    label: 'Whatsapp',
    name: 'whatsapp',
    placeholder: 'XX XXXXX XXXX',
    maxLength: 20,
  },
  {
    label: 'Telefone',
    name: 'phone',
    placeholder: '(Opcional)',
    maxLength: 20,
  },
  {
    label: 'Nome da empresa',
    name: 'companyName',
    placeholder: 'Digite a razão social',
    maxLength: 60,
  },
  {
    label: 'CPF ou CNPJ',
    name: 'cpf',
    placeholder: 'Apenas números',
    maxLength: 14,
  },
];