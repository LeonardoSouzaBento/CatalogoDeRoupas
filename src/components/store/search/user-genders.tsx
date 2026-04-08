"use client";
import { ButtonsWrapper, CloseButton, MuiIcon } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/contexts/index";
import { genders } from "@/types/types";

export const UserGenders = () => {
  const {
    selectedGender,
    setSelectedGender,
    childCatSelected,
    setChildCatSelected,
  } = useUserContext();

  return (
    <div>
      <p className="mb-1 font-semibold tracking-wide">Gênero:</p>
      <ButtonsWrapper>
        {genders.map((gender) => (
          <Button
            size={"sm"}
            key={gender}
            onClick={() => {
              if (selectedGender !== gender) {
                setSelectedGender(gender);
              }
            }}
            variant={selectedGender === gender ? "default" : "outline"}
          >
            {gender}
          </Button>
        ))}
        <div className="flex-center h-max gap-2">
          <Button
            size={"sm"}
            variant={"ghost"}
            selected={childCatSelected}
            onClick={() => {
              setChildCatSelected(!childCatSelected);
            }}
          >
            <MuiIcon
              size="xl"
              icon={childCatSelected ? "check_box" : "check_box_outline_blank"}
              fill={childCatSelected ? true : false}
            />
            Infantil
          </Button>
          {childCatSelected && (
            <CloseButton
              size="icon-sm"
              iconSize="sm"
              setState={setChildCatSelected}
              className="text-red-800"
            />
          )}
        </div>
      </ButtonsWrapper>
    </div>
  );
};
