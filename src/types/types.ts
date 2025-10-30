import React, { Dispatch, SetStateAction } from "react";

export type BooleanSetter = Dispatch<SetStateAction<boolean>>;
export type StateSetter<T> = Dispatch<SetStateAction<T>>;

export interface ProviderType {
  children: React.ReactNode;
}

export type GenderKey = "masculino" | "feminino" | "infantil";

export interface UserGenres {
  name: GenderKey;
  active: boolean;
}

export type ChildrensGenre = "masculino" | "feminino" | "unisex";


/* Item de seleções especiais */
export interface SpecialClothing {
  id: number;
  name: string;
  price: number;
  img1: string;
  img2: string;
  alt?: string;
}
export interface SpecialSelectionItem {
  item: SpecialClothing;
}

/* Protuto */
export interface ProductSchema {
  id: number;
  name: string;
  price: number;
  img1: string;
  altImg1: string;
  img2?: string;
  altImg2: string;
  img3?: string;
  altImg3: string;
  img4?: string;
  altImg4: string;
  img5?: string;
  altImg5: string;
  img6?: string;
  altImg6: string;
}
export interface ProductItem {
  item: ProductSchema;
}


/* Usuário */
export interface UserData {
  name: string;
  email: string;
  sex: string;
  position: string;
  favorites?: [""];
  camisa?: string;
  calça?: string | number;
  calçado?: number;
}

export interface AddressSchema  {
  rua: string;
  número: number | "";
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
};

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

export interface MainCategoriesData {
  male: MainCategory[];
  female: MainCategory[];
  maleChild: MainCategory[];
  femaleChild: MainCategory[];
}
