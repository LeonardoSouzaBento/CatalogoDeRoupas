import { HeaderCard } from "@/app/loja/_ui";
import React from "react";
import Recommendations from "./components/Recommendations";

const Photos = () => {
  return (
    <div className={`basic-card-style max-w-3xl lg:max-w-4xl mx-auto`}>
      <HeaderCard title="Fotos" icon="photo_library"/>
      <Recommendations />
    </div>
  );
};

export default Photos;
