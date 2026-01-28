import { AddressSchema } from './shared';

export interface Shopkeeper {
  personalName: string;
  storeName: string;
  companyName?: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  cpf: string;
  plan?: string;
  startDate?: string;
}

export interface ShopkeeperField {
  label: string;
  name: keyof Shopkeeper;
  placeholder: string;
  maxLength: number;
}

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

