"use client";
import { HeaderCard } from "@/app/loja/_ui";
import { UserContext } from "@/contexts/UserContext";
import { basicMaleClothes } from "@/data/clothingData/basicMaleClothes";
import { basicFemaleClothes } from "@data/clothingData/basicFemaleClothes";
import { useContext, useState } from "react";
import Description from "./components/Description";
import BaseClothingOptions from "./components/BaseClothingOptions";
import { ResizableDivTitle } from "@/app/admin/_ui/ResizableCardTitle";

const css = {
  wrapper: `card-styles crop`,
};

const ProductBasesList = () => {
  const { selectedGender } = useContext(UserContext);
  const [selectedName, setSelectedName] = useState<string>("");

  const clothes =
    selectedGender === "masculino" ? basicMaleClothes : basicFemaleClothes;

  const [expand, setExpand] = useState<boolean>(false);
  const [divHeight, setDivHeight] = useState<string | null>("");

  return (
    <div
      className={css.wrapper}
      style={{ height: expand ? "auto" : divHeight || "auto" }}
    >
      <ResizableDivTitle
        expand={expand}
        setExpand={setExpand}
        setDivHeight={setDivHeight}
        valueToFixHeight={12}
        buttonStyles="mt-4!"
      >
        <HeaderCard
          title="Roupa base (opcional)"
          subtitle="Adicione informações mais rapidamente"
          icon="apparel"
          iconStyles="span19 mr-1"
          wrapperStyles="bs-b bs-light-color"
          collapsedDiv={!expand}
        />
      </ResizableDivTitle>

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
