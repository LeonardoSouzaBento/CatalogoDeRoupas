import { ButtonsWrapper, CloseButton, Icon } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { defaultShopInfo } from "@/data/home/publicData";
import type { BooleanSetter, ShopInfo, StateSetter } from "@/types/types";
import { Check, Trash, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const css = {
  wrapper: "relative bg-light-bg rounded-md -mt-2",
  wrapperButtons:
    "w-full h-auto flex flex-col sm:flex-row sm:flex-wrap justify-end gap-2",
  buttons: "w-full sm:w-70 md:w-max button !justify-start  xl:",
};

type AboutProps = {
  shopInfo: ShopInfo;
  setShopInfo: StateSetter<ShopInfo>;
  setSeeInput: BooleanSetter;
};

const AboutInput = ({
  shopInfo,
  setShopInfo,
  setSeeInput,
}: AboutProps): React.ReactElement => {
  const [Value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(shopInfo.aboutText.join("\n\n"));
  }, []);

  function handleEnterEdit() {
    if (Value.length >= 760 && Value.length <= 1000) {
      const paragraphs = Value.split(/\r?\n/)
        .map((p) => p.trim())
        .filter((p) => p);

      setShopInfo({
        ...shopInfo,
        aboutText: paragraphs,
      });
    }
  }

  function handleDiscardChanges() {
    setShopInfo({
      ...shopInfo,
      aboutText: defaultShopInfo.aboutText,
    });
    setSeeInput(false);
  }

  return (
    <div className={`${css.wrapper}`}>
      <CloseButton
        setState={setSeeInput}
        className="absolute -top-3 -right-3"
      />

      <Textarea
        value={Value}
        className="mb-5"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onClick={() => {
          handleEnterEdit();
        }}
      />
      <ButtonsWrapper className="justify-end">
        <Button
          data-round
          variant="destructive"
          className="w-full sm:w-70 md:w-max order-2 sm:order-1"
          onClick={() => {
            setValue("");
          }}
        >
          <Icon Svg={Trash} />
          Deletar Todo o Texto
        </Button>

        <Button
          data-round
          className="w-full sm:w-70 md:w-max order-3 sm:order-3"
        >
          <Icon Svg={Check} size="md" />
          Salvar
        </Button>

        <Button
          data-round
          variant="ghost"
          className="w-full sm:w-70 md:w-max order-2 sm:order-2"
          onClick={handleDiscardChanges}
        >
          <Icon Svg={X} size="md" />
          Descartar Alterações
        </Button>
      </ButtonsWrapper>
    </div>
  );
};

export { AboutInput };
