"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import { Materials } from "./compose-editor/materials";
import { CommonFabrics } from "./compose-editor/common-fabrics";

/* ----------------Composition editor---------------- */
const CompositionEditor = ({ trigger }: { trigger: React.ReactNode }) => {
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
      <DialogContent className="max-w-2xl gap-2.5">
        <DialogHeader>
          <DialogTitle>
            <h6>Composição</h6>
          </DialogTitle>
        </DialogHeader>
        <CommonFabrics />
        <Materials
          selectedMaterial={selectedMaterial}
          setSelectedMaterial={setSelectedMaterial}
          filteredMaterials={filteredMaterials}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setFilteredMaterials={setFilteredMaterials}
          setSearchButtonClicked={setSearchButtonClicked}
          seeNewMaterialInput={seeNewMaterialInput}
          setSeeNewMaterialInput={setSeeNewMaterialInput}
          divRef={divRef}
        />
      </DialogContent>
    </Dialog>
  );
};

export { CompositionEditor };
