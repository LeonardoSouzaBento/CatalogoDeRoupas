export interface Image {
  url: string;
  alt: string;
}

export interface Photo {
  id: string;
  url: string;
  alt: string;
  order: number;
}

export interface Composition {
  material: string;
  percentage: number;
}

export interface ProductMeasure {
  type?: string;
  value?: string | number;
}

export interface Clothing {
  id: number;
  category: string;
  name: string;
  price: number;
  brand: string;
  mainColor: string;
  age?: number;
  difference?: string;

  images: Image[];
  size: string | number;
  composition: Composition[];
  availableSizes: (string | number)[];
  description?: string;
  colors?: string[];
}

export interface ClothingItem {
  item: Clothing;
}

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
