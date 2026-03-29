"use client";
import { WrapperOptions } from "@/components/admin/ui/wrapper-options";
import { CloseButton, Icon, Input, ButtonsWrapper } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { commonFabrics } from "@/data/clothings/commonFabrics";
import { materials } from "@/data/clothings/materials";
import type { StateSetter } from "@/types/types";
import { Eye, Plus, Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

/* ---------------- de material---------------- */
interface MaterialProps {
  selectedMaterial: string | null;
  setSelectedMaterial: StateSetter<string | null>;
  setShow: StateSetter<boolean>;
}

const Material: React.FC<MaterialProps> = ({
  selectedMaterial,
  setSelectedMaterial,
  setShow,
}) => {
  const css = {
    container: `p-5 pt-0`,
    wrapper: `h-10 bg-gray-50 relative flex justify-between items-center`,
    addMaterial: "w-full",
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <Input
          type="text"
          placeholder="Digite o material"
          value={selectedMaterial || ""}
          onChange={(e) => setSelectedMaterial(e.target.value)}
        />

        <CloseButton setState={setShow} className="relative" />
      </div>
    </div>
  );
};

/* ----------------materiais---------------- */

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

const Materials: React.FC<MaterialsProps> = ({
  seeCommonFabrics,
  selectedMaterial,
  setSelectedMaterial,
  filteredMaterials,
  searchValue,
  ref,
}) => {
  const css = {
    container: `p-5 pb-0 space-y-3`,
    ButtonsWrapper: `flex flex-wrap gap-4 overflow-y-scroll h-[160px] relative`,
    selected: `bg-gray-200`,
    title: ` font-medium mb-3 uppercase text-blue-600 tracking-wide`,
    notSelected: `bg-gray-100`,
    addMaterial: `bg-gray-100`,
    after: `block h-5 w-full z-0 sticky bottom-0 left-0
    bg-linear-to-t from-white to-transparent rounded-none`,
  };

  const materialsList = seeCommonFabrics
    ? Object.keys(commonFabrics)
    : materials;

  const bestCorrespondence = materialsList.reduce((best, current) => {
    return scoreMatch(current, searchValue) > scoreMatch(best, searchValue)
      ? current
      : best;
  }, materialsList[0]);

  return (
    <WrapperOptions wrapperCss={css.container} title="Selecione o material">
      <div
        ref={ref}
        className={`${css.ButtonsWrapper} ${seeCommonFabrics && "ring ring-blue-300 p-0.5 pb-0"}`}
      >
        {materialsList.map((material) => {
          const isFiltered = filteredMaterials.includes(material);
          const hasCorrespondence =
            bestCorrespondence === material &&
            searchValue.length > 0 &&
            searchValue !== "Procurar material";
          return (
            <Button
              key={material}
              variant="outline"
              onClick={() => setSelectedMaterial(material)}
              data-selected={selectedMaterial === material}
              className={` hover:bg-blue-50
                hover:bg-blue-100/50
                hover:text-blue-600 hover:border-blue-400 ${isFiltered && "-order-1"} ${
                  hasCorrespondence && "text-blue-600 shadow-sm"
                }`}
            >
              {material}
            </Button>
          );
        })}
        <div className={css.after} />
      </div>
    </WrapperOptions>
  );
};

/* ----------------search material---------------- */
const SearchMaterial = ({
  searchValue,
  setSearchValue,
  setFilteredMaterials,
  setSearchButtonClicked,
}: {
  searchValue: string;
  setSearchValue: StateSetter<string>;
  setFilteredMaterials: StateSetter<string[]>;
  setSearchButtonClicked: StateSetter<number>;
}) => {
  const css = {
    wrapper: `h-10 box-content flex items-center relative
    crop focus-within:border focus-within:border-gray-300`,
  };

  const [wasClicked, setWasClicked] = useState<boolean>(false);

  function searchMaterial(searchValue: string) {
    const filtered = materials.filter((material) =>
      material.toLowerCase().includes(searchValue),
    );
    setFilteredMaterials(filtered);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchValue(searchValue);

    searchMaterial(searchValue);
  };

  const handleSearchButton = () => {
    setSearchButtonClicked((prev) => prev + 1);
    searchMaterial(searchValue);
  };

  return (
    <div className={css.wrapper}>
      <Input
        type="text"
        className={`${!wasClicked && "font-medium text-gray-800"}`}
        value={searchValue}
        placeholder="Procurar material"
        onChange={handleSearch}
        onClick={(e) => {
          e.stopPropagation();
          setSearchButtonClicked((prev) => prev + 1);
          if (!wasClicked) {
            setWasClicked(true);
            setSearchValue("");
          }
        }}
      />
      <Button
        className="box-content h-full min-w-10 rounded-none"
        onClick={handleSearchButton}
      >
        <Icon LucideIcon={Search} />
      </Button>
    </div>
  );
};

/* ----------------Composition editor---------------- */
const CompositionEditor = () => {
  const [seeCommonFabrics, setSeeCommonFabrics] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [filteredMaterials, setFilteredMaterials] = useState<string[]>([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("Procurar material");
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [searchButtonClicked]);

  return (
    <div>
      <Materials
        ref={divRef}
        seeCommonFabrics={seeCommonFabrics}
        selectedMaterial={selectedMaterial}
        setSelectedMaterial={setSelectedMaterial}
        filteredMaterials={filteredMaterials}
        searchValue={searchValue}
      />

      <ButtonsWrapper
        className={`p-5 grid grid-cols-1 bp-576:grid-cols-2 gap-4`}
      >
        <SearchMaterial
          setSearchButtonClicked={setSearchButtonClicked}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setFilteredMaterials={setFilteredMaterials}
        />

        <Button
          onClick={() => {
            setSelectedMaterial("");
            setShow(true);
          }}
        >
          <Icon LucideIcon={Plus} />
          Outro material
        </Button>

        <Button
          onClick={() => {
            setSeeCommonFabrics(!seeCommonFabrics);
            setTimeout(() => {
              setSearchButtonClicked((prev) => prev + 1);
            }, 200);
          }}
          className={
            seeCommonFabrics ? "ring ring-blue-300 hover:bg-gray-100" : ""
          }
        >
          <Icon LucideIcon={Eye} />
          {seeCommonFabrics ? "Ver todos os materiais" : "Ver tecidos comuns"}
        </Button>
      </ButtonsWrapper>

      {show && (
        <Material
          setShow={setShow}
          selectedMaterial={selectedMaterial}
          setSelectedMaterial={setSelectedMaterial}
        />
      )}
    </div>
  );
};

export { CompositionEditor };
