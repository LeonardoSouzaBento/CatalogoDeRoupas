import type {
  SpecialClothing,
  MainCategoriesData,
  UserGenres,
} from "@/types/types";

/* Categorias de usuário */
//4 categorias
export const UserGenderData: UserGenres[] = [
  {
    name: "feminino",
    active: true,
  },
  {
    name: "masculino",
    active: true,
  },
  {
    name: "infantil",
    active: true,
  },
];

/* Roupas Selecionadas */

export const specialMensClothingData: SpecialClothing[] = [
  {
    id: 1,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/male/specialSelections/manequin.png",
    img2: "/shop/photos/male/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: 2,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/male/specialSelections/manequin.png",
    img2: "/shop/photos/male/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: 3,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/male/specialSelections/manequin.png",
    img2: "/shop/photos/male/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: 4,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/male/specialSelections/manequin.png",
    img2: "/shop/photos/male/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
];

export const specialWomensClothingData: SpecialClothing[] = [
  {
    id: 1,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/female/specialSelections/manequin.png",
    img2: "/shop/photos/female/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: 2,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/female/specialSelections/manequin.png",
    img2: "/shop/photos/female/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: 3,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/female/specialSelections/manequin.png",
    img2: "/shop/photos/female/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: 4,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/female/specialSelections/manequin.png",
    img2: "/shop/photos/female/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
];

export const specialGirlsClothingData: SpecialClothing[] = [
  {
    id: 1,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/femaleChild/specialSelections/manequin.png",
    img2: "/shop/photos/femaleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: 2,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/femaleChild/specialSelections/manequin.png",
    img2: "/shop/photos/femaleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: 3,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/femaleChild/specialSelections/manequin.png",
    img2: "/shop/photos/femaleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: 4,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/femaleChild/specialSelections/manequin.png",
    img2: "/shop/photos/femaleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
];

export const specialBoysClothingData: SpecialClothing[] = [
  {
    id: 1,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/maleChild/specialSelections/manequin.png",
    img2: "/shop/photos/maleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: 2,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/maleChild/specialSelections/manequin.png",
    img2: "/shop/photos/maleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: 3,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/maleChild/specialSelections/manequin.png",
    img2: "/shop/photos/maleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: 4,
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "/shop/photos/maleChild/specialSelections/manequin.png",
    img2: "/shop/photos/maleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
];

/* Categorias especiais */

const pathMale = "/shop/photos/male/mainCategories/";
const pathFemale = "/shop/photos/female/mainCategories/";

export const defaultMainCategoriesData: MainCategoriesData = {
  male: [
    {
      name: "Polos",
      file: "polos.png",
      alt: "Polos e camisetas masculinas",
    },
    {
      name: "Jeans & Calças",
      file: "jeans.png",
      alt: "Calças jeans e sociais masculinas",
    },
    {
      name: "Casual & Esporte",
      file: "casual.png",
      alt: "Roupas casuais masculinas",
    },
    { name: "Social", file: "social.png", alt: "Roupas sociais masculinas" },
  ].map((c, index) => ({ ...c, urlImg: pathMale + c.file, order: index })),
  female: [
    {
      name: "Vestidos & Saias",
      file: "vestidos.png",
      alt: "Vestidos e saias femininas",
    },
    {
      name: "Blusas & Camisetas",
      file: "blusas.png",
      alt: "Blusas e camisetas femininas",
    },
    {
      name: "Jeans & Calças",
      file: "jeans.png",
      alt: "Calças jeans femininas",
    },
    {
      name: "Social & Elegante",
      file: "social.png",
      alt: "Roupas sociais femininas",
    },
  ].map((c, index) => ({ ...c, urlImg: pathFemale + c.file, order: index })),
  femaleChild: [
    {
      name: "Polos",
      file: "polos.png",
      alt: "Polos e camisetas masculinas",
    },
    {
      name: "Jeans & Calças",
      file: "jeans.png",
      alt: "Calças jeans e sociais masculinas",
    },
    {
      name: "Casual & Esporte",
      file: "casual.png",
      alt: "Roupas casuais masculinas",
    },
    { name: "Social", file: "social.png", alt: "Roupas sociais masculinas" },
  ].map((c, index) => ({ ...c, urlImg: pathMale + c.file, order: index })),
  maleChild: [
    {
      name: "Polos",
      file: "polos.png",
      alt: "Polos e camisetas masculinas",
    },
    {
      name: "Jeans & Calças",
      file: "jeans.png",
      alt: "Calças jeans e sociais masculinas",
    },
    {
      name: "Casual & Esporte",
      file: "casual.png",
      alt: "Roupas casuais masculinas",
    },
    { name: "Social", file: "social.png", alt: "Roupas sociais masculinas" },
  ].map((c, index) => ({ ...c, urlImg: pathMale + c.file, order: index })),
};
