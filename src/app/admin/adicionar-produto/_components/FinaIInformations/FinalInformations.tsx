import React from "react";
import DescriptionInput from "./components/DescriptionInput";
import SizeSelector from "./components/SizeSelector";
import CompositionEditor from "./components/CompositionEditor";
import { HeaderCard } from "@/app/loja/_ui";
import CardWrapper from "@/app/loja/_ui/CardWrapper";

const FinalInformations = () => {
  return (
    <CardWrapper>
      <HeaderCard
        wrapperTitleStyles="gap-[5px]!"
        title="Demais informações"
        icon="edit_note"
        iconStyles="font-medium!"
      />
      <CompositionEditor />
      <SizeSelector />
      <DescriptionInput />
    </CardWrapper>
  );
};

export default FinalInformations;
