import { femaleCatsSubcats } from "./femaleCatsSubcats";
import { maleCatsSubcats } from "./maleCatsSubcats";

interface CatSubcats {
  [categoryName: string]: string[];
}

interface ClothingCatsSubcats {
  masculino: CatSubcats;
  feminino: CatSubcats;
}

export const clothingCatsSubcats: ClothingCatsSubcats = {
  masculino: maleCatsSubcats,
  feminino: femaleCatsSubcats
};
