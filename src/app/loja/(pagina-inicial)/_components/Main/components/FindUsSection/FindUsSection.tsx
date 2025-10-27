import React, { useContext, useState } from "react";
import { PublicDataContext } from "@contexts/PublicDataContext";
import { Copy, CopyCheck, Check, CheckCheck } from "lucide-react";
import ContactInput from "./inputs/ContactInput";
import AddressInput from "./inputs/AddressInput";
import MapInput from "./inputs/MapInput";
import type { AddressSchema } from "@/types/types";
import WrapperForEditMode from "@ui/WrapperForEditMode";
import HomeTitleSubtitle from "@ui/HomeTitleSubtitle";

const css = {
  wrapper: "w-full m-auto max-w-210 flex flex-col gap-5",
  container:
    "w-full p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 !br-md bg-white border-gray-200 shadow-md hover:shadow-lg fast-trans relative",
  containerEditMode: "sm:!flex-col !items-start p-5 pt-4 gap-4 rounded-md",
  wrapperInfo: "w-full flex justify-start items-center flex-auto gap-4",
  button: "button min-w-max",
  img: "",
  wrapperMap:
    "w-full h-[80vw] md:h-[55vw] lg:h-[44vw] xl:h-[33vw] m-auto p-5 bg-white shadow-md hover:shadow-lg fast-trans relative",
  wrapperMapEditMode: "!h-auto !min-h-max p-5 pt-4 !rounded-md",
  firstP: "mb-1",
  wrapperPs: "relative",
  icon: { strokeWidth: 2.3, size: 18, color: "oklch(26.9% 0 0)" },
  iconCheck: { strokeWidth: 2.3, size: 19.5 },
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
  const { shopInfo, setShopInfo } = useContext(PublicDataContext);
  //foi copiado
  const [phoneCopied, setPhoneCopied] = useState<boolean>(false);
  const [addressCopied, setAddressCopied] = useState<boolean>(false);
  //foi salvo
  const [phoneSaved, setPhoneSaved] = useState<boolean>(false);
  const [addressSaved, setAddressSaved] = useState<boolean>(false);
  const [mapSaved, setMapSaved] = useState<boolean>(false);
  //ver
  const [seePhoneInput, setSeePhoneInput] = useState<boolean>(false);
  const [seeAddressInput, setSeeAddressInput] = useState<boolean>(false);
  const [seeMapInput, setSeeMapInput] = useState<boolean>(false);
  //salvar
  const [canSavePhone, setCanSavePhone] = useState<boolean>(false);
  const [canSaveAddress, setCanSaveAddress] = useState<boolean>(false);
  const [canSaveMap, setCanSaveMap] = useState<boolean>(false);

  const shopAddressFormatted = formatAddress(shopInfo.address);

  function handleClickCopy(text: string, type: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (type === "phone") {
          setPhoneCopied(true);
          setTimeout(() => setPhoneCopied(false), 2800);
        } else {
          setAddressCopied(true);
          setTimeout(() => setAddressCopied(false), 2800);
        }
      })
      .catch(console.error);
  }

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
            {!seePhoneInput && (
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
            )}
            {seePhoneInput && (
              <WrapperForEditMode
                title="Adicione Seu Whatsapp"
                seeButtonClose={true}
                setState={setSeePhoneInput}
              >
                <ContactInput
                  setPhoneSaved={setPhoneSaved}
                  shopInfo={shopInfo}
                  setShopInfo={setShopInfo}
                  canSavePhone={canSavePhone}
                />
              </WrapperForEditMode>
            )}
            {!seePhoneInput && (
              <button
                className={`${css.button}`}
                onClick={() => {
                  handleClickCopy(shopInfo.contact, "phone");
                }}
              >
                {!phoneCopied ? (
                  <Copy {...css.icon} />
                ) : (
                  <CopyCheck {...css.icon} />
                )}
                {!phoneCopied ? "Copiar Telefone" : "Copiado!"}
              </button>
            )}
            {seePhoneInput && (
              <button
                className={`${css.button}`}
                onClick={() => {
                  setCanSavePhone(true);
                  setTimeout(() => {
                    setCanSavePhone(false);
                  }, 200);
                }}
              >
                {!phoneSaved ? "Salvar Whatsapp" : "Salvo!"}
                {!phoneSaved ? (
                  <Check {...css.iconCheck} />
                ) : (
                  <CheckCheck {...css.iconCheck} />
                )}
              </button>
            )}
          </div>
          <div
            className={`${css.container} ${
              seeAddressInput && css.containerEditMode
            }`}
          >
            {!seeAddressInput && (
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
            )}
            {seeAddressInput && (
              <WrapperForEditMode
                title="Adicione Seu Endereço"
                seeButtonClose={true}
                setState={setSeeAddressInput}
              >
                <AddressInput
                  canSaveAddress={canSaveAddress}
                  setAddressSaved={setAddressSaved}
                  shopInfo={shopInfo}
                  setShopInfo={setShopInfo}
                />
              </WrapperForEditMode>
            )}
            {!seeAddressInput && (
              <button
                className={`${css.button}`}
                onClick={() => {
                  handleClickCopy(shopAddressFormatted, "address");
                }}
              >
                {!addressCopied ? (
                  <Copy {...css.icon} />
                ) : (
                  <CopyCheck {...css.icon} />
                )}
                {!addressCopied ? "Copiar Link Do Mapa" : "Copiado!"}
              </button>
            )}
            {seeAddressInput && (
              <button
                className={`${css.button}`}
                onClick={() => {
                  setCanSaveAddress(true);
                  setTimeout(() => {
                    setCanSaveAddress(false);
                  }, 200);
                }}
              >
                {!addressSaved ? "Salvar Endereço" : "Salvo!"}
                {!addressSaved ? (
                  <Check {...css.iconCheck} />
                ) : (
                  <CheckCheck {...css.iconCheck} />
                )}
              </button>
            )}
          </div>
          <div
            className={`${css.wrapperMap} ${
              seeMapInput && css.wrapperMapEditMode
            }`}
          >
            {!seeMapInput && (
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
            )}
            {seeMapInput && (
              <WrapperForEditMode
                title="Atualize Seu Mapa"
                seeButtonClose={true}
                setState={setSeeMapInput}
              >
                <MapInput
                  canSaveMap={canSaveMap}
                  setMapSaved={setMapSaved}
                  setCanSaveMap={setCanSaveMap}
                  shopInfo={shopInfo}
                  setShopInfo={setShopInfo}
                />
              </WrapperForEditMode>
            )}
            {seeMapInput && (
              <button
                className={`${css.button}`}
                onClick={() => {
                  setCanSaveAddress(true);
                  setTimeout(() => {
                    setCanSaveAddress(false);
                  }, 200);
                }}
              >
                {!mapSaved ? "Atualizar Mapa" : "Mapa Salvo!"}
                {!mapSaved ? (
                  <Check {...css.iconCheck} />
                ) : (
                  <CheckCheck {...css.iconCheck} />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FindUsSection;
