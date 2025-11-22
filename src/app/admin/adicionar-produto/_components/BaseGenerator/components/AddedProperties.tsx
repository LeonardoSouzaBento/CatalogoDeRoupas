import { useContext } from "react";
import { UserContext } from "@/contexts";
import {
  BasicClothingInformation,
  mappingPropToKey,
  StateSetter,
} from "@/types/types";
import { X } from "lucide-react";
import { iconSm } from "@/app/lucideIconStyles";

const css = {
  container: `bg-white bs p-5`,
  wrapper: `flex flex-wrap gap-3`,
  wrapperButton: `min-h-10 max-w-max pl-4 pr-1 flex justify-between items-center gap-3 
  bg-white br-50 shadow-soft-soft bs`,
  button: `small-p size-8 centralize px-0 br-50 text-red-500 hover:underline `,
};

const AddedProperties = ({
  basicInformation,
  setBasicInformation,
}: {
  basicInformation: BasicClothingInformation;
  setBasicInformation: StateSetter<BasicClothingInformation>;
}) => {
  const { selectedGender } = useContext(UserContext);
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
    <div className={`${css.container}`}>
      <div className={`${css.wrapper}`}>
        {infoArray.map(
          (item) =>
            item.value && (
              <div key={item.label} className={`${css.wrapperButton}`}>
                <span className={`capitalize text-gray-800 small-p`}>
                  {item.label}:{" "}
                  <strong className={`font-semibold tracking-wide`}>
                    {item.value}
                  </strong>
                </span>
                <button
                  className={`${css.button}`}
                  onClick={() => clearValue(item.label)}
                >
                  <X {...iconSm} color="red" />
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default AddedProperties;
