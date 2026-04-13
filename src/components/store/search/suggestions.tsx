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
    <div className="pt-2 h-max shadow-xs rounded-md">
      <div className="relative">
        <p className="mb-3 text-muted-foreground uppercase tracking-wider text-sm">
          Buscas Frequentes:
        </p>
      </div>
      <div
        className={`max-w-max grid grid-cols-2 grid-rows-4 
        sm:grid-cols-3 sm:grid-rows-3 gap-3`}
      >
        {suggestions.map((item: string) => (
          <Button
            selected={selected === item}
            variant={"transparent"}
            size={"sm"}
            data-option
            key={item}
            className="justify-start shadow-xs/32"
            onClick={() => {
              setSelected(item);
            }}
          >
            <Icon
              Svg={Search}
              size="lg"
              className="mb-1 text-input-border"
            />
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};
