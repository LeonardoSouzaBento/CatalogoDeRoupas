import { Button } from "@/components/ui/button";
import { useUserContext } from "@/contexts/index";
import {
  BasicClothingInformation,
  mappingPropToKey,
  StateSetter,
} from "@/types/types";
import { X } from "lucide-react";
import { Icon } from "@/components/ui";

const css = {
  wrapper: `flex flex-wrap gap-3`,
  buttonWrapper: `max-w-max pl-0.5! flex justify-between`,
  name: `capitalize font-normal`,
  strong: `font-bold tracking-wide uppercase`,
};

const AddedProperties = ({
  basicInformation,
  setBasicInformation,
}: {
  basicInformation: BasicClothingInformation;
  setBasicInformation: StateSetter<BasicClothingInformation>;
}) => {
  const { selectedGender } = useUserContext();
  // transforma em array de pares rotulo/valor
  const infoArray = [
    { label: "Gênero", value: basicInformation.gender },
    { label: "Categoria", value: basicInformation.cat },
    { label: "Subcategoria", value: basicInformation.subcat },
    { label: "Padrão", value: basicInformation.pattern },
    { label: "Estampa", value: basicInformation.print },
    {
      label: "É Infantil",
      value: basicInformation.is_childish,
    },
  ];

  // limpa valor individual
  const clearValue = (label: string) => {
    const key = mappingPropToKey[label as keyof typeof mappingPropToKey];

    if (!key) return;

    const valueToSet = key === "gender" ? selectedGender : "";

    setBasicInformation((prev) => ({
      ...prev,
      [key]: valueToSet,
    }));
  };

  return (
    <div className={`${css.wrapper}`}>
      {infoArray.map(
        (item) =>
          item.value && (
            <Button
              data-option
              size={"sm"}
              key={item.label}
              variant={"ghost"}
              className={`${css.buttonWrapper}`}
            >
              <Button
                asChild
                variant="secondary"
                data-destructive
                size="icon-sm"
                className="rounded-full text-red-700 hover:text-red-700"
                onClick={() => clearValue(item.label)}
              >
                <div>
                  <Icon Svg={X} size="base" strokeWidth="medium" />
                </div>
              </Button>
              <span className={css.name}>
                {item.label}:{" "}
                <strong className={css.strong}>{item.value}</strong>
              </span>
            </Button>
          ),
      )}
    </div>
  );
};

export { AddedProperties };
