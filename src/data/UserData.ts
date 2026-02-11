import type { HomePageUserGender, UserData } from '@/types/types';

export const defaultUserData: UserData = {
  nome: 'Meu Nome Sobrenome',
  email: 'meuemail@email.com',
  sexo: 'masculino',
  posição: 'user',
  camisa: 'M',
  calça: 40,
  calçado: 40,
  favoritos: [''],
}; 

export const homeUserGenders: HomePageUserGender[] = ['masculino', 'feminino', 'infantil'];

export const filterUserGenders = [
  'masculino',
  'feminino',
  'infantil - masculino',
  'infantil - feminino',
];

export const mostSearched = {
  masculino: [
    'Camisa Básica',
    'Camisa Polo',
    'Short Jeans',
    'Calça Jeans',
    'Regata',
    'Cueca',
    'Meia',
  ],
  feminino: [
    'Camisa Básica',
    'Short Jeans',
    'Calça Jeans',
    'Vestido Casual',
    'Saia',
    'Regata',
    'Calça Legging',
  ],
  infantil: [
    'Conjunto Infantil (2 ou 3 peças)', // Item de alta praticidade e venda
    'Pijama Infantil', // Essencial e com alta rotatividade
    'Camiseta Estampada/Temática', // Peça básica com apelo visual
    'Calça de Moletom', // Conforto e versatilidade
    'Calça Básica',
    'Meia',
    'Short/Bermuda',
    'Agasalho/Abrigo',
  ],
};
