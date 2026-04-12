import { Button, ButtonsWrapper } from "@/components/ui";
import { materials } from "@/data/clothings/materials";
import type { StateSetter } from "@/types";

function scoreMatch(item: string, search: string) {
  item = item.toLowerCase();
  search = search.toLowerCase();

  let score = 0;
  for (const char of search) {
    if (item.includes(char)) score++;
  }
  return score;
}

interface MaterialsProps {
  selectedMaterial: string | null;
  setSelectedMaterial: StateSetter<string | null>;
  filteredMaterials: string[];
  searchValue: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

export const MaterialsList: React.FC<MaterialsProps> = ({
  selectedMaterial,
  setSelectedMaterial,
  filteredMaterials,
  searchValue,
  ref,
}) => {
  const bestCorrespondence = materials.reduce((best, current) => {
    return scoreMatch(current, searchValue) > scoreMatch(best, searchValue)
      ? current
      : best;
  }, materials[0]);

  return (
    <ButtonsWrapper ref={ref} className={`overflow-y-scroll h-36 relative`}>
      {materials.map((material) => {
        const isFiltered = filteredMaterials.includes(material);
        const hasCorrespondence =
          bestCorrespondence === material &&
          searchValue.length > 0 &&
          searchValue !== "Procurar material";
        return (
          <Button
            data-option
            key={material}
            variant="transparent"
            onClick={() => setSelectedMaterial(material)}
            data-selected={selectedMaterial === material}
            className={`
                hover:bg-blue-100/50
                hover:text-blue-600 hover:border-blue-400 ${isFiltered && "-order-1"} ${
                  hasCorrespondence && "text-blue-600 shadow-sm"
                }`}
          >
            {material}
          </Button>
        );
      })}
      <div
        className="block h-15 -mt-9 w-full z-2 sticky bottom-0 left-0
    bg-linear-to-t from-light-bg to-transparent rounded-none"
      />
    </ButtonsWrapper>
  );
};
