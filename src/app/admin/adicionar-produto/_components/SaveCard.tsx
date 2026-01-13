import React from "react";
import SaveProductButton from "./Result/components/SaveProductButton";
import { HeaderCard } from "@/app/loja/_ui";

const css = { wrapper: `card-styles`, p: ``, button: `` };

const SaveCard = () => {
  return (
    <div className={css.wrapper}>
      <HeaderCard
        title="Salvar produto"
        icon="bucket_check"
        iconStyles=""
      />
      <SaveProductButton />
    </div>
  );
};

export default SaveCard;
