"use client";
import { HeaderCard } from "@/app/loja/_ui";
import { UserContext } from "@/contexts/UserContext";
import { basicMaleClothes } from "@/data/clothingData/basicMaleClothes";
import { basicFemaleClothes } from "@data/clothingData/basicFemaleClothes";
import { useContext, useState } from "react";
import Description from "./components/Description";
import BaseClothingOptions from "./components/BaseClothingOptions";

const css = {
  wrapper: `basic-card-style max-w-192 m-auto br-lg`,
};

const ProductBasesList = () => {
  const { selectedGender } = useContext(UserContext);
  const [selectedName, setSelectedName] = useState<string>("");

  const clothes =
    selectedGender === "masculino" ? basicMaleClothes : basicFemaleClothes;

  return (
    <div className={css.wrapper}>
      <HeaderCard
        title="Definir uma roupa base (opcional)"
        subtitle="Adicione informações mais rapidamente"
        icon="apparel"
        spanStyles="text-[1.2em]!"
        wrapperStyles="bs-b bs-light-color"
      />

      <BaseClothingOptions
        clothes={clothes}
        selectedName={selectedName}
        setSelectedName={setSelectedName}
      />

      <Description selectedName={selectedName} />
    </div>
  );
};

export default ProductBasesList;
