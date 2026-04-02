"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AddMaterial, Materials, SearchMaterial } from "./compose-editor/index";
import { Button, ButtonsWrapper, Icon } from "@/components/ui";

/* ----------------Composition editor---------------- */
const CompositionEditor = ({ trigger }: { trigger: React.ReactNode }) => {
  const [seeCommonFabrics, setSeeCommonFabrics] = useState<boolean>(false);
  const [seeNewMaterialInput, setSeeNewMaterialInput] =
    useState<boolean>(false);
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
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Composição</DialogTitle>
        </DialogHeader>
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
            {seeNewMaterialInput ? (
              <AddMaterial
                setShow={setSeeNewMaterialInput}
                selectedMaterial={selectedMaterial}
                setSelectedMaterial={setSelectedMaterial}
              />
            ) : (
              <Button
                className="max-w-max pl-[0.78em]"
                onClick={() => {
                  setSelectedMaterial("");
                  setSeeNewMaterialInput(true);
                }}
              >
                <Icon Svg={Plus} size="lg" strokeWidth="light" />
                Outro material
              </Button>
            )}

            <Button
              variant={"outline"}
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
              <Icon Svg={Eye} size="md" strokeWidth="semibold" />
              {seeCommonFabrics ? "Ver todos os materiais" : "Ver tecidos comuns"}
            </Button>
          </ButtonsWrapper>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { CompositionEditor };
