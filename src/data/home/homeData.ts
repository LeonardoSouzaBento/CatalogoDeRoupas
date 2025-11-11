import type {
  HomeClothing,
  MainCategoriesType,
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
let globalId = 1;

function createClothingData(basePath: string, count = 4): HomeClothing[] {
  return Array.from({ length: count }, () => ({
    id: globalId++,
    name: "Lorem ipsum sit amet consec",
    price: 0,
    img1: `${basePath}/manequin.png`,
    img2: `${basePath}/busto.png`,
    alt: "Lorem ipsum sit amet consec",
  }));
}
/* Seleções especiais */
export const specialMensClothingData = createClothingData(
  "/shop/photos/male/specialSelections"
);

export const specialWomensClothingData = createClothingData(
  "/shop/photos/female/specialSelections"
);

export const specialGirlsClothingData = createClothingData(
  "/shop/photos/femaleChild/specialSelections"
);

export const specialBoysClothingData = createClothingData(
  "/shop/photos/maleChild/specialSelections"
);

/* do dia a dia */
export const everydayMensClothingData = createClothingData(
  "/shop/photos/male/specialSelections"
);

export const everydayWomensClothingData = createClothingData(
  "/shop/photos/female/specialSelections"
);

export const everydayGirlsClothingData = createClothingData(
  "/shop/photos/femaleChild/specialSelections"
);

export const everydayBoysClothingData = createClothingData(
  "/shop/photos/maleChild/specialSelections"
);

/* academia */
export const gymMensClothingData = createClothingData(
  "/shop/photos/male/specialSelections"
);

export const gymWomensClothingData = createClothingData(
  "/shop/photos/female/specialSelections"
);

/* Categorias especiais */

const pathMale = "/shop/photos/male/mainCategories/";
const pathFemale = "/shop/photos/female/mainCategories/";

export const defaultMainCategories: MainCategoriesType = {
  masculino: [
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
  feminino: [
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
};
