import { Copy, CopyCheck } from "lucide-react";
import type { AddressSchema } from "@localtypes/types";
import { defaultShopInfo } from "@/data/home/publicData";

const css = {
  wrapper: "w-full m-auto max-w-210 flex flex-col gap-3",
  container:
    "w-full p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-white border-gray-200 shadow-md hover:shadow-lg fast-trans relative",
  wrapperInfo: "w-full flex justify-start items-center flex-auto gap-4",
  button: "base-button-light min-w-max",
  img: "",
  wrapperMap:
    "w-full h-[80vw] md:h-[55vw] lg:h-[44vw] xl:h-[33vw] m-auto p-4 bg-white shadow-md hover:shadow-lg fast-trans relative",
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
  const shopAddressFormatted = formatAddress(defaultShopInfo.address);
  let phoneCopied = false;
  let addressCopied = false;

  function handleClickCopy(text: string, type: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (type === "phone") {
          phoneCopied = true;
          setTimeout(() => (phoneCopied = false), 2800);
        } else {
          addressCopied = true;
          setTimeout(() => (addressCopied = false), 2800);
        }
      })
      .catch(console.error);
  }

  return (
    <section className="border-none">
      <h1>Nos Encontre</h1>
      <h2>Visite nossa loja ou fale conosco</h2>
      <div>
        <div className={`${css.wrapper}`}>
          <div className={`${css.container}`}>
            <div className={`${css.wrapperInfo}`}>
              <span className="material-symbols-outlined span-fill">call</span>

              <div className={`${css.wrapperPs}`}>
                <p className={`${css.firstP}`}>
                  <strong>Whatsapp:</strong>
                </p>
                <p>{defaultShopInfo.contact}</p>
              </div>
            </div>

            <button
              className={`${css.button}`}
              onClick={() => {
                handleClickCopy(defaultShopInfo.contact, "phone");
              }}
            >
              {!phoneCopied ? (
                <Copy {...css.icon} />
              ) : (
                <CopyCheck {...css.icon} />
              )}
              {!phoneCopied ? "Copiar Telefone" : "Copiado!"}
            </button>
          </div>

          <div className={`${css.container}`}>
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
          </div>
          <div className={`${css.wrapperMap}`}>
            <iframe
              className="rounded-sm"
              src={defaultShopInfo.urlMap}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
