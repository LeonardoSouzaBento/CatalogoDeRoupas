import React, { Dispatch, SetStateAction } from 'react';

export type BooleanSetter = Dispatch<SetStateAction<boolean>>;
export type StateSetter<T> = Dispatch<SetStateAction<T>>;

export interface ProviderType {
  children: React.ReactNode;
}

export type Gender = 'masculino' | 'feminino' | 'unisex';
export const genders: Gender[] = ['masculino', 'feminino'];

export type HomepageUserGender = 'masculino' | 'feminino' | 'infantil';

export interface UserGenres {
  name: HomepageUserGender;
  active: boolean;
}

/* Item de seleções especiais */
export interface HomeClothing {
  id: number | string;
  name: string;
  price: number;
  img1: string;
  img2: string;
  alt?: string;
}

export interface SpecialSelectionItem {
  item: HomeClothing;
}

export interface ClothingProperty {
  name: string;
  options?: string[];
}

/* subtipos */

interface Composition {
  material: string;
  percentage: number;
}

interface Image {
  url: string;
  alt: string;
}

/* Roupa */
export interface Clothing {
  id: number;
  //
  category: string;
  name: string;
  price: number;
  brand: string;
  mainColor: string;
  age?: number;
  difference?: string;
  //
  images: Image[];
  size: string | number;
  composition: Composition[];
  availableSizes: (string | number)[];
  description?: string;
  colors?: string[]; // no caso de camisetas listradas ou xadrez
}

export interface ClothingItem {
  item: Clothing;
}

export interface BasicClothingInformation {
  gender: Gender;
  cat: string;
  subcat: string;
  pattern: string;
  modeling: string;
  name: string;
  print: string;
  is_childish: string;
}

export const mappingPropToKey: Record<string, keyof BasicClothingInformation> = {
  Gênero: 'gender',
  Categoria: 'cat',
  Subcategoria: 'subcat',
  Padrão: 'pattern',
  Estampa: 'print',
  Nome: 'name',
  'É Infantil': 'is_childish',
};

export interface Photo {
  id: string;
  url: string;
  alt: string;
  order: number;
}

export type UserSex = 'masculino' | 'feminino';

/* Usuário */
export interface UserData {
  name: string;
  email: string;
  sex: UserSex;
  position: string;
  favorites?: [''];
  camisa?: string;
  calça?: string | number;
  calçado?: number;
}

/* Lojista */

export interface Shopkeeper {
  personalName: string;
  storeName: string;
  companyName?: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  cpf: string;
  plan?: string; // nome do plano
  startDate?: string;
}

export interface ShopkeeperField {
  label: string;
  name: keyof Shopkeeper;
  placeholder: string;
  maxLength: number;
}

export interface AddressSchema {
  rua: string;
  número: number | '';
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
}

/* Loja */
export interface ShopInfo {
  name: string;
  address: AddressSchema;
  contact: string;
  aboutText: string[];
  urlMap: string;
}

export interface MainCategory {
  name: string;
  file: string;
  alt: string;
  urlImg: string;
  order: number;
}

export interface MainCategoriesType {
  masculino: MainCategory[];
  feminino: MainCategory[];
}
