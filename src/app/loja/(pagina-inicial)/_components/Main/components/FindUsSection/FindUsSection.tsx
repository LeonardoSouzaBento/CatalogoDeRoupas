import React, { useContext, useState } from "react";
import { PublicDataContext, HomeDataContext } from "@contexts/index";
import ContactInput from "./inputs/ContactInput";
import AddressInput from "./inputs/AddressInput";
import MapInput from "./inputs/MapInput";
import type { AddressSchema } from "@/types/types";
import HomeTitleSubtitle from "@ui/HomeTitleSubtitle";
import ButtonCopy from "./components/ButtonCopy";
import ButtonSeeEditMode from "@/app/loja/_ui/ButtonSeeEditMode";
import WrapperHomeInput from "@/app/loja/_ui/WrapperHomeInput";

const css = {
  wrapper: "w-full m-auto max-w-210 flex flex-col gap-5",
  container:
    "w-full p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 br-lg bg-white border-gray-200 soft-shadow hover:shadow-lg fast-trans relative",
  containerEditMode: "sm:!flex-col !items-start p-5 pt-4 gap-4 rounded-md",
  wrapperInfo: "w-full flex justify-start items-center flex-auto gap-4",
  img: "",
  wrapperMap:
    "w-full h-[80vw] md:h-[55vw] lg:h-[44vw] xl:h-[33vw] m-auto p-5 br-lg bg-white soft-shadow hover:shadow-lg fast-trans relative",
  wrapperMapEditMode: "!h-auto !min-h-max p-5 pt-4 !rounded-md",
  firstP: "mb-1",
  wrapperPs: "relative",
};

function formatAddress(address: AddressSchema): string {
  const { rua, numero, complemento, bairro, cidade, estado } = address;

  const parts = [
    rua,
    `${numero}${complemento ? ` - ${complemento}` : ""}`,
    bairro,
    cidade,
    estado,
  ];

  return parts.filter(Boolean).join(", ");
}

const FindUsSection = (): React.ReactElement => {
  const { shopInfo } = useContext(PublicDataContext);
  const { editMode } = useContext(HomeDataContext);
  //foi copiado
  const [phoneCopied, setPhoneCopied] = useState<boolean>(false);
  const [addressCopied, setAddressCopied] = useState<boolean>(false);
  //ver
  const [seePhoneInput, setSeePhoneInput] = useState<boolean>(false);
  const [seeAddressInput, setSeeAddressInput] = useState<boolean>(false);
  const [seeMapInput, setSeeMapInput] = useState<boolean>(false);

  const shopAddressFormatted = formatAddress(shopInfo.address);

  return (
    <>
      <HomeTitleSubtitle
        title="Nos Encontre"
        subtitle="Visite nossa loja ou fale conosco"
      />
      <div>
        <div className={`${css.wrapper}`}>
          <div
            className={`${css.container} ${
              seePhoneInput && css.containerEditMode
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
                {editMode && <ButtonSeeEditMode setState={setSeePhoneInput} />}
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
              seeAddressInput && css.containerEditMode
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
                {editMode && (
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
            className={`${css.wrapperMap} ${
              seeMapInput && css.wrapperMapEditMode
            }`}
          >
            {!seeMapInput ? (
              <>
                <iframe
                  className="rounded-sm"
                  src={shopInfo.urlMap}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {editMode && <ButtonSeeEditMode setState={setSeeMapInput} />}
              </>
            ) : (
              <WrapperHomeInput
                title="Atualize Seu Mapa"
                setState={setSeeMapInput}
              >
                <MapInput/>
              </WrapperHomeInput>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FindUsSection;
