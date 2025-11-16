import React from "react";
import DescriptionInput from "./components/DescriptionInput";
import SizeSelector from "./components/SizeSelector";
import CompositionEditor from "./components/CompositionEditor";
import { HeaderCard } from "@/app/loja/_ui";

const FinalInformations = () => {
  return (
    <div className={`basic-card-style max-w-3xl lg:max-w-4xl mx-auto`}>
      <HeaderCard
        title="Demais informações"
        icon="edit_note"
        spanStyles="font-medium! text-[1.277em]!"
      />
      <CompositionEditor />
      <SizeSelector />
      <DescriptionInput />
    </div>
  );
};

export default FinalInformations;
