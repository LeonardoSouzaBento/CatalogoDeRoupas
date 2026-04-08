"use client";
import { Button, Icon } from "@/components/ui";
import { useUserContext } from "@/contexts/index";
import { mostSearched } from "@/data/UserData";
import { Search } from "lucide-react";
import { useState } from "react";

export const Suggestions = () => {
  const { selectedGender } = useUserContext();
  const suggestions =
    selectedGender === "masculino"
      ? mostSearched.masculino
      : mostSearched.feminino;
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="h-max shadow-xs rounded-md">
      <div className="relative">
        <p className="mb-2 font-semibold tracking-wide">Buscas Frequentes:</p>
      </div>
      <div
        className={`max-w-max grid grid-cols-2 grid-rows-4 
        sm:grid-cols-3 sm:grid-rows-3 gap-3`}
      >
        {suggestions.map((item: string) => (
          <Button
            selected={selected === item}
            variant={"ghost"}
            size={"sm"}
            data-option
            key={item}
            className="justify-start"
            onClick={() => {
              setSelected(item);
            }}
          >
            <Icon Svg={Search} size="lg" className="mb-1" />
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};
