import type {
  SpecialSelectionSchema,
  MainCategoriesData,
  UserCategory,
} from "@src/types/types";

/* Categorias de usuário */
//4 categorias
export const defaultUserCategoriesData: UserCategory[] = [
  {
    name: "feminino",
    variable: "feminino",
    img: "./photos/female/female-category.jpg",
    active: true,
  },
  {
    name: "masculino",
    variable: "masculino",
    img: "./photos/male/male-category.png",
    active: true,
  },
  {
    name: "infantil",
    variable: "menino",
    img: "./photos/maleChild/male-child.png",
    active: true,
  }
];

/* Roupas Masculinas Selecionadas */

export const defaultMensSpecialSelections: SpecialSelectionSchema[] = [
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/male/specialSelections/manequin.png",
    img2: "./photos/male/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/male/specialSelections/manequin.png",
    img2: "./photos/male/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/male/specialSelections/manequin.png",
    img2: "./photos/male/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/male/specialSelections/manequin.png",
    img2: "./photos/male/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
];

/* Roupas Femininas Selecionadas */

export const defaultFemaleSpecialSelections: SpecialSelectionSchema[] = [
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/female/specialSelections/manequin.png",
    img2: "./photos/female/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/female/specialSelections/manequin.png",
    img2: "./photos/female/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/female/specialSelections/manequin.png",
    img2: "./photos/female/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/female/specialSelections/manequin.png",
    img2: "./photos/female/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
];

export const defaultFChildSpecialSelections: SpecialSelectionSchema[] = [
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/femaleChild/specialSelections/manequin.png",
    img2: "./photos/femaleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/femaleChild/specialSelections/manequin.png",
    img2: "./photos/femaleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/femaleChild/specialSelections/manequin.png",
    img2: "./photos/femaleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/femaleChild/specialSelections/manequin.png",
    img2: "./photos/femaleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
];

export const defaultMChildSpecialSelections: SpecialSelectionSchema[] = [
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/maleChild/specialSelections/manequin.png",
    img2: "./photos/maleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/maleChild/specialSelections/manequin.png",
    img2: "./photos/maleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/maleChild/specialSelections/manequin.png",
    img2: "./photos/maleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing",
    price: 0,
    img1: "./photos/maleChild/specialSelections/manequin.png",
    img2: "./photos/maleChild/specialSelections/busto.png",
    alt: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
];

/* Categorias especiais */

const pathMale = "/photos/male/mainCategories/";
const pathFemale = "/photos/female/mainCategories/";

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
