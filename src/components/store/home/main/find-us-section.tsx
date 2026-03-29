import { InputWrapper } from "@/components/store/home/ui/index";
import { SectionHeader } from "@/components/store/home/ui/index";
import { EditSectionButton } from "@/components/store/home/ui/edit-section-button";
import { PublicDataContext } from "@/contexts/index";
import type { AddressSchema } from "@/types/types";
import React, { useContext, useState } from "react";
import {
  CopyButton,
  InputAddress,
  InputContact,
  InputMap,
} from "./find-us-section/index";
import { Button, Icon, MuiIcon } from "@/components/ui";
import { Eye } from "lucide-react";

const css = {
  container: "w-full m-auto max-w-180 grid grid-cols-1 space-y-4",
  wrapper: `w-full p-6 pt-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 
  rounded-md bg-light-bg transition-200 relative`,
  wrapperEditMode: "sm:!flex-col !items-start pt-3 gap-4 ",
  infoWrapper: `w-full flex justify-start items-start flex-auto gap-3`,
  icon: `text-theme bg-theme-50 p-2 rounded-full mt-8`,
  mapWrapper: "w-full h-[108vw] max-h-[480px] p-6 pt-0 bg-light-bg",
  mapWrapperEditMode: "!h-auto !min-h-max p-5 pt-4",
  textWrapper: `relative space-y-0.5 [&>p:first-child]:text-sm [&>p:first-child]:uppercase 
  [&>p:first-child]:text-muted-foreground [&>p:first-child]:font-bold [&>p:last-child]:text-lg`,
};

function formatAddress(address: AddressSchema): string {
  const { rua, número, complemento, bairro, cidade, estado } = address;

  const parts = [
    rua,
    `${número}${complemento ? ` - ${complemento}` : ""}`,
    bairro,
    cidade,
    estado,
  ];

  return parts.filter(Boolean).join(", ");
}

export const FindUsSection = (): React.ReactElement => {
  const { shopInfo } = useContext(PublicDataContext);
  //foi copiado
  const [phoneCopied, setPhoneCopied] = useState<boolean>(false);
  const [addressCopied, setAddressCopied] = useState<boolean>(false);
  //ver
  const [seePhone, setSeePhone] = useState<boolean>(false);
  const [seeAddress, setSeeAddress] = useState<boolean>(false);
  const [seeMap, setSeeMap] = useState<boolean>(false);

  const shopAddressFormatted = formatAddress(shopInfo.address);
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <div>
      <SectionHeader
        title="Nos Encontre"
        subtitle="Visite nossa loja ou fale conosco"
        editMode={editMode}
        setEditMode={setEditMode}
      />

      <div>
        <div className={`${css.container}`}>
          {/* Telefone */}
          <div
            className={`${css.wrapper} shadow-sm/16 border-shadow hover:shadow-md rounded-lg crop
            ${seePhone && css.wrapperEditMode}`}
          >
            {!seePhone ? (
              <>
                <div className={`${css.infoWrapper}`}>
                  <MuiIcon icon="call" fill size="lg" className={css.icon} />
                  <div className={`${css.textWrapper}`}>
                    <p>Whatsapp:</p>
                    <p>{shopInfo.contact}</p>
                  </div>
                </div>
                <CopyButton
                  className="min-w-59.5 border border-border/50 sm:border-0"
                  state={phoneCopied}
                  setState={setPhoneCopied}
                  firstText="Copiar Telefone"
                  secondText="Telefone copiado!"
                  textToCopy={shopInfo.contact}
                />
                {editMode && (
                  <EditSectionButton
                    editMode={seePhone}
                    setEditMode={setSeePhone}
                  />
                )}
              </>
            ) : (
              <InputWrapper
                title="Adicione Seu Whatsapp"
                setState={setSeePhone}
              >
                <InputContact />
              </InputWrapper>
            )}
          </div>
          <div className="shadow-sm/16 border-shadow hover:shadow-md rounded-lg crop">
            {/* Endereço */}
            <div
              className={`${css.wrapper} mb-0 rounded-b-none
               ${seeAddress && css.wrapperEditMode}`}
            >
              {!seeAddress ? (
                <>
                  <div className={`${css.infoWrapper}`}>
                    <MuiIcon
                      icon="location_home"
                      fill
                      size="xl"
                      weight={500}
                      className={css.icon}
                    />
                    <div className={`${css.textWrapper}`}>
                      <p>Onde estamos:</p>
                      <p>{shopAddressFormatted}</p>
                    </div>
                  </div>
                  <Button
                    variant="transparent"
                    className="min-w-59.5 border border-border/50 sm:border-0"
                  >
                    <Icon LucideIcon={Eye} size="md" strokeWidth="medium" />
                    Ver no google maps
                  </Button>
                  {editMode && (
                    <EditSectionButton
                      editMode={seeAddress}
                      setEditMode={setSeeAddress}
                    />
                  )}
                </>
              ) : (
                <InputWrapper
                  title="Adicione Seu Endereço"
                  setState={setSeeAddress}
                >
                  <InputAddress />
                </InputWrapper>
              )}
            </div>
            {/* Mapa */}
            <div
              className={`${css.mapWrapper} ${seeMap && css.mapWrapperEditMode}`}
            >
              {!seeMap ? (
                <>
                  <iframe
                    className="rounded-md"
                    src={shopInfo.urlMap}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {editMode && (
                    <EditSectionButton
                      editMode={seeMap}
                      setEditMode={setSeeMap}
                      className="absolute top-3 right-0"
                    />
                  )}
                </>
              ) : (
                <InputWrapper title="Atualize Seu Mapa" setState={setSeeMap}>
                  <InputMap />
                </InputWrapper>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
