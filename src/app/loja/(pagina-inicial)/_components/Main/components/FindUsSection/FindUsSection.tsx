import ButtonSeeEditMode from "@/app/loja/_ui/ButtonSeeEditMode";
import WrapperHomeInput from "@/app/loja/_ui/WrapperHomeInput";
import type { AddressSchema } from "@/types/types";
import { PublicDataContext } from "@contexts/index";
import HomeTitleSubtitle from "@ui/HomeTitleSubtitle";
import React, { useContext, useState } from "react";
import ButtonCopy from "./components/ButtonCopy";
import AddressInput from "./inputs/AddressInput";
import ContactInput from "./inputs/ContactInput";
import MapInput from "./inputs/MapInput";

const css = {
  wrapper: "w-full m-auto max-w-210 flex flex-col gap-[18px]",
  container:
    `w-full p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 
    br-lg bg-white border-gray-200 shadow-soft hover:shadow-soft-hover fast-trans relative`,
  containerhomeEditMode: "sm:!flex-col !items-start pt-3 gap-4 ",
  wrapperInfo: "w-full flex justify-start items-center flex-auto gap-4",
  wrapperMap: "w-full h-[108vw] max-h-[480px]",
  wrapperMaphomeEditMode: "!h-auto !min-h-max p-5 pt-4",
  firstP: "mb-1",
  wrapperPs: "relative",
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

const FindUsSection = (): React.ReactElement => {
  const { shopInfo } = useContext(PublicDataContext);
  //foi copiado
  const [phoneCopied, setPhoneCopied] = useState<boolean>(false);
  const [addressCopied, setAddressCopied] = useState<boolean>(false);
  //ver
  const [seePhoneInput, setSeePhoneInput] = useState<boolean>(false);
  const [seeAddressInput, setSeeAddressInput] = useState<boolean>(false);
  const [seeMapInput, setSeeMapInput] = useState<boolean>(false);

  const shopAddressFormatted = formatAddress(shopInfo.address);
  const [sectionEditMode, setSectionEditMode] = useState<boolean>(false);

  return (
    <>
      <HomeTitleSubtitle
        title="Nos Encontre"
        subtitle="Visite nossa loja ou fale conosco"
        sectionEditMode={sectionEditMode}
        setSectionEditMode={setSectionEditMode}
      />

      <div>
        <div className={`${css.wrapper}`}>
          <div
            className={`${css.container} ${
              seePhoneInput && css.containerhomeEditMode
            }`}
          >
            {/* Telefone */}
            {!seePhoneInput ? (
              <>
                <div className={`${css.wrapperInfo}`}>
                  <span className="material-symbols-outlined span-fill">
                    call
                  </span>
                  <div className={`${css.wrapperPs}`}>
                    <p className={`${css.firstP}`}>
                      <strong>Whatsapp:</strong>
                    </p>
                    <p>{shopInfo.contact}</p>
                  </div>
                </div>
                <ButtonCopy
                  state={phoneCopied}
                  setState={setPhoneCopied}
                  firstText="Copiar Telefone"
                  textToCopy={shopInfo.contact}
                />
                {sectionEditMode && (
                  <ButtonSeeEditMode setState={setSeePhoneInput} />
                )}
              </>
            ) : (
              <WrapperHomeInput
                title="Adicione Seu Whatsapp"
                setState={setSeePhoneInput}
              >
                <ContactInput />
              </WrapperHomeInput>
            )}
          </div>
          {/* Endereço */}
          <div
            className={`${css.container} ${
              seeAddressInput && css.containerhomeEditMode
            }`}
          >
            {!seeAddressInput ? (
              <>
                <div className={`${css.wrapperInfo}`}>
                  <span className="material-symbols-outlined span-fill zoom-in-span">
                    home_pin
                  </span>
                  <div className={`${css.wrapperPs}`}>
                    <p className={`${css.firstP}`}>
                      <strong>Onde estamos:</strong>
                    </p>
                    <p>{shopAddressFormatted}</p>
                  </div>
                </div>
                <ButtonCopy
                  state={addressCopied}
                  setState={setAddressCopied}
                  firstText="Copiar Link Do Mapa"
                  textToCopy={shopAddressFormatted}
                />
                {sectionEditMode && (
                  <ButtonSeeEditMode setState={setSeeAddressInput} />
                )}
              </>
            ) : (
              <WrapperHomeInput
                title="Adicione Seu Endereço"
                setState={setSeeAddressInput}
              >
                <AddressInput />
              </WrapperHomeInput>
            )}
          </div>
          {/* Mapa */}
          <div
            className={`${css.container} ${css.wrapperMap} ${
              seeMapInput && css.wrapperMaphomeEditMode
            }`}
          >
            {!seeMapInput ? (
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
                {sectionEditMode && (
                  <ButtonSeeEditMode
                    setState={setSeeMapInput}
                    styles="absolute top-3 right-0"
                  />
                )}
              </>
            ) : (
              <WrapperHomeInput
                title="Atualize Seu Mapa"
                setState={setSeeMapInput}
              >
                <MapInput />
              </WrapperHomeInput>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FindUsSection;
