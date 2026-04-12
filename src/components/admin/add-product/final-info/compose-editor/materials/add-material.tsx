import { Input, CloseButton } from "@/components/ui";
import { StateSetter } from "@/types";
import { useEffect, useRef } from "react";

interface AddMaterialProps {
  selectedMaterial: string | null;
  setSelectedMaterial: StateSetter<string | null>;
  setShow: StateSetter<boolean>;
}

export const AddMaterial: React.FC<AddMaterialProps> = ({
  selectedMaterial,
  setSelectedMaterial,
  setShow,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="h-9 bg-gray-50 relative flex justify-end items-center">
      <Input
        ref={inputRef}
        className="absolute inset-0"
        type="text"
        placeholder="Digite o material"
        value={selectedMaterial || ""}
        onChange={(e) => setSelectedMaterial(e.target.value)}
      />

      <CloseButton setState={setShow} className="relative mr-1" />
    </div>
  );
};
