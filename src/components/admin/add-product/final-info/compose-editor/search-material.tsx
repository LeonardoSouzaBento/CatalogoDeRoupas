import { Button, Icon, Input } from "@/components/ui";
import { materials } from "@/data/clothings/materials";
import { StateSetter } from "@/types";
import { Search } from "lucide-react";
import { useState } from "react";

export const SearchMaterial = ({
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
    <Button variant={"secondary"} className="justify-end p-0">
      <Input
        type="text"
        className={`absolute inset-0 ${!wasClicked && "font-medium text-gray-800"}`}
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
        asChild
        variant={"transparent"}
        size={"icon"}
        onClick={handleSearchButton}
        className="mr-0.5"
      >
        <div>
          <Icon Svg={Search} size="lg" className="mb-px mr-px" />
        </div>
      </Button>
    </Button>
  );
};