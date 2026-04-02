import { OptionsWrapper } from "@/components/admin/add-product/common/index";
import { Button } from "@/components/ui";
import { commonFabrics } from "@/data/clothings/commonFabrics";
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
  seeCommonFabrics: boolean;
  selectedMaterial: string | null;
  setSelectedMaterial: StateSetter<string | null>;
  filteredMaterials: string[];
  searchValue: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

export const Materials: React.FC<MaterialsProps> = ({
  seeCommonFabrics,
  selectedMaterial,
  setSelectedMaterial,
  filteredMaterials,
  searchValue,
  ref,
}) => {
  const materialsList = seeCommonFabrics ? Object.keys(commonFabrics) : materials;

  const bestCorrespondence = materialsList.reduce((best, current) => {
    return scoreMatch(current, searchValue) > scoreMatch(best, searchValue)
      ? current
      : best;
  }, materialsList[0]);

  return (
    <OptionsWrapper
      wrapperCss="p-5 pb-0 space-y-3"
      title="Selecione o material"
    >
      <div
        ref={ref}
        className={`flex flex-wrap gap-4 overflow-y-scroll h-[160px] relative ${seeCommonFabrics && "ring ring-blue-300 p-0.5 pb-0"}`}
      >
        {materialsList.map((material) => {
          const isFiltered = filteredMaterials.includes(material);
          const hasCorrespondence =
            bestCorrespondence === material &&
            searchValue.length > 0 &&
            searchValue !== "Procurar material";
          return (
            <Button
              data-option
              key={material}
              variant="ghost"
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
          className="block h-5 w-full z-0 sticky bottom-0 left-0
    bg-linear-to-t from-white to-transparent rounded-none"
        />
      </div>
    </OptionsWrapper>
  );
};